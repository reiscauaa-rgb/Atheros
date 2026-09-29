import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/servicesData';
import ServiceDetailClient from './ServiceDetailClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = Object.keys(servicesData.pt);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.pt[slug];

  if (!service) {
    return {
      title: 'Serviço Não Encontrado',
    };
  }

  const url = `https://atherosdigital.com/servicos/${slug}`;

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.title} | Atheros Assessoria Documental`,
      description: service.metaDescription,
      url,
      type: 'article',
      locale: 'pt_BR',
      siteName: 'Atheros',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Atheros Assessoria Documental`,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.pt[slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient slug={slug} />;
}
