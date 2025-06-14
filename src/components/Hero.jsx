import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
      {/* Background pattern */}
      {/* <div className="absolute inset-0 z-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="text-green-800"
        >
          <defs>
            <pattern
              id="leaf"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 1C6 1 1 6 1 10C1 14 6 19 10 19C14 19 19 14 19 10C19 6 14 1 10 1Z"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf)" />
        </svg>
      </div> */}

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-8">
          <div className="md:w-1/2">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-green-800 md:text-5xl lg:text-6xl">
              Identify & Treat Plant Diseases with AI
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              Upload a photo of your plant and our AI will instantly diagnose
              diseases, provide treatment recommendations, and help you grow
              healthier plants.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-green-600 text-lg hover:bg-green-700"
              >
                <Link href={"/analyse-plant"}>Analyze Your Plant</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-600 text-lg text-green-600"
              >
                <Link href="#how-it-works">Learn How It Works</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                    style={{ zIndex: 5 - i }}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-green-600">1,000+</span> plants
                analyzed today
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-green-200 opacity-70"></div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-green-300 opacity-70"></div>
              <div className="relative overflow-hidden rounded-xl border border-green-100 bg-white p-2 shadow-xl">
                <Image
                  // src="/placeholder.svg?height=400&width=600"
                  src="/dragon.jpg"
                  alt="Plant disease detection"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-lg object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <p className="font-medium">
                      Disease detected: Powdery Mildew
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    Confidence: 94% • Treatment available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-green-100 pt-12 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-green-600">50+</div>
            <p className="text-gray-600">Plant Diseases</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-green-600">90%+</div>
            <p className="text-gray-600">Accuracy Rate</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-green-600">100K+</div>
            <p className="text-gray-600">Happy Users</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold text-green-600">24/7</div>
            <p className="text-gray-600">AI Assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
