import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { title, description } from '../consts';

export async function GET(context) {
	const posts = await getCollection('posts'); // Changed 'blog' to 'posts'
	return rss({
		title: title,
		description: description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}
