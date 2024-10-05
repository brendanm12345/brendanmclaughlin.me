import "@/styles/globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Brendan McLaughlin",
  description: "A template for Next.js with Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-work font-normal text-duskwine text-md bg-moonmist">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className=''>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
