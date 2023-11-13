import { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Intro from "@/components/ui/Intro";

export const metadata: Metadata = {
  title: "Brendan McLaughlin",
  description: "A template for Next.js with Tailwind",
};

export default function Page() {
  return (
    <>
      <main >
        <div className="mx-6 sm:mx-2 flex flex-col items-center h-full">
          <Navbar />
          <Intro />
        </div>
      </main>
    </>
  );
}
