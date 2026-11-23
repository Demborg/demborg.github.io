import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseSchema = z.object({
    date: z.date(),
    title: z.string(),
    links: z.array(z.object({
        label: z.string(),
        url: z.url()
    })).optional(),
});

const videoProject = ({ image }: { image: any }) => baseSchema.extend({
    type: z.literal('video'),
    video: z.string(),
    poster: image().optional()
});

const iframeProject = () => baseSchema.extend({
    type: z.literal('iframe'),
    iframe: z.url(),
});

const galleryProject = ({ image }: { image: any }) => baseSchema.extend({
    type: z.literal('images'),
    images: z.array(image()).min(1)
});

const projects = defineCollection({
    // one folder per project: src/content/projects/<id>/index.md (+ co-located assets)
    loader: glob({
        pattern: '*/index.{md,mdx}',
        base: './src/content/projects',
        generateId: ({ entry }) => entry.split('/')[0],
    }),
    schema: (tools) => z.discriminatedUnion('type', [
        videoProject(tools),
        iframeProject(),
        galleryProject(tools)
    ]),
});

const resume = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/resume' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = { projects, resume };