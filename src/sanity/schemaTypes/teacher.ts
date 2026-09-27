import { defineType, defineField, defineArrayMember } from 'sanity'

export const teacher = defineType({
  name: 'teacher',
  title: 'Teacher',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Teacher Name',
      type: 'string',
      validation: (rule) => rule.required().error('Teacher name is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'shortIntroduction',
      title: 'Short Introduction',
      type: 'text',
      rows: 2,
      description: 'Brief introduction for search cards and listings',
    }),
    defineField({
      name: 'biography',
      title: 'Full Biography',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'subjects',
      title: 'Subjects Taught',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'qualifications',
      title: 'Educational Qualifications',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'experience',
      title: 'Years of Experience',
      type: 'number',
    }),
    defineField({
      name: 'languages',
      title: 'Languages Spoken / Taught In',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'teachingMode',
      title: 'Teaching Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Online', value: 'online' },
          { title: 'Offline / In-Person', value: 'offline' },
          { title: 'Hybrid', value: 'hybrid' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        defineField({ name: 'state', title: 'State', type: 'string' }),
        defineField({ name: 'city', title: 'City', type: 'string' }),
        defineField({ name: 'address', title: 'Address / Area', type: 'text', rows: 2 }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
        defineField({ name: 'email', title: 'Email Address', type: 'string' }),
      ],
    }),
    defineField({
      name: 'availability',
      title: 'Availability / Timings',
      type: 'string',
      description: 'e.g. Morning batches, Weekends, Full-time tutoring',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subjects',
      media: 'profileImage',
    },
    prepare({ title, subtitle, media }) {
      const subjectsText = Array.isArray(subtitle) ? subtitle.join(', ') : 'No subjects listed'
      return {
        title: title || 'Untitled Teacher',
        subtitle: subjectsText,
        media,
      }
    },
  },
})
