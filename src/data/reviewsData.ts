// Google Reviews data extracted to separate file
// This improves dev compile time by reducing the amount of code that needs to be recompiled
export interface Review {
  reviewId: string;
  reviewer: {
    displayName: string;
    profilePhotoUrl: string | null;
  };
  starRating: string;
  comment: string;
  createTime?: string;
  updateTime?: string;
}

export const reviews: Review[] = [
  {
    reviewId: "1",
    reviewer: { displayName: "Miki Teang", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "I highly recommend Ms. Nicky for science tuition. She has been incredibly dedicated and effective in helping my child improve. My child's performance improved dramatically, going from AL4 to AL1 under her guidance. Ms. Nicky goes above and beyond by offering extra lessons on Sundays to address any weak areas, all without any additional charge.",
  },
  {
    reviewId: "2",
    reviewer: { displayName: "wen wen", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Teacher Nicky is very responsible and familiar with the MOE curriculum and PSLE exam format. She can grasp the key points quickly and guide students effectively.",
  },
  {
    reviewId: "3",
    reviewer: { displayName: "ZY", profilePhotoUrl: null },
    starRating: "FIVE",
    comment: "I love it cuz why not.",
  },
  {
    reviewId: "4",
    reviewer: { displayName: "Abby Oh Musical Journey", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "A small but great tuition centre. The teachers here will put in extra hours before exams to ensure the students are ready.",
  },
  {
    reviewId: "5",
    reviewer: { displayName: "Ken Koh", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "My boy started in March with Wondrous Mind. He went from AL6 to AL1 for maths and Science for PSLE. The teachers are very good!",
  },
  {
    reviewId: "6",
    reviewer: { displayName: "Leanne Yong", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Wondrous Mind Education Centre has been a wonderful enrichment centre for my two primary school boys. The teachers are dedicated and supportive.",
  },
  {
    reviewId: "7",
    reviewer: { displayName: "Madeline Koh", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "It is the BEST tuition centre we have ever come across. We are very grateful to Teacher Nicky and Caroline for their dedication and guidance.",
  },
  {
    reviewId: "8",
    reviewer: { displayName: "teresa leong", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Teacher Jeslyn really goes the extra mile, especially during O-Level exam periods, with extensive lessons and strong support.",
  },
  {
    reviewId: "9",
    reviewer: { displayName: "sujuan liu", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "我的孩子从5年前就跟着Miss Nicky开始补课，受益良多。两位老师经验丰富、细心周到，孩子在O Level化学取得了A1，真心推荐。",
  },
  {
    reviewId: "10",
    reviewer: { displayName: "D L", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Teacher Nicky is an excellent, effective and extremely dedicated teacher who truly cares about her students.",
  },
  {
    reviewId: "11",
    reviewer: { displayName: "c cl", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "A big shout out to Miss Pearly and Miss Nicky for their dedication and guidance in helping my girl achieve AL1 in science.",
  },
  {
    reviewId: "12",
    reviewer: { displayName: "y24K3nz", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Wondrous Mind is fun and helps you do better. I went from failing to straight As. It's like Harry Potter with Asian teaching.",
  },
  {
    reviewId: "13",
    reviewer: { displayName: "Jasmyn Lee", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Very good tuition centre. Miss Jeslyn and Miss Carol are super kind, understanding and patient. Highly recommend!",
  },
  {
    reviewId: "14",
    reviewer: { displayName: "claudia Ang", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Great tuition centre with kind and understanding teachers that teach very well.",
  },
  {
    reviewId: "15",
    reviewer: { displayName: "Kaeden Chong", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "I've been with this tuition centre for 4 years. Very promising and delivers good results. Teachers are excellent.",
  },
  {
    reviewId: "16",
    reviewer: { displayName: "Fat Bear", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Sent my girls for primary school science tuition and they achieved beyond expectations for PSLE grading.",
  },
  {
    reviewId: "17",
    reviewer: { displayName: "Emelda Pay Qian Xi (Chijstcs)", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "My experience here for 2 years was very memorable. I joined with weak grades and improved significantly over time.",
  },
  {
    reviewId: "18",
    reviewer: { displayName: "Ivy Ng", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "My family is really thankful that our paths crossed with Wondrous Mind and Teacher Nicky. She made science interesting and effective.",
  },
  {
    reviewId: "19",
    reviewer: { displayName: "Raine Chong", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "My son's confidence in Math and Science shot up after attending Ms Nicky's lessons. Very thankful for the guidance.",
  },
  {
    reviewId: "20",
    reviewer: { displayName: "Warren Ng", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "A big thank you to Wondrous Mind and Teacher Nicky for helping my daughter achieve AL1 in her PSLE.",
  },
  {
    reviewId: "21",
    reviewer: { displayName: "Tommy Yee", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Both Teacher Carol and Teacher Nicky are great teachers. They showed patience and provided dedicated guidance.",
  },
  {
    reviewId: "22",
    reviewer: { displayName: "Juliet Ang", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Teacher Nicky is just amazing. My son joined only 3.5 months before PSLE and enjoyed her lessons very much.",
  },
  {
    reviewId: "23",
    reviewer: { displayName: "Jennifer Khong", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "This is an amazing tuition centre. Miss Carol brought my daughter from AL6 to AL1 within 6 months. Very grateful.",
  },
  {
    reviewId: "24",
    reviewer: { displayName: "Rajavelu Govindarajan", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Dedicated teachers who genuinely care about student outcomes and progress.",
  },
  {
    reviewId: "25",
    reviewer: { displayName: "Sophie Tian", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Da best science tuition. Helped me improve my science a lot!",
  },
];

