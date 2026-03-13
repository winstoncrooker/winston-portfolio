import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticPageContent from "./ArticlePageContent";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Winston Crooker`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return <ArticPageContent article={article} />;
}
