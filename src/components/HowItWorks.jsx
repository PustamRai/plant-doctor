export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Upload a Photo",
      description:
        "Take a clear photo of the affected plant part and upload it to our platform.",
    },
    {
      number: 2,
      title: "AI Analysis",
      description:
        "Our advanced AI analyzes the image to identify diseases, pests, or nutrient deficiencies.",
    },
    {
      number: 3,
      title: "Get Results",
      description:
        "Receive detailed information about the condition, including treatment recommendations.",
    },
    {
      number: 4,
      title: "Apply Treatment",
      description:
        "Follow the recommended treatment plan to nurse your plant back to health.",
    },
  ];

  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="absolute left-[25px] top-0 h-full w-0.5 bg-green-200 md:left-1/2 md:-ml-0.5"></div>

      <div className="space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Circle with number */}
            <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white md:left-1/2 md:-ml-6">
              {step.number}
            </div>

            {/* Content */}
            <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
              <div
                className={`rounded-lg bg-white p-6 shadow-md ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                <h3 className="mb-2 text-xl font-bold text-green-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
