export type Therapist = {
  id: string;
  bio: string;
  email: string;
  rating?: number;
  lastName: string;
  location: string;
  verified: boolean;
  firstName: string;
  languages: string[];
  phoneNumber?: string;
  licenseNumber: string;
  licenseState?: string;
  specialization: string;
  experienceYears: number;
  profilePictureUrl?: string;
};

type PrivateTherapistFields = 'licenseNumber' | 'email' | 'phoneNumber';

export type PublicTherapistProfile = Omit<Therapist, PrivateTherapistFields>;

export const THERAPISTS = [
  {
    userId: 'T1001',
    firstName: 'James',
    lastName: 'Carter',
    dob: '1980-03-12',
    phone: '+1-202-555-0181',
    email: 'james.carter@therapyhub.com',
    gender: 'Male',
    specialization: 'Cognitive Behavioral Therapy',
    yearsOfExperience: 12,
    licenseNumber: 'LIC-78321',
    clinicAddress: '123 Wellness St, New York, NY',
    profilePhoto: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    userId: 'T1002',
    firstName: 'Olivia',
    lastName: 'Nguyen',
    dob: '1985-07-25',
    phone: '+1-202-555-0192',
    email: 'olivia.nguyen@therapyhub.com',
    gender: 'Female',
    specialization: 'Marriage and Family Therapy',
    yearsOfExperience: 10,
    licenseNumber: 'LIC-84219',
    clinicAddress: '456 Harmony Ave, Los Angeles, CA',
    profilePhoto: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    userId: 'T1003',
    firstName: 'Daniel',
    lastName: 'Martinez',
    dob: '1978-11-04',
    phone: '+1-202-555-0145',
    email: 'daniel.martinez@therapyhub.com',
    gender: 'Male',
    specialization: 'Child & Adolescent Therapy',
    yearsOfExperience: 15,
    licenseNumber: 'LIC-67214',
    clinicAddress: '789 Growth Blvd, Chicago, IL',
    profilePhoto: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    userId: 'T1004',
    firstName: 'Sophia',
    lastName: 'Kim',
    dob: '1986-09-19',
    phone: '+1-202-555-0107',
    email: 'sophia.kim@therapyhub.com',
    gender: 'Female',
    specialization: 'Trauma Therapy',
    yearsOfExperience: 9,
    licenseNumber: 'LIC-93287',
    clinicAddress: '321 Hope Ln, Seattle, WA',
    profilePhoto: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    userId: 'T1005',
    firstName: 'Michael',
    lastName: 'Johnson',
    dob: '1975-05-30',
    phone: '+1-202-555-0174',
    email: 'michael.johnson@therapyhub.com',
    gender: 'Male',
    specialization: 'Substance Abuse Counseling',
    yearsOfExperience: 18,
    licenseNumber: 'LIC-54192',
    clinicAddress: '852 Renewal Rd, Denver, CO',
    profilePhoto: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    userId: 'T1006',
    firstName: 'Emma',
    lastName: 'Brown',
    dob: '1983-02-08',
    phone: '+1-202-555-0110',
    email: 'emma.brown@therapyhub.com',
    gender: 'Female',
    specialization: 'Anxiety & Depression',
    yearsOfExperience: 11,
    licenseNumber: 'LIC-72653',
    clinicAddress: '963 Serenity Ct, Boston, MA',
    profilePhoto: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    userId: 'T1007',
    firstName: 'William',
    lastName: 'Davis',
    dob: '1988-10-22',
    phone: '+1-202-555-0157',
    email: 'william.davis@therapyhub.com',
    gender: 'Male',
    specialization: 'Career Counseling',
    yearsOfExperience: 7,
    licenseNumber: 'LIC-89452',
    clinicAddress: '741 Pathway Dr, Austin, TX',
    profilePhoto: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    userId: 'T1008',
    firstName: 'Isabella',
    lastName: 'Lee',
    dob: '1990-01-14',
    phone: '+1-202-555-0188',
    email: 'isabella.lee@therapyhub.com',
    gender: 'Female',
    specialization: 'Art Therapy',
    yearsOfExperience: 8,
    licenseNumber: 'LIC-39841',
    clinicAddress: '159 Creative Way, San Francisco, CA',
    profilePhoto: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    userId: 'T1009',
    firstName: 'Alexander',
    lastName: 'White',
    dob: '1977-06-17',
    phone: '+1-202-555-0129',
    email: 'alex.white@therapyhub.com',
    gender: 'Male',
    specialization: 'Grief Counseling',
    yearsOfExperience: 16,
    licenseNumber: 'LIC-62187',
    clinicAddress: '753 Comfort St, Miami, FL',
    profilePhoto: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    userId: 'T1010',
    firstName: 'Mia',
    lastName: 'Patel',
    dob: '1984-08-09',
    phone: '+1-202-555-0190',
    email: 'mia.patel@therapyhub.com',
    gender: 'Female',
    specialization: 'Group Therapy',
    yearsOfExperience: 12,
    licenseNumber: 'LIC-56432',
    clinicAddress: '246 Unity Cir, Dallas, TX',
    profilePhoto: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
];

export const CURRENT_USER = THERAPISTS[0];
