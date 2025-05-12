import {defineField, defineType} from 'sanity'

export const information = defineType({
  name: 'information',
  title: 'Thông tin về truyền thống/văn hoá',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleAlignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
      },
      initialValue: 'center',
    }),
    defineField({
      name: 'titleVerticalAlignment',
      type: 'string',
      options: {
        list: [
          {title: 'Top', value: 'top'},
          {title: 'Middle', value: 'middle'},
          {title: 'Bottom', value: 'bottom'},
        ],
      },
      initialValue: 'middle',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryColor',
      type: 'string',
      validation: (rule) => rule.required().regex(/^#[0-9a-fA-F]{6}$/),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introduction',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'UNESCORecognizationTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'UNESCORecognizationYear',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'costumeImage',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'firstTextSection',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'youtubeLinks',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'secondTextSection',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
