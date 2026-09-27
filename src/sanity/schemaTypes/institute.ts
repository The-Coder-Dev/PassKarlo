import { defineType, defineField, defineArrayMember } from 'sanity'

export const institute = defineType({
  name: 'institute',
  title: 'Institute',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Institute Name',
      type: 'string',
      validation: (rule) => rule.required().error('Institute name is required'),
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
      name: 'type',
      title: 'Institute Type',
      type: 'string',
      options: {
        list: [
          { title: 'School', value: 'school' },
          { title: 'College', value: 'college' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required().error('Please select whether this is a School or College'),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief overview displayed on search results and card listings',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'location',
      title: 'Location Information',
      type: 'object',
      fields: [
        defineField({ name: 'state', title: 'State', type: 'string' }),
        defineField({ name: 'city', title: 'City', type: 'string' }),
        defineField({ name: 'pincode', title: 'Pincode', type: 'string' }),
        defineField({ name: 'address', title: 'Full Address', type: 'text', rows: 2 }),
        defineField({ name: 'mapUrl', title: 'Google Maps Link / Embed URL', type: 'url' }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
        defineField({ name: 'email', title: 'Email Address', type: 'string' }),
        defineField({ name: 'website', title: 'Official Website', type: 'url' }),
      ],
    }),
    defineField({
      name: 'academicInfo',
      title: 'Academic & Institutional Information',
      type: 'object',
      fields: [
        defineField({ name: 'affiliation', title: 'Affiliation / Board (e.g. CBSE, ICSE, AKTU, DU)', type: 'string' }),
        defineField({ name: 'establishedYear', title: 'Established Year', type: 'number' }),
        defineField({ name: 'accreditation', title: 'Accreditation (e.g. NAAC A+, NBA)', type: 'string' }),
        defineField({
          name: 'facilities',
          title: 'Facilities',
          type: 'array',
          of: [{ type: 'string' }],
          options: { layout: 'tags' },
        }),
        defineField({ name: 'admissionInfo', title: 'Admission Process & Guidelines', type: 'text', rows: 4 }),
      ],
    }),
    // Featured Listing Fields (Schools & Colleges ONLY)
    defineField({
      name: 'isFeatured',
      title: 'Is Featured Listing?',
      type: 'boolean',
      initialValue: false,
      description: 'Mark institute as featured after manual verification and payment process',
    }),
    defineField({
      name: 'featuredFrom',
      title: 'Featured Start Date',
      type: 'datetime',
      hidden: ({ parent }) => !parent?.isFeatured,
    }),
    defineField({
      name: 'featuredUntil',
      title: 'Featured End Date',
      type: 'datetime',
      hidden: ({ parent }) => !parent?.isFeatured,
      description: 'The listing will automatically stop being treated as featured after this date',
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
      subtitle: 'type',
      media: 'logo',
      city: 'location.city',
      isFeatured: 'isFeatured',
    },
    prepare({ title, subtitle, media, city, isFeatured }) {
      const typeLabel = subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : 'Institute'
      const cityLabel = city ? ` • ${city}` : ''
      const featuredBadge = isFeatured ? ' ⭐ [Featured]' : ''
      return {
        title: `${title || 'Untitled Institute'}${featuredBadge}`,
        subtitle: `${typeLabel}${cityLabel}`,
        media,
      }
    },
  },
})
