import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function AnalysisResult({ result, image }) {
  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return "bg-green-100 text-green-800 border-green-200";
    if (confidence >= 70)
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  return (
    <Card className="mt-8 overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="h-64 bg-gray-100">
            {image && (
              <Image
                // src="/dragon.jpg"
                src={image || "/dragon.jpg"}
                alt="Analyzed plant"
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>
        <div className="p-6 md:w-2/3">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-green-800">
              {result.disease}
            </h3>
            <Badge
              className={`${getConfidenceColor(result.confidence)} px-3 py-1`}
            >
              {result.confidence}% Confidence
            </Badge>
          </div>

          <Separator className="my-4" />

          <div className="mb-4">
            <h4 className="mb-2 font-semibold text-gray-700">Description</h4>
            <p className="text-gray-600">{result.description}</p>
          </div>

          <div className="mb-4">
            <h4 className="mb-2 font-semibold text-gray-700">Treatment</h4>
            <p className="text-gray-600">{result.treatment}</p>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-gray-700">
              Prevention Tips
            </h4>
            <ul className="list-inside list-disc text-gray-600">
              {result.preventionTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}
