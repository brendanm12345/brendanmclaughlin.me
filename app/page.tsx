'use client';
import { Metadata } from "next";
import { ReactComponent as Polaris } from '@/public/img/polaris.svg';
import WebLink from "@/components/common/WebLink";
import { Work } from "@/components/ui/Work";
import ArrowLink from "@/components/common/ArrowLink";
import Projects from "@/components/ui/Projects";
import AnimateIn from "@/components/common/AnimateIn";

export default function Page() {
  return (
    <>
      <main>
        <div className="mx-6 flex flex-col items-center h-full">
          <div className="flex flex-col gap-8 md:w-[55%] sm:w-full px-8 pt-20">
            <AnimateIn delay={0}>
              <div className="gap-4 flex flex-col ">
                <Polaris width={32} height={32} color={"#0E0616"} />
                <p className="text-4xl font-bold font-crimson">Hi, I&apos;m Brendan</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="gap-6 flex flex-col ">
                {/* I'm a... */}
                <div className="flex flex-col gap-2">
                  <p className="opacity-50">I&apos;m a...</p>
                  <p className="text-lg">
                    Fifth year BS/MS computer science student at Stanford
                    interested in ML, systems, and applications.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={400}>
              {/* Previously */}
              <div className="flex flex-col gap-2">
                <p className="opacity-50">Previously I&apos;ve...</p>
                <p className="text-lg">
                  Built ML infrastructure at <WebLink href="https://www.apple.com" text="Apple" />, backend services at <WebLink href="https://www.tesla.com" text="Tesla" />, and payment
                  tech at <WebLink href="https://www.noramp.io" text="NoRamp Labs" />. Prior to that, I designed products at <WebLink href="https://www.january.ai" text="January AI" /> & <WebLink href="https://www.tidepool.org" text="Tidepool" />, built
                  an education company that reached $20K in quarterly revenue,
                  and patented a medical device in high school.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={600}>
              {/* For more info... */}
              <div className="flex flex-col gap-2">
                <p className="opacity-50">For more info...</p>
                <div className="flex flex-wrap gap-y-4 gap-x-8">
                  <ArrowLink value="LinkedIn" href="https://www.linkedin.com/in/blam0407/" />
                  <ArrowLink value="Twitter" href="https://x.com/brendanm0407" />
                  <ArrowLink value="GitHub" href="https://github.com/brendanm12345" />
                  <ArrowLink value="Resume" href="/resume/Brendan_McLaughlin_Resume_Sept_2024.pdf" />
                  <ArrowLink value="Email" href="mailto:mclaughlin@stanford.edu" />
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={800}>
              <div className="border-b border-black border-dashed opacity-10" />
            </AnimateIn>

            <AnimateIn delay={800}>
              <Work />
            </AnimateIn>

            <AnimateIn delay={1000}>
              <Projects />
            </AnimateIn>
          </div>
        </div>
      </main>
      <footer className="mt-8 pb-6 text-center text-sm opacity-50 font-work">
        &copy; {new Date().getFullYear()} Brendan McLaughlin. All rights reserved.
      </footer>
    </>
  );
}
