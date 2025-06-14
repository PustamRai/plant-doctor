import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-scan-search"
        >
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
          <circle cx="12" cy="12" r="3" />
          <path d="m16 16-1.9-1.9" />
        </svg>
      ),
      title: "Instant Disease Detection",
      description:
        "Our AI analyzes plant images in seconds to identify diseases with high accuracy.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clipboard-list"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M12 11h4" />
          <path d="M12 16h4" />
          <path d="M8 11h.01" />
          <path d="M8 16h.01" />
        </svg>
      ),
      title: "Treatment Recommendations",
      description:
        "Get detailed treatment plans and prevention tips tailored to the identified disease.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-database"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      title: "Extensive Disease Database",
      description:
        "Our system recognizes over 50 common plant diseases across various plant species.",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {features.map((feature, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="bg-green-50 pb-2">
            <div className="mb-2 rounded-full bg-green-100 p-2 w-10 h-10 flex items-center justify-center text-green-600">
              {feature.icon}
            </div>
            <CardTitle className="text-xl text-green-800">
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
