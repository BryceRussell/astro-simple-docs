import type { MarkdownInstance, MarkdownLayoutProps } from 'astro';
import type { HTMLAttributes } from 'astro/types';

export interface SEOInterface {
    title?: string;
    description?: string;
    canonical?: string;
    nofollow?: boolean;
    noindex?: boolean;
    openGraph?: {
        basic: {
            title: string;
            type: string;
            image: string;
            url?: string;
        };
        optional?: {
            audio?: string;
            description?: string;
            determiner?: string;
            locale?: string;
            localeAlternate?: string[];
            siteName?: string;
            video?: string;
        };
        image?: {
            url?: string;
            secureUrl?: string;
            type?: string;
            width?: number;
            height?: number;
            alt?: string;
        };
            article?: {
            publishedTime?: string;
            modifiedTime?: string;
            expirationTime?: string;
            authors?: string[];
            section?: string;
            tags?: string[];
        };
    };
    twitter?: {
        card?: string;
        site?: string;
        creator?: string;
    };
    extend?: {
        link?: Partial<HTMLAttributes<'link'>>[];
        meta?: Partial<HTMLAttributes<'meta'>>[];
    };
};

export interface Frontmatter {
    draft?: boolean;
    title?: string;
    description?: string;
    date?: string|number|Date;
    tags?: string[];
    source?: string;
    demo?: string;
}

export type Markdown = MarkdownInstance<Frontmatter>;
export type MarkdownLayout = MarkdownLayoutProps<Frontmatter>;