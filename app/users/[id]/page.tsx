'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { USERS } from '@/api/users';
import { useParams } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Play, Pause, Save, Edit3 } from 'lucide-react';

interface AudioNote {
  id: string;
  timestamp: Date;
  duration: number;
  transcription: string;
  audioBlob: Blob | null;
  editedTranscription: string;
}

const User = () => {
  const params = useParams();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [currentAudio, setCurrentAudio] = useState<Blob | null>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [editedTranscription, setEditedTranscription] = useState('');

  const [savedNotes, setSavedNotes] = useState<AudioNote[]>([]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const user = USERS.find((user) => user.id == params.id);

  useEffect(() => {
    const saved = localStorage.getItem('audioNotes');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const notesWithDates = parsed.map((note: AudioNote) => ({
          ...note,
          timestamp: new Date(note.timestamp),
        }));
        setSavedNotes(notesWithDates);
      } catch (error) {
        console.error('Error loading saved notes:', error);
      }
    }
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
        },
      });

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus',
      });

      mediaRecorderRef.current = mediaRecorder;
      const audioChunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (event) => audioChunks.push(event.data);

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        setCurrentAudio(audioBlob);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      recordingIntervalRef.current = setInterval(
        () => setRecordingTime((prev) => prev + 1),
        1000,
      );
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Unable to access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (recordingIntervalRef.current)
        clearInterval(recordingIntervalRef.current);
    }
  };

  const togglePlayback = () => {
    if (!currentAudio) return;

    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        const audio = new Audio(URL.createObjectURL(currentAudio));
        audioRef.current = audio;
        audio.onended = () => setIsPlaying(false);
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  const transcribeAudio = async () => {
    if (!currentAudio) return;

    setIsTranscribing(true);
    try {
      const formData = new FormData();
      formData.append('file', currentAudio, 'audio.webm');
      formData.append('model', 'whisper-1');

      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Transcription failed');

      const result = await response.json();
      setTranscription(result.text);
      setEditedTranscription(result.text);
    } catch (error) {
      console.error('Transcription error:', error);
      alert('Transcription failed. Please try again.');
    } finally {
      setIsTranscribing(false);
    }
  };

  const saveNote = () => {
    if (!currentAudio || !editedTranscription.trim()) {
      alert('Please record audio and add transcription before saving.');
      return;
    }

    const newNote: AudioNote = {
      transcription,
      editedTranscription,
      timestamp: new Date(),
      audioBlob: currentAudio,
      duration: recordingTime,
      id: Date.now().toString(),
    };

    const updatedNotes = [newNote, ...savedNotes];
    setSavedNotes(updatedNotes);

    const notesToSave = updatedNotes.map(({ audioBlob, ...note }) => note);
    localStorage.setItem('audioNotes', JSON.stringify(notesToSave));

    setRecordingTime(0);
    setIsEditing(false);
    setTranscription('');
    setCurrentAudio(null);
    setEditedTranscription('');

    alert('Note saved successfully!');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="flex gap-2 sm:gap-6 grow md:gap-8 lg:gap-10 h-full flex-col-reverse lg:flex-row">
      <aside className="lg:w-80 bg-white shadow-lg border-r border-gray-200 p-6 rounded-lg">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div
              className={clsx(
                'relative w-10 h-10 aspect-square rounded-full overflow-hidden',
              )}
            >
              <Image
                fill
                alt="user image"
                src={user?.profilePictureUrl || ''}
                className="absolute w-full h-full object-cover rounded-[5.185px]"
              />
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">{`${user?.firstName} ${user?.lastName}`}</h3>
              <p className="text-sm text-gray-600">{user?.gender}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Problems</h4>
            <p className="text-sm text-gray-500">{user?.problems}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Goals</h4>
            <p className="text-sm text-gray-500">{user?.goals}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Bio</h4>
            <p className="text-sm text-gray-500">{user?.bio}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Age</h4>
            <p className="text-sm text-gray-500">{user?.age}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Languages</h4>
            <p className="text-sm text-gray-500">
              {user?.languages?.join(', ')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Recent Notes</h4>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {savedNotes.slice(0, 5).map((note) => (
                <div key={note.id} className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {note.editedTranscription}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {note.timestamp.toLocaleString()} •{' '}
                    {formatTime(note.duration)}
                  </p>
                </div>
              ))}
              {savedNotes.length === 0 && (
                <p className="text-sm text-gray-500 italic">No notes yet</p>
              )}
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 grow flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-900 mt-5 px-5">
          Voice Notes
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 grow flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Record Audio</h2>

          <div className="flex flex-col justify-center items-center space-y-4 grow">
            <div className="text-2xl font-mono text-gray-700">
              {formatTime(recordingTime)}
            </div>

            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                isRecording
                  ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {isRecording ? (
                <MicOff className="w-8 h-8 text-white cursor-pointer" />
              ) : (
                <Mic className="w-8 h-8 text-white cursor-pointer" />
              )}
            </button>

            <p className="text-sm text-gray-600">
              {isRecording
                ? 'Recording... Tap to stop'
                : 'Tap to start recording'}
            </p>
          </div>
        </div>

        <div
          className={`bg-white rounded-xl shadow-lg p-6 mb-6 ${
            currentAudio ? 'visible' : 'invisible'
          }`}
        >
          <h3 className="text-lg font-semibold mb-4">Playback</h3>
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlayback}
              className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white ml-1" />
              )}
            </button>
            <span className="text-sm text-gray-600">
              Duration: {formatTime(recordingTime)}
            </span>
            <button
              onClick={transcribeAudio}
              disabled={isTranscribing}
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 text-white rounded-lg text-sm"
            >
              {isTranscribing ? 'Transcribing...' : 'Transcribe'}
            </button>
          </div>
        </div>

        {transcription && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Transcription</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                <Edit3 className="w-4 h-4" />
                <span className="text-sm">{isEditing ? 'View' : 'Edit'}</span>
              </button>
            </div>

            {isEditing ? (
              <textarea
                value={editedTranscription}
                onChange={(e) => setEditedTranscription(e.target.value)}
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Edit your transcription here..."
              />
            ) : (
              <div className="p-3 bg-gray-50 rounded-lg min-h-32">
                <p className="text-gray-700 whitespace-pre-wrap">
                  {editedTranscription || 'No transcription available'}
                </p>
              </div>
            )}
          </div>
        )}

        {currentAudio && editedTranscription && (
          <div className="flex justify-center">
            <button
              onClick={saveNote}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
            >
              <Save className="w-5 h-5" />
              <span>Save Note</span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default User;
