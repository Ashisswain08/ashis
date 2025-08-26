import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About | Ashis Kumar Swain",
  description:
    "Learn more about Ashis Kumar Swain - Frontend Developer, JavaScript enthusiast, and tech explorer.",
  keywords: [
    "Ashis Kumar Swain",
    "About Kinh",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Vietnam Developer",
  ],
  openGraph: {
    title: "About | Ashis Kumar Swain",
    description:
      "Discover the story and journey of Ashis Kumar Swain in the world of web development.",
    url: "https://kinhdev.id.vn/about",
    siteName: "Ashis Kumar Swain",
    type: "website",
    locale: "en_US",
    images: [
      // {
      //   url: "https://kinhdev.id.vn/images/seo/about-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Ashis Kumar Swain About Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Ashis Kumar Swain",
    description:
      "Learn more about Ashis Kumar Swain - Frontend Developer and tech enthusiast.",
    // images: ["https://kinhdev.id.vn/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: "https://kinhdev.id.vn/about",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
