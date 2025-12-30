// Team member data extracted to separate file
// This improves dev compile time by reducing the amount of code that needs to be recompiled
// when making changes to the page component
export interface TeamMemberData {
  name: string;
  role: string;
  image: string;
  qualifications: string[];
  imagePosition?: string;
  bio: string[];
}

export const teamMembers: TeamMemberData[] = [
  {
    name: "Ms Nicky",
    role: "Primary Science Teacher",
    image: "/team/nicky.avif",
    qualifications: [
      "15 years teaching experience",
      "Founder of Wondrous Mind Education",
      "Head of Primary Science Department",
      "Degree in University of London Business",
    ],
    bio: [
      "I am a University of London Business graduate with over 15 years of experience teaching Primary-level Science across various centres.",
      "In 2018, I founded Wondrous Mind from home, bringing my passion for science education directly to students. Over the years, I have guided countless children in building strong scientific foundations.",
      "My goal is to nurture confidence, curiosity, and a genuine love for learning in every student.",
    ],
  },
  {
    name: "Ms Caroline",
    role: "Primary & Secondary Math Teacher",
    image: "/team/carol.avif",
    qualifications: [
      "14 years teaching experience",
      "Founder of Wondrous Mind Education",
      "Head of Mathematics Department",
      "NUS Degree in Applied Mathematics, Minor in Statistics",
    ],
    bio: [
      "I am a NUS Bachelor of Science graduate, majoring in Applied Mathematics with a minor in Statistics.",
      "With 14 years of teaching experience across Primary, Secondary, and IB Higher Level Mathematics, I have guided students of varying abilities to achieve strong results.",
      "I am passionate about helping students build solid mathematical foundations, develop critical thinking skills, and grow in confidence.",
    ],
  },
  {
    name: "Ms Jeslyn",
    role: "Secondary Math & Science Teacher",
    image: "/team/jeslyn.avif",
    qualifications: [
      "9 years teaching experience",
      "Head of Secondary Science Department",
      "NUS Degree in Science, Major in Statistics",
    ],
    bio: [
      "I am a NUS Bachelor of Science graduate, majoring in Statistics, with extensive experience teaching Secondary-level Math and Science.",
      "Having been with Wondrous Mind since the start of my teaching journey, I have guided my own cohort of O-Level students to graduate with excellent results.",
      "I strive to support students with structured guidance and clarity so they can achieve their full potential.",
    ],
  },
  {
    name: "Ms Pearly",
    role: "Primary Math & Science Teacher",
    image: "/team/pearly.avif",
    qualifications: [
      "5 years teaching experience",
      "NUS Degree in Science",
      "Experience guiding PSLE cohorts",
    ],
    bio: [
      "I am a NUS Bachelor of Science graduate with 5 years of experience teaching Primary-level Math and Science.",
      "I have guided multiple PSLE cohorts, helping students build strong foundations and develop effective problem-solving skills.",
      "Known for my patient and encouraging approach, I aim to make learning enjoyable and rewarding for every child.",
    ],
  },
  {
    name: "Ms Lim",
    role: "Secondary Math & Science Teacher",
    image: "/team/jeamin.avif",
    qualifications: [
      "2 years teaching experience",
      "NTU Degree in Chemistry and Biological Chemistry",
    ],
    bio: [
      "I am a dedicated teacher specialising in Secondary Science and Mathematics. I graduated from NTU with a Bachelor of Science (Honours) in Chemistry and Biological Chemistry.",
      "My teaching approach focuses on helping students grasp challenging concepts through patience, clarity, and structured guidance.",
      "I strive to create an engaging classroom environment where students feel supported and motivated to succeed.",
    ],
  },
  {
    name: "Ms Jovin",
    role: "Primary Science Teacher",
    image: "/team/jovin.avif",
    qualifications: [
      "3 years teaching experience",
      "SUSS Degree in Marketing (Undergraduate)",
      "Experience teaching Primary Math & Science (P1–P6)",
    ],
    bio: [
      "I am currently an undergraduate at SUSS pursuing a degree in Marketing and entering my fourth year of teaching next year.",
      "Before joining Wondrous Mind in 2023, I taught private tuition for Primary Math and Science (P1–P6).",
      "I believe in making science fun and accessible through hands-on experiments and interactive activities in a nurturing classroom environment.",
    ],
  },
  {
    name: "Mr Shawn",
    role: "Primary Math Teacher",
    image: "/team/shawn.avif",
    qualifications: [
      "6 months teaching experience",
      "NTU Degree in Economics (Undergraduate)",
      "Hwa Chong Institution Alumni",
      "Trained in centre methodology",
    ],
    bio: [
      "I am currently an undergraduate at NTU studying Economics and an alumnus of Hwa Chong Institution.",
      "I joined Wondrous Mind in 2025 and bring a genuine love for connecting with students and fostering a positive, engaging learning environment.",
      "While I'm early in my teaching journey, I'm committed to making a difference and have undergone training in the centre's methodology like all new teachers.",
    ],
  },
  {
    name: "Mr Lew",
    role: "Secondary Science Teacher",
    image: "/team/sunzhe.avif",
    qualifications: [
      "2 years teaching experience",
      "NTU Degree in Environmental Earth System Science (Undergraduate)",
      "A-Level A grades in Mathematics, Biology & Chemistry",
      "Teaching at the centre since 2023",
    ],
    bio: [
      "I am currently an undergraduate at NTU pursuing Environmental Earth System Science.",
      "I excelled in Mathematics and Science, scoring A grades in Mathematics, Biology, and Chemistry at the GCE A-Levels.",
      "Since joining the centre in 2023, I have focused on building meaningful connections with students and creating an encouraging learning environment.",
    ],
  },
  {
    name: "Ms Xuan Ling",
    role: "Primary & Secondary Science Teacher",
    image: "/team/xuanling.avif",
    qualifications: [
      "1 year teaching experience",
      "NUS Degree in Life Sciences (Undergraduate)",
    ],
    bio: [
      "I am currently pursuing a Bachelor of Science (Honours) in Life Sciences at the National University of Singapore (NUS).",
      "My teaching approach focuses on helping students make connections between concepts using diagrams, real-life examples, and hands-on demonstrations.",
      "To keep lessons engaging, I incorporate interactive activities such as Kahoot and Quizizz to motivate students through fun learning and rewards.",
    ],
  },
];

