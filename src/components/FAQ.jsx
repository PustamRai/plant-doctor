import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How accurate is the plant disease detection?",
      answer:
        "Our AI model has been trained on thousands of plant images and can identify over 50 common plant diseases with an accuracy rate of approximately 90%. However, for rare or unusual conditions, we recommend consulting with a professional botanist or plant pathologist.",
    },
    {
      question: "What types of plants can be analyzed?",
      answer:
        "PlantDoctor can analyze most common garden plants, vegetables, fruits, ornamentals, and houseplants. Our system is particularly effective with tomatoes, peppers, potatoes, strawberries, apples, roses, and many common houseplants.",
    },
    {
      question: "How should I take photos for the best results?",
      answer:
        "For the most accurate results, take clear, well-lit photos of the affected plant parts (leaves, stems, fruits) showing the symptoms. Include both healthy and diseased parts for comparison. Avoid shadows and make sure the image is in focus.",
    },
    {
      question: "Is there a limit to how many images I can analyze?",
      answer:
        "Free accounts can analyze up to 5 images per month. Premium subscribers have unlimited analyses and additional features like history tracking and detailed treatment guides.",
    },
    {
      question: "Can Krishi Netra identify pests as well as diseases?",
      answer:
        "Yes, PlantDoctor can identify many common plant pests and the damage they cause, including aphids, spider mites, whiteflies, and more. The system will provide pest identification and control recommendations.",
    },
    {
      question: "How do I implement the recommended treatments?",
      answer:
        "Each diagnosis comes with detailed treatment instructions. For organic and chemical treatments, always follow the product label instructions and safety guidelines. If you're unsure, consult with your local garden center or agricultural extension office.",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="mb-8 text-center text-3xl font-bold text-green-800">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium text-green-700">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
