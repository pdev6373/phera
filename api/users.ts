export enum UserCategory {
  Art = 'Art',
  Family = 'Family',
  Trauma = 'Trauma',
  Substance = 'Substance',
  Behavioral = 'Behavioral',
}

export type UserCategoryType = `${UserCategory}`;
export const UserCategoryArray: UserCategory[] = Object.values(UserCategory);

export type User = {
  id: string;
  bio: string;
  age: number;
  email?: string;
  goals: string;
  lastName: string;
  location: string;
  problems?: string;
  firstName: string;
  languages: string[];
  phoneNumber?: string;
  profilePictureUrl: string;
  category: UserCategoryType;
  gender?: 'Male' | 'Female' | 'Other';
};

type PrivateUserFields = 'licenseNumber' | 'email' | 'phoneNumber';

export type PublicUserProfile = Omit<User, PrivateUserFields>;

export const USERS: User[] = [
  {
    id: 'U1001',
    firstName: 'Liam',
    lastName: 'Anderson',
    age: 29,
    gender: 'Male',
    bio: 'Software engineer dealing with work stress.',
    problems: 'Anxiety and trouble sleeping due to workload.',
    goals: 'Manage stress and improve work-life balance.',
    languages: ['English'],
    location: 'New York, NY',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Liam+Anderson&background=0D8ABC&color=fff&size=512',
    category: 'Behavioral',
  },
  {
    id: 'U1002',
    firstName: 'Emma',
    lastName: 'Rodriguez',
    age: 35,
    gender: 'Female',
    bio: 'Mother of two seeking family guidance.',
    problems: 'Communication challenges with spouse and children.',
    goals: 'Improve family dynamics and understanding.',
    languages: ['English', 'Spanish'],
    location: 'Los Angeles, CA',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Emma+Rodriguez&background=FF6F61&color=fff&size=512',
    category: 'Family',
  },
  {
    id: 'U1003',
    firstName: 'Noah',
    lastName: 'Patel',
    age: 40,
    gender: 'Male',
    bio: 'Coping with past trauma.',
    problems: 'Flashbacks and anxiety from a car accident.',
    goals: 'Overcome trauma and regain confidence.',
    languages: ['English'],
    location: 'Chicago, IL',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Noah+Patel&background=6A0572&color=fff&size=512',
    category: 'Trauma',
  },
  {
    id: 'U1004',
    firstName: 'Sophia',
    lastName: 'Lee',
    age: 28,
    gender: 'Female',
    bio: 'Recovering from substance abuse.',
    problems: 'Struggling with alcohol cravings.',
    goals: 'Stay sober and build a healthier lifestyle.',
    languages: ['English', 'Korean'],
    location: 'Seattle, WA',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Sophia+Lee&background=F7B801&color=fff&size=512',
    category: 'Substance',
  },
  {
    id: 'U1005',
    firstName: 'Ethan',
    lastName: 'Nguyen',
    age: 32,
    gender: 'Male',
    bio: 'Looking for creative ways to reduce stress.',
    problems: 'Feeling overwhelmed and low motivation.',
    goals: 'Use art therapy to express emotions and reduce anxiety.',
    languages: ['English', 'Vietnamese'],
    location: 'San Francisco, CA',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Ethan+Nguyen&background=2E8BC0&color=fff&size=512',
    category: 'Art',
  },
  {
    id: 'U1006',
    firstName: 'Olivia',
    lastName: 'Brown',
    age: 27,
    gender: 'Female',
    bio: 'Student managing anxiety.',
    problems: 'Panic attacks during exams.',
    goals: 'Learn coping mechanisms for anxiety.',
    languages: ['English'],
    location: 'Boston, MA',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Olivia+Brown&background=FF5733&color=fff&size=512',
    category: 'Behavioral',
  },
  {
    id: 'U1007',
    firstName: 'William',
    lastName: 'Davis',
    age: 45,
    gender: 'Male',
    bio: 'Struggling with work-life balance.',
    problems: 'Chronic stress and low productivity.',
    goals: 'Manage stress and improve personal relationships.',
    languages: ['English'],
    location: 'Austin, TX',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=William+Davis&background=1ABC9C&color=fff&size=512',
    category: 'Behavioral',
  },
  {
    id: 'U1008',
    firstName: 'Isabella',
    lastName: 'Lee',
    age: 38,
    gender: 'Female',
    bio: 'Looking for self-expression through therapy.',
    problems: 'Difficulty expressing emotions.',
    goals: 'Use art to improve emotional wellbeing.',
    languages: ['English'],
    location: 'San Diego, CA',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Isabella+Lee&background=9B59B6&color=fff&size=512',
    category: 'Art',
  },
  {
    id: 'U1009',
    firstName: 'Alexander',
    lastName: 'White',
    age: 50,
    gender: 'Male',
    bio: 'Coping with grief after losing a spouse.',
    problems: 'Depression and social withdrawal.',
    goals: 'Process grief and regain social connection.',
    languages: ['English'],
    location: 'Miami, FL',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Alexander+White&background=34495E&color=fff&size=512',
    category: 'Behavioral',
  },
  {
    id: 'U1010',
    firstName: 'Mia',
    lastName: 'Patel',
    age: 31,
    gender: 'Female',
    bio: 'Seeking support for relationship issues.',
    problems: 'Conflicts with partner and family.',
    goals: 'Strengthen relationships and communication skills.',
    languages: ['English'],
    location: 'Dallas, TX',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Mia+Patel&background=E67E22&color=fff&size=512',
    category: 'Family',
  },
  {
    id: 'U1011',
    firstName: 'Liam',
    lastName: 'Harris',
    age: 26,
    gender: 'Male',
    bio: 'Dealing with workplace anxiety.',
    problems: 'Difficulty managing deadlines.',
    goals: 'Reduce anxiety and improve focus at work.',
    languages: ['English'],
    location: 'Portland, OR',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Liam+Harris&background=27AE60&color=fff&size=512',
    category: 'Behavioral',
  },
  {
    id: 'U1012',
    firstName: 'Charlotte',
    lastName: 'Lopez',
    age: 34,
    gender: 'Female',
    bio: 'Looking to address negative thought patterns.',
    problems: 'Persistent negative self-talk.',
    goals: 'Develop healthier thinking habits.',
    languages: ['English', 'Spanish'],
    location: 'San Diego, CA',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Charlotte+Lopez&background=C0392B&color=fff&size=512',
    category: 'Behavioral',
  },
  {
    id: 'U1013',
    firstName: 'Ethan',
    lastName: 'Scott',
    age: 39,
    gender: 'Male',
    bio: 'Couples seeking therapy support.',
    problems: 'Frequent arguments with partner.',
    goals: 'Improve communication and relationship satisfaction.',
    languages: ['English'],
    location: 'Atlanta, GA',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Ethan+Scott&background=2980B9&color=fff&size=512',
    category: 'Family',
  },
  {
    id: 'U1014',
    firstName: 'Amelia',
    lastName: 'Clark',
    age: 42,
    gender: 'Female',
    bio: 'Managing work-related stress.',
    problems: 'Feeling burned out and fatigued.',
    goals: 'Develop coping strategies and relaxation techniques.',
    languages: ['English'],
    location: 'Orlando, FL',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Amelia+Clark&background=8E44AD&color=fff&size=512',
    category: 'Behavioral',
  },
  {
    id: 'U1015',
    firstName: 'Noah',
    lastName: 'Adams',
    age: 36,
    gender: 'Male',
    bio: 'Depression management support.',
    problems: 'Persistent low mood and lack of motivation.',
    goals: 'Improve mood and daily functioning.',
    languages: ['English'],
    location: 'Houston, TX',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Noah+Adams&background=16A085&color=fff&size=512',
    category: 'Behavioral',
  },
  {
    id: 'U1016',
    firstName: 'Harper',
    lastName: 'Evans',
    age: 30,
    gender: 'Female',
    bio: 'Mindfulness and relaxation support.',
    problems: 'Feeling stressed and anxious.',
    goals: 'Learn mindfulness techniques for daily life.',
    languages: ['English'],
    location: 'San Jose, CA',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Harper+Evans&background=F39C12&color=fff&size=512',
    category: 'Behavioral',
  },
  {
    id: 'U1017',
    firstName: 'Jameson',
    lastName: 'Turner',
    age: 33,
    gender: 'Male',
    bio: 'Addiction recovery support.',
    problems: 'Struggling with substance use triggers.',
    goals: 'Maintain sobriety and adopt healthy habits.',
    languages: ['English'],
    location: 'Las Vegas, NV',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Jameson+Turner&background=D35400&color=fff&size=512',
    category: 'Substance',
  },
  {
    id: 'U1018',
    firstName: 'Ella',
    lastName: 'Baker',
    age: 29,
    gender: 'Female',
    bio: 'Family conflict resolution.',
    problems: 'Tension between siblings.',
    goals: 'Improve communication and reduce conflicts.',
    languages: ['English'],
    location: 'Phoenix, AZ',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Ella+Baker&background=7D3C98&color=fff&size=512',
    category: 'Family',
  },
  {
    id: 'U1019',
    firstName: 'Lucas',
    lastName: 'Mitchell',
    age: 41,
    gender: 'Male',
    bio: 'Trauma recovery.',
    problems: 'Nightmares and anxiety from past experiences.',
    goals: 'Process trauma and regain control of life.',
    languages: ['English'],
    location: 'Charlotte, NC',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Lucas+Mitchell&background=1F618D&color=fff&size=512',
    category: 'Trauma',
  },
  {
    id: 'U1020',
    firstName: 'Scarlett',
    lastName: 'Murphy',
    age: 25,
    gender: 'Female',
    bio: 'Anxiety management support.',
    problems: 'Feeling overwhelmed by school and work.',
    goals: 'Reduce anxiety and improve focus.',
    languages: ['English'],
    location: 'Tampa, FL',
    profilePictureUrl:
      'https://ui-avatars.com/api/?name=Scarlett+Murphy&background=C70039&color=fff&size=512',
    category: 'Behavioral',
  },
];

export const CURRENT_USER = {
  id: 'T1001',
  firstName: 'Liam',
  lastName: 'Anderson',
  location: 'New York, NY',
  profilePictureUrl:
    'https://ui-avatars.com/api/?name=Liam+Anderson&background=0D8ABC&color=fff&size=512',
};
