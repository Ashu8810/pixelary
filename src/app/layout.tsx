import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pixelary.in'),
  title: "Pixelary | Custom B2B Web Design & Software Development Company",
  description: "Pixelary is a premier B2B design and development company. We build clean, modern, and high-performance websites, web applications, and custom digital products that scale.",
  keywords: [
    "Pixelary",
    "B2B web design company",
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
    title: "Pixelary | Custom B2B Web Design & Software Development Company",
    description: "Pixelary is a premier B2B design and development company. We build clean, modern, and high-performance websites, web applications, and custom digital products that scale.",
    url: 'https://www.pixelary.in',
    siteName: 'Pixelary',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixelary Design & Development Company',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pixelary | Custom B2B Web Design & Software Development Company",
    description: "Pixelary is a premier B2B design and development company. We build clean, modern, and high-performance websites, web applications, and custom digital products that scale.",
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
        "description": "Pixelary is a custom B2B design and software development studio creating clean, functional, and scalable digital experiences.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "India"
        },
        "founders": [
          {
            "@type": "Person",
            "name": "Ashutosh Patel",
            "jobTitle": "Co-founder",
            "url": "https://ashutoshpatel.me",
            "sameAs": [
              "https://www.linkedin.com/in/ashutosh-patel2901/",
              "https://x.com/ashu00770",
              "https://www.instagram.com/_ashu_h3r3/"
            ]
          },
          {
            "@type": "Person",
            "name": "Eshaan Agrawal",
            "jobTitle": "Co-founder",
            "url": "https://eshaanagrawal.me",
            "sameAs": [
              "https://www.linkedin.com/in/eshaanagrawal/",
              "https://x.com/eshaanagrawall",
              "https://www.instagram.com/me_eshaanagrawal/"
            ]
          }
        ],
        "knowsAbout": [
          "Web Design",
          "Web Development",
          "UI/UX Design",
          "Software Engineering",
          "Next.js Development",
          "React Development",
          "SEO Services",
          "Mobile App Development"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.pixelary.in/#service-business",
        "name": "Pixelary",
        "url": "https://www.pixelary.in",
        "image": "https://www.pixelary.in/hero-image.jpg",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "India"
        },
        "areaServed": "Worldwide"
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
              "text": "Pixelary is a custom B2B web design and software development company that builds modern, responsive, and high-performance websites, web applications, and digital experiences."
            }
          },
          {
            "@type": "Question",
            "name": "What services does Pixelary offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer complete end-to-end design and development services: Website Design & Development, UI/UX Design, custom Web Application building, SEO, Mobile Application design, Digital Marketing, and Cyber Security."
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

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-Z1DHMHD568';

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
