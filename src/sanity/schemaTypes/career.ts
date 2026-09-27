import { defineType, defineField, defineArrayMember } from 'sanity'

export const career = defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Career Title',
      type: 'string',
      validation: (rule) => rule.required().error('Career title is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Engineering & Technology, Management, Medical Sciences, Arts & Design',
    }),
    defineField({
      name: 'overview',
      title: 'Career Overview',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'eligibility',
      title: 'Eligibility Requirements',
      type: 'object',
      fields: [
        defineField({ name: 'qualification', title: 'Educational Qualification Required', type: 'string' }),
        defineField({
          name: 'requiredSubjects',
          title: 'Required Subjects',
          type: 'array',
          of: [{ type: 'string' }],
          options: { layout: 'tags' },
        }),
        defineField({ name: 'minimumMarks', title: 'Minimum Marks / Cutoff', type: 'string' }),
        defineField({ name: 'ageRequirements', title: 'Age Criteria', type: 'string' }),
        defineField({ name: 'additionalRequirements', title: 'Additional Criteria', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'process',
      title: 'Career Roadmap & Process (Ordered Steps)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'step',
          title: 'Step',
          fields: [
            defineField({ name: 'stepNumber', title: 'Step Number', type: 'number' }),
            defineField({ name: 'title', title: 'Step Title', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'description', title: 'Step Description', type: 'text', rows: 3 }),
          ],
          preview: {
            select: {
              title: 'title',
              stepNumber: 'stepNumber',
              description: 'description',
            },
            prepare({ title, stepNumber, description }) {
              const prefix = stepNumber ? `Step ${stepNumber}: ` : ''
              return {
                title: `${prefix}${title}`,
                subtitle: description,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'prospects',
      title: 'Career Prospects & Growth',
      type: 'object',
      fields: [
        defineField({
          name: 'jobRoles',
          title: 'Target Job Roles',
          type: 'array',
          of: [{ type: 'string' }],
          options: { layout: 'tags' },
        }),
        defineField({
          name: 'industries',
          title: 'Hiring Industries',
          type: 'array',
          of: [{ type: 'string' }],
          options: { layout: 'tags' },
        }),
        defineField({ name: 'opportunities', title: 'Future Opportunities Summary', type: 'text', rows: 3 }),
        defineField({
          name: 'furtherEducation',
          title: 'Higher Education Options',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'growthPath', title: 'Career Path & Promotion Hierarchy', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'salary',
      title: 'Salary Ranges',
      type: 'object',
      fields: [
        defineField({ name: 'entryLevel', title: 'Entry Level Salary', type: 'string' }),
        defineField({ name: 'midLevel', title: 'Mid Level Salary', type: 'string' }),
        defineField({ name: 'experienced', title: 'Experienced Level Salary', type: 'string' }),
        defineField({ name: 'lastUpdated', title: 'Salary Data Last Updated', type: 'date' }),
      ],
    }),
    defineField({
      name: 'skillsRequired',
      title: 'Key Skills Required',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'topRecruiters',
      title: 'Top Hiring Companies / Recruiters',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'relatedCareers',
      title: 'Related Careers',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'career' }],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Career',
        subtitle: subtitle || 'Uncategorized',
      }
    },
  },
})
