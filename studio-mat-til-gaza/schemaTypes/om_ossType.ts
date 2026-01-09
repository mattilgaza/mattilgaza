import { defineField, defineType } from 'sanity'

export const om_oss = defineType({
    name: 'om_oss',
    title: 'Om Oss',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'gallery',
            type: 'array',
            of: [
                { type: 'image' }
            ],
            options: {
                layout: 'grid'
            }
        }),
        defineField({
            name: 'body',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
    preview: {
        select: {
            title: 'name',
        },
    }
})