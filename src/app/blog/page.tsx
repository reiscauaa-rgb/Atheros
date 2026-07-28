import type { Metadata } from 'next';
import { getAllPosts, getCategories, urlFor } from '@/lib/sanity';
import BlogClientPage from './BlogClientPage';

export const metadata: Metadata = {
  title: 'Blog — Atheros',
  description:
    'Artigos sobre documentação consular, passaportes, procurações e tudo que o brasileiro nos EUA precisa saber.',
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getCategories(),
  ]);

  return <BlogClientPage initialPosts={posts} initialCategories={categories} />;
}
