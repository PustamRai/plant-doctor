import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import SubscriptionPlans from "@/components/SubscriptionPlan";
// import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main>
        <Hero />

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

        <section id="subscription-plan" className="container mx-auto px-4">
          <SubscriptionPlans />
        </section>

        <section id="faq" className="container mx-auto px-4">
          <FAQ />
        </section>
      </main>
    </div>
  );
}
