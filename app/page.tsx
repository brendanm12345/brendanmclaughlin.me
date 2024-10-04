import { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Intro from "@/components/ui/Intro";
import { ReactComponent as Polaris } from '@/public/img/polaris.svg';
import WebLink from "@/components/common/WebLink";
import { Work } from "@/components/ui/Work";

export const metadata: Metadata = {
  title: "Brendan McLaughlin",
  description: "A template for Next.js with Tailwind",
};

export default function Page() {
  return (
    <>
      <main >
        <div className="mx-6 flex flex-col items-center h-full">
          <div className="flex flex-col gap-8 md:w-[60%] sm:w-full px-8 pt-24">
            <div className="gap-4 flex flex-col ">
              <Polaris width={32} height={32} color={"#0E0616"} />
              <p className="text-4xl font-bold font-crimson">Hi, I&apos;m Brendan</p>
            </div>
            {/* paragraph */}
            <div className="gap-6 flex flex-col ">
              <p className="font-work">
                I&apos;m a fifth year BS/MS computer science student at Stanford
                interested ML, systems, and applications.
              </p>
              <p className="font-work">
                Most recently, I built ML infra at <WebLink href="https://www.apple.com" text="Apple" />, backend services at <WebLink href="https://www.tesla.com" text="Tesla" />, and payment
                tech at <WebLink href="https://www.noramp.io" text="NoRamp Labs" />
              </p>
              <p className="font-work">
                Prior to that, I designed products at <WebLink href="https://www.january.ai" text="January AI" /> & <WebLink href="https://www.tidepool.org" text="Tidepool" />, built
                an education company that reached $20K in quarterly revenue,
                and patented a medical device in high school.
              </p>
              <p className="font-work">
                For more info, check out my <WebLink href="resume/Brendan_McLaughlin_Resume_Sept_2024.pdf" text="resume" />, <WebLink href="https://github.com/brendanm12345" text="github" />, <WebLink href="https://www.linkedin.com/in/blam0407/" text="linkedin" />, <WebLink href="https://x.com/brendanm0407" text="twitter" />, or shoot me an <WebLink href="mailto:mclaughlin@stanford.edu" text="email" />!
              </p>
            </div>
            <Work />
          </div>
        </div>
      </main >
      <footer className="mt-8 pb-4 text-center text-sm text-gray-500 font-work">
        &copy; {new Date().getFullYear()} Brendan McLaughlin. All rights reserved.
      </footer>
    </>
  );
}
