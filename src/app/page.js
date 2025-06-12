// import { Hero } from "@/components/hero";
// import { UploadForm } from "@/components/upload-form"
// import { Features } from "@/components/features"
// import { HowItWorks } from "@/components/how-it-works"
// import { Testimonials } from "@/components/testimonials"
// import { FAQ } from "@/components/faq"

import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
// import { Testimonials } from "@/components/Testimonials";
import { UploadForm } from "@/components/UploadForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* <Navbar /> */}

      <main>
        <Hero />

        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-green-800">
            Analyze Your Plant
          </h2>
          <div
            id="upload"
            className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg"
          >
            <UploadForm />
          </div>
        </section>

        <section
          id="features"
          className="container mx-auto px-4 py-16 bg-green-50"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-green-800">
            Features
          </h2>
          <Features />
        </section>

        <section id="how-it-works" className="container mx-auto px-4 py-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-green-800">
            How It Works
          </h2>
          <HowItWorks />
        </section>

        <section id="testimonials" className="bg-green-50">
          <div className="container mx-auto px-4">{/* <Testimonials /> */}</div>
        </section>

        <section id="faq" className="container mx-auto px-4">
          <FAQ />
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
