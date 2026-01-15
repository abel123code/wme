// Server Component: Renders static content on the server
// This reduces initial JS bundle size and improves performance
import PageHero from "@/components/PageHero";
import ClassesSection from "./ClassesSection";
import { client } from "@/sanity/client";

interface ScheduleData {
  academicYear: string;
  primaryScheduleImage: any;
  primaryScheduleAlt: string;
  secondaryScheduleImage: any;
  secondaryScheduleAlt: string;
  calendarPdf: {
    asset: {
      url: string;
    };
    filename?: string;
  };
}

const SCHEDULES_QUERY = `*[_type == "schedulesPage"][0]{
  _id,
  academicYear,
  primaryScheduleImage,
  primaryScheduleAlt,
  secondaryScheduleImage,
  secondaryScheduleAlt,
  calendarPdf{
    asset->{
      url
    },
    filename
  }
}`;

const options = { next: { revalidate: 30 } };

export default async function ClassesPage() {
  const scheduleData = await client.fetch<ScheduleData | null>(
    SCHEDULES_QUERY,
    {},
    options
  );

  return (
    <main className="relative bg-white">
      <PageHero 
        title="Our Science & Math Classes" 
        image="/classes-hero.JPG"
        imageAlt="Classes hero background"
        imagePosition="classes-hero-position"
      />

      {/* Client Component handles all interactive state and modal rendering */}
      <ClassesSection scheduleData={scheduleData || null} />
    </main>
  );
}
