import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
    date: z.date(),
    title: z.string(),
    intro: z.string(),
    links: z.array(z.object({
        label: z.string(),
        url: z.string().url()
    })).optional(),
});

const videoProject = ({ image }: { image: any }) => baseSchema.extend({
    type: z.literal('video'),
    video: z.string(),
    poster: image().optional()
});

const iframeProject = () => baseSchema.extend({
    type: z.literal('iframe'),
    iframe: z.string().url(),
});

const galleryProject = ({ image }: { image: any }) => baseSchema.extend({
    type: z.literal('images'),
    images: z.array(image()).min(1)
});

const projects = defineCollection({
    schema: (tools) => z.discriminatedUnion('type', [
        videoProject(tools),
        iframeProject(),
        galleryProject(tools)
    ]),
});

export const collections = { projects };