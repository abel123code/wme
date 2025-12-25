"use client";

import Image from "next/image";
import { useState } from "react";
import TeamMember from "@/components/TeamMember";
import TeamMemberModal from "@/components/TeamMemberModal";

export default function TeamPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const teamMembers: {
    name: string;
    role: string;
    image1: string;
    image2: string;
    tagline: string;
    qualifications: string[];
    imagePosition?: string;
    bio: string[];
    tiktokVideoId?: string;
  }[] = [
    {
      name: "Nicky",
      role: "Science Teacher",
      image1: "/team/nicky-1.png",
      image2: "/team/nicky-2.png",
      tagline: "WARNING: I WILL MAKE U FALL IN LOVE WITH SCIENCE AND DO WELL IN IT!",
      qualifications: [
        "Teaching since 2018",
        "NIE Trained Teacher",
        "Bachelor of Science in Biological Sciences",
      ],
      bio: [
        "I'm passionate about making science fun, accessible, and engaging for every student. My teaching philosophy is simple: when students enjoy learning, they excel.",
        "With years of experience and NIE training, I've developed a teaching style that breaks down complex concepts into easy-to-understand explanations. I believe every student has the potential to love science—they just need the right guidance.",
        "Let's make science your favorite subject together!"
      ],
      tiktokVideoId: "7448139951562181909",
    },
    {
      name: "Carol",
      role: "Math & Science Teacher",
      image1: "/team/carol-1.png",
      image2: "/team/carol-2.png",
      tagline: "Math is like a puzzle - once you see the pattern, everything clicks! Let's solve it together 🎯",
      qualifications: [
        "NUS Bachelors in Applied Mathematics with Distinction",
        "Best Grade for O-Level and A-Level Mathematics, H3 Mathematics",
      ],
      imagePosition: "center 15%",
      bio: [
        "I believe that mathematics is not about memorization—it's about understanding patterns and building problem-solving skills. My goal is to help students see the beauty and logic in every equation.",
        "Having achieved top grades in O-Level, A-Level, and H3 Mathematics, I understand what it takes to excel. I use my experience to guide students through challenging concepts with patience and clarity.",
        "Together, we'll turn confusion into confidence and fear into success!"
      ],
      tiktokVideoId: "7445503871717215495",
    },
  ];

  return (
    <main className="relative bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[45vh] md:h-[55vh] lg:h-[75vh] bg-[#3B4FDF] flex items-center justify-center">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
            Our Team
          </h1>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-[1600px] mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image1={member.image1}
                image2={member.image2}
                tagline={member.tagline}
                qualifications={member.qualifications}
                imagePosition={member.imagePosition}
                onReadMore={() => setOpenModal(member.name)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Team Member Modals */}
      {teamMembers.map((member, index) => (
        <TeamMemberModal
          key={index}
          isOpen={openModal === member.name}
          onClose={() => setOpenModal(null)}
          name={member.name}
          role={member.role}
          image={member.image1}
          qualifications={member.qualifications}
          bio={member.bio}
          tiktokVideoId={member.tiktokVideoId}
        />
      ))}
    </main>
  );
}

