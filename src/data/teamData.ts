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
      "Founder of Wondrous Mind, Ms Nicky is a graduate of the University of London, where she completed a Business course. She has been teaching Primary-level Mathematics and Science since 2010, before focusing exclusively on Primary Science.",
      "Ms. Nicky went on to establish Wondrous Mind with her sister Miss Caroline in 2019.",
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
      "Miss Caroline is a NUS Bachelor of Science graduate, majoring in applied mathematics and minoring in statistics. She has been teaching for 14 years, with experience in teaching Primary, Secondary Math and IB higher level math. She had taught in various tuition centers before starting Wondrous Mind in 2019, together with her sister, Nicky.",
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
      "Ms Jeslyn is a NUS Bachelor of Science graduate, majoring in Statistics, with extensive experience teaching Secondary-level Math and Science.",
      "She has been with Wondrous Mind since the start of her teaching journey, and have guided her own cohort of O-Level students to graduate with excellent results. She strives to support students with structured guidance and clarity so they can achieve their full potential.",
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
      "Ms Pearly studied in NTU and graduated with a Bachelor of Engineering Materials Science and Engineering Degree. She has 5 years of experience teaching Primary-level Math and Science. She has guided multiple PSLE cohorts, helping students build strong foundations and develop effective problem-solving skills. Known for her patient and encouraging approach, she aims to make learning enjoyable and rewarding for every child.",
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
      "Miss Lim is a dedicated teacher specialising in Secondary Science and Mathematics. She graduated from Nanyang Technological University (NTU) with a Bachelor of Science (Honours) in Chemistry and Biological Chemistry. Known for her patient and nurturing approach, Miss Lim helps students grasp challenging concepts and reach their potential. With her strong academic background and empathetic style, she creates an engaging classroom where students are encouraged to think critically and thrive.",
    ],
  },
  {
    name: "Mr Darryl",
    role: "Secondary Math & Science Teacher",
    image: "/team/jeamin.avif",
    qualifications: [
      "3 years teaching experience",
      "Master’s degree in Education from National Institute of Education (NIE)",
    ],
    bio: [
      "Mr Darryl is a dedicated teacher specialising in Secondary Math and Science. He graduated from Nanyang Technological University (NTU) with a Bachelor of Science (Honours) in Chemistry and Biological Chemistry. Known for his patient and nurturing approach, Mr Darryl helps students grasp challenging concepts and reach their potential. With his strong academic background and empathetic style, he creates an engaging classroom where students are encouraged to think critically and thrive.",
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
      "Miss Jovin is an undergraduate at SUSS studying Marketing and will be entering her fourth year of teaching next year. Before joining Wondrous Mind in 2023, she has also taught private tuition for Primary Math and Science (P1–P6). She believes in making science fun and accessible through hands-on experiments and interactive activities. Miss Jovin creates a nurturing classroom environment where students feel encouraged to explore, ask questions, and actively engage in their learning.",
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
      "Mr Shawn is an undergraduate of NTU Economics and is an alumni of Hwa Chong Institution. Mr Shawn is a new teacher who joined us in 2025. While he may be at the beginning of his teaching journey, he more than makes up for it with a vibrant spirit and a genuine desire to make a difference in the lives of our students. He has also undergone training with the center like all new teachers on the center’s methodology.",
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
      "Mr Lew is currently an undergraduate at NTU pursuing Environmental Earth System Science. He excelled in Mathematics and Science, scoring A grades in Mathematics, Biology, and Chemistry at the GCE A-Levels. Since joining the centre in 2023, he has focused on building meaningful connections with students and creating an encouraging learning environment for all his students.",
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
      "Ms Xuan Ling is currently pursuing a Bachelor of Science (Honours) in Life Sciences at the National University of Singapore (NUS).",
      "She helps students make clear connections between concepts using diagrams, real-life examples, and hands-on demonstrations. Her lessons are engaging and interactive, often incorporating games like Kahoot and Quizizz to motivate learning.",
    ],
  },
];

