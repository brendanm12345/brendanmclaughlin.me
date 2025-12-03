'use client';
import { ReactComponent as Polaris } from '@/public/img/polaris.svg';
import WebLink from "@/components/common/WebLink";
import { Work } from "@/components/ui/Work";
import ArrowLink from "@/components/common/ArrowLink";
import Projects from "@/components/ui/Projects";
import Research from "@/components/ui/Research";
import AnimateIn from "@/components/common/AnimateIn";

export default function Page() {
  return (
    <>
      <main className="min-h-screen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="flex flex-col gap-8">
            <AnimateIn delay={0}>
              <div className="gap-4 flex flex-col">
                <Polaris width={32} height={32} color={"#0E0616"} />
                <h1 className="text-3xl sm:text-4xl font-bold font-crimson">Hi, I&apos;m Brendan</h1>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="flex flex-col gap-2">
                <p className="opacity-50">I&apos;m a...</p>
                <p className="text-base sm:text-lg">
                  Computer science student at Stanford (BS&apos;24, MS&apos;25) studying artificial intelligence.
                  I&apos;m also a master&apos;s student research assistant advised by Azalia Mirhoseini
                  (<WebLink href="https://scalingintelligence.stanford.edu/" text="Scaling Intelligence Lab" />)
                  and Christopher Ré (<WebLink href="https://hazyresearch.stanford.edu/" text="Hazy Research" />)
                  where I&apos;m focused on work related to test-time compute and verification.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={400}>
              <div className="flex flex-col gap-2">
                <p className="opacity-50">Previously I&apos;ve...</p>
                <p className="text-base sm:text-lg">
                  Built ML infrastructure at <WebLink href="https://www.apple.com" text="Apple" />, backend services at <WebLink href="https://www.tesla.com" text="Tesla" />, and payment
                  tech at <WebLink href="https://www.noramp.io" text="NoRamp Labs" />. Prior to that, I designed products at <WebLink href="https://www.january.ai" text="January AI" /> & <WebLink href="https://www.tidepool.org" text="Tidepool" />, built
                  an education company that reached $20K in quarterly revenue,
                  and patented a medical device for custom foot orthotic generation.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={600}>
              <div className="flex flex-col gap-2">
                <p className="opacity-50">For more info...</p>
                <div className="flex flex-wrap gap-y-2 gap-x-4 sm:gap-x-8">
                  <ArrowLink value="LinkedIn" href="https://www.linkedin.com/in/blam0407/" />
                  <ArrowLink value="X" href="https://x.com/brendanm0407" />
                  <ArrowLink value="GitHub" href="https://github.com/brendanm12345" />
                  <ArrowLink value="Google Scholar" href="https://scholar.google.com/citations?user=fbwsKoYAAAAJ&hl=en" />
                  <ArrowLink value="Resume" href="/resume/Brendan_McLaughlin_Resume_March_2025.pdf" />
                  <ArrowLink value="Email" href="mailto:mclaughlin@stanford.edu" />
                </div>
              </div>
            </AnimateIn>

            {/* <AnimateIn delay={800}>
              <div className="border-b border-black border-dashed opacity-10" />
            </AnimateIn> */}

            <AnimateIn delay={800}>
              <Work />
            </AnimateIn>

            <AnimateIn delay={1200}>
              <Research />
            </AnimateIn>

            <AnimateIn delay={1000}>
              <Projects />
            </AnimateIn>

          </div>
        </div>
      </main>
      <footer className="mb-8 text-center text-sm opacity-50 font-work">
        &copy; {new Date().getFullYear()} Brendan McLaughlin
      </footer>
    </>
  );
}
