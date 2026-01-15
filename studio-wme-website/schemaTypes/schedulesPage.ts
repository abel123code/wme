import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'schedulesPage',
  title: 'Schedules Page',
  type: 'document',
  fields: [
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Primary schedule image
    defineField({
      name: 'primaryScheduleImage',
      title: 'Primary Science & Math Schedule (Image)',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryScheduleAlt',
      title: 'Primary Schedule Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Secondary schedule image
    defineField({
      name: 'secondaryScheduleImage',
      title: 'Secondary Science & Math Schedule (Image)',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryScheduleAlt',
      title: 'Secondary Schedule Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Calendar PDF
    defineField({
      name: 'calendarPdf',
      title: 'AY Calendar (PDF)',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
