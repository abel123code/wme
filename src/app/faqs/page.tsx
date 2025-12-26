import FAQs from "@/components/FAQs";
import PageHero from "@/components/PageHero";

const faqsData = [
  {
    question: "Do you provide trial lessons?",
    answer: (
      <>
        Yes, we offer trial classes, where the first trial lesson for each subject is 50% off for each subject. And students can attend up to 4 trial classes per subject.
        <br /><br />
        If you'd like your child to continue the remaining 3 trials, they'll be charged at the usual rate of the level per lesson.
      </>
    ),
  },
  {
    question: "How long is each lesson?",
    answer: "Our lesson is 2 hours long.",
  },
  {
    question: "What is the max class size?",
    answer: "We cap our classes at maximum 8 - 10 students per class.",
  },
  {
    question: "Are the lessons aligned with the MOE syllabus?",
    answer: "Yes! Our lessons follow the MOE syllabus, covering all key topics while providing extra practice and exam-focused guidance to build confidence.",
  },
  {
    question: "Is there assigned homework every lesson?",
    answer: "Yes! Homework is assigned each lesson to reinforce learning and help students practice key concepts independently.",
  },
  {
    question: "How frequent are experiments conducted for Primary Science classes?",
    answer: (
      <>
        Experiment frequency depends on the topic. Lower primary (P3–P4) has more hands-on experiments, while upper primary focuses on videos for certain topics. Physical science topics like matter, light, heat, and electrical systems typically have experiments every two weeks.
      </>
    ),
  },
  {
    question: "What are the payment terms?",
    answer: "We normally collect lesson fees monthly, but if you prefer to pay termly or yearly, just let us know and we can arrange it for you.",
  },
  {
    question: "What payment methods are accepted?",
    answer: (
      <>
        <strong>Payment Methods</strong>
        <br />
        Invoices can be paid via: PayNow using our UEN (not mobile/NRIC), Bank transfer or Cheque payable
      </>
    ),
  },
  {
    question: "Is GST charge included?",
    answer: "At the moment, there is no GST charge. But we might be including GST charges from March 2026 onwards.",
  },
  {
    question: "How to arrange for a make up lesson?",
    answer: (
      <>
        If your child is unable to attend their enrolled class, they may either:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>attend a make up class within the same week,</li>
          <li>join the class via Zoom, or</li>
          <li>receive a video recording of the lesson if the first two options are not possible</li>
        </ul>
        <p className="mt-2">Please note that as per the centre's policy, we do not prorate lessons missed.</p>
      </>
    ),
  },
  {
    question: "Withdrawal process?",
    answer: "Withdrawal requires 4 lessons' notice. Your child's subject deposit will be used to offset the last 4 lessons, and any remaining balance will be refunded.",
  },
];

export default function FAQsPage() {
  return (
    <main className="relative bg-white">
      <PageHero 
        image="/faq-banner.jpg"
        imageAlt="FAQs banner"
        showOverlay={false}
      />
      <FAQs faqs={faqsData} />
    </main>
  );
}

