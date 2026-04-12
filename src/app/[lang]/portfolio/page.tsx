"use client";

import { useLanguage } from "@/app/language-context";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const { t, language } = useLanguage();
  const isPl = language === 'pl';

  const projects = [
    {
      key: "nanobid",
      imageUrl: "/images/portfolio/nanobid/n1.png",
      liveUrl: "https://nanobid.pl",
    },
    {
      key: "kurs8klasisty",
      imageUrl: "/images/portfolio/english-tutor/main.png",
      liveUrl: "https://kurs8klasisty.pl",
    },
    {
      key: "careerflex",
      imageUrl: "/images/portfolio/careerflex/cfx1.jpg",
      liveUrl: "https://careerflex.pl",
    },
  ];

  return (
    <div className="pb-16">
      <div className="text-center mb-16 pt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("portfolio.title")}</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t("portfolio.subtitle")}
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <Card key={project.key} className="overflow-hidden bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 group">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={t(`portfolio.projects.${project.key}.title`)}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">
                  {t(`portfolio.projects.${project.key}.title`)}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {t(`portfolio.projects.${project.key}.description`)}
                </p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {isPl ? 'Zobacz na żywo' : 'View live site'}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center border-t pt-12">
          <h2 className="text-2xl font-semibold mb-4">
            {t("portfolio.projects.dreamProject.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            {t("portfolio.projects.dreamProject.description")}
          </p>
          <Link href={`/${language}/contact`}>
            <Button>{t("portfolio.projects.dreamProject.cta")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
