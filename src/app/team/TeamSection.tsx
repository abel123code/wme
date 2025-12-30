"use client";

// Client Component: Handles all interactive state and modal logic
// This separation allows the parent page to be a Server Component,
// reducing initial JS bundle size and hydration cost
import { useState } from "react";
import TeamMember from "@/components/TeamMember";
import TeamMemberModal from "@/components/TeamMemberModal";
import type { TeamMemberData } from "./teamData";

interface TeamSectionProps {
  teamMembers: TeamMemberData[];
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  const [openModal, setOpenModal] = useState<string | null>(null);

  // Find the currently selected team member for the modal
  const selectedMember = teamMembers.find(
    (member) => member.name === openModal
  );

  return (
    <>
      {/* Meet the Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-[1600px] mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  animationDelay: `${index * 0.1}s`, // Stagger animations for each card
                }}
              >
                <TeamMember
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  qualifications={member.qualifications}
                  imagePosition={member.imagePosition}
                  onReadMore={() => setOpenModal(member.name)}
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Render only the active modal instead of all modals upfront */}
      {/* This reduces initial render cost and JS bundle size */}
      {selectedMember && (
        <TeamMemberModal
          isOpen={openModal === selectedMember.name}
          onClose={() => setOpenModal(null)}
          name={selectedMember.name}
          role={selectedMember.role}
          image={selectedMember.image}
          qualifications={selectedMember.qualifications}
          bio={selectedMember.bio}
        />
      )}
    </>
  );
}

