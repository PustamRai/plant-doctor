import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "PlantDoctor saved my tomato plants! I was about to give up on them when I discovered this app. The diagnosis was spot on and the treatment worked perfectly.",
      author: "Sarah Johnson",
      role: "Home Gardener",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "As a professional landscaper, I use PlantDoctor daily. It's like having a plant pathologist in my pocket. Highly recommended for anyone who works with plants.",
      author: "Michael Chen",
      role: "Professional Landscaper",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "The app is incredibly accurate. It identified a rare fungal infection on my orchids that even my local garden center couldn't diagnose. Thank you PlantDoctor!",
      author: "Emma Rodriguez",
      role: "Orchid Enthusiast",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="mb-12 text-center text-3xl font-bold text-green-800">
        What Our Users Say
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="overflow-visible">
            <CardContent className="p-6">
              <div className="relative">
                <svg
                  className="absolute -left-4 -top-4 h-8 w-8 text-green-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.41-2.205.315-.53.748-.85 1.3-.963.55-.113 1.05-.138 1.5-.075.73.102 1.36.33 1.88.685l.72-1.172c-.53-.355-1.11-.6-1.73-.738-.62-.135-1.22-.198-1.81-.194-.82-.005-1.58.14-2.29.438-.71.298-1.29.74-1.73 1.325-.44.587-.74 1.335-.9 2.242-.16.908-.18 1.973-.06 3.197.12 1.223.34 2.267.66 3.13.32.865.77 1.533 1.34 2.002.57.47 1.21.71 1.91.72.7.01 1.26-.145 1.68-.468.42-.322.73-.722.93-1.2.2-.48.3-.974.3-1.48zm7.46 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.825-.56-.13-1.07-.14-1.54-.03-.16-.95.09-1.684.4-2.204.31-.53.75-.85 1.3-.963.55-.113 1.05-.138 1.5-.075.73.102 1.36.33 1.88.685l.72-1.172c-.53-.355-1.11-.6-1.73-.738-.62-.135-1.22-.198-1.81-.194-.82-.005-1.58.14-2.29.438-.71.298-1.29.74-1.73 1.325-.44.587-.74 1.335-.9 2.242-.16.908-.18 1.973-.06 3.197.12 1.223.34 2.267.66 3.13.32.865.77 1.533 1.34 2.002.57.47 1.21.71 1.91.72.7.01 1.26-.145 1.68-.468.42-.322.73-.722.93-1.2.2-.48.3-.974.3-1.48z" />
                </svg>
                <div className="mb-4 text-lg text-gray-600">
                  {testimonial.quote}
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={600}
                  height={500}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-green-800">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
