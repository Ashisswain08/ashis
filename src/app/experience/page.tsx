import { FullScreen } from "@/components/full-screen"
import { ExperienceTimeline } from "./containers/experience-timeline"

export const metadata = {
  title: "Experience | Ashis Kumar Swain",
  description:
    "Explore the professional journey of Ashis Kumar Swain - frontend developer with experience in modern JavaScript frameworks.",
  openGraph: {
    title: "Experience | Ashis Kumar Swain",
    description:
      "Frontend Developer with hands-on experience in React, Next.js, and modern UI/UX design.",
    url: "https://kinhdev.id.vn/experience",
    siteName: "Ashis Kumar Swain",
    images: [
      // {
      //   url: "https://kinhdev.id.vn/images/seo/experience-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Ashis Kumar Swain Experience Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Ashis Kumar Swain",
    description:
      "Check out Ashis Kumar Swain's past work and achievements in frontend development.",
    //   images: ["https://kinhdev.id.vn/images/seo/experience-og-image.png"],
  },
  alternates: {
    canonical: "https://kinhdev.id.vn/experience",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  )
}
