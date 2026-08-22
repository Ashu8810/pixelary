import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pixelary.in'),
  title: "Pixelary | Custom Web Design & Software Development Studio",
  description: "Pixelary is a premier design and development studio. We build clean, modern, and high-performance websites, web applications, and custom digital products that scale.",
  keywords: [
    "Pixelary",
    "web design studio",
    "custom software development",
    "UI/UX design services",
    "front-end development",
    "Next.js web development",
    "React design agency",
    "modern web products",
    "high-performance websites",
    "digital agency"
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Pixelary | Custom Web Design & Software Development Studio",
    description: "Pixelary is a premier design and development studio. We build clean, modern, and high-performance websites, web applications, and custom digital products that scale.",
    url: 'https://www.pixelary.in',
    siteName: 'Pixelary',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixelary Design & Development Studio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pixelary | Custom Web Design & Software Development Studio",
    description: "Pixelary is a premier design and development studio. We build clean, modern, and high-performance websites, web applications, and custom digital products that scale.",
    images: ['/hero-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.pixelary.in/#organization",
        "name": "Pixelary",
        "url": "https://www.pixelary.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.pixelary.in/favicon.ico"
        },
        "description": "Pixelary is a design and development studio focused on creating clean, functional, and scalable digital experiences.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "India"
        },
        "knowsAbout": [
          "Web Design",
          "Web Development",
          "UI/UX Design",
          "Software Engineering",
          "Next.js Development",
          "React Development"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pixelary.in/#website",
        "url": "https://www.pixelary.in",
        "name": "Pixelary",
        "description": "Designing and building modern web products.",
        "publisher": {
          "@id": "https://www.pixelary.in/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pixelary.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Pixelary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pixelary is a custom web design and software development studio that builds modern, responsive, and high-performance websites, web applications, and digital experiences."
            }
          },
          {
            "@type": "Question",
            "name": "What services does Pixelary offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer complete end-to-end design and development services: Website Design & Development, UI/UX Design, custom Web Application building, SEO, and Mobile Application design."
            }
          },
          {
            "@type": "Question",
            "name": "What technology stack does Pixelary use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, Tailwind CSS, PostgreSQL, MongoDB, Firebase, and Supabase."
            }
          },
          {
            "@type": "Question",
            "name": "Does Pixelary offer custom solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in fully custom web design and software development tailored to your specific business requirements, ensuring scale, security, and top-tier user experience."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
