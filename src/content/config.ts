import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
    title: z.string(),
    intro: z.string(),
    links: z.array(z.object({
        label: z.string(),
        url: z.string().url()
    })).optional(),
});

const videoProject = baseSchema.extend({
    type: z.literal('video'),
    video: z.string(),
    poster: z.string().optional()
});

const iframeProject = baseSchema.extend({
    type: z.literal('iframe'),
    iframe: z.string().url(),
    poster: z.string().optional()
});

const galleryProject = baseSchema.extend({
    type: z.literal('images'),
    images: z.array(z.string()).min(1)
});

const projects = defineCollection({
    schema: z.discriminatedUnion('type', [
        videoProject,
        iframeProject,
        galleryProject
    ]),
});

export const collections = { projects };