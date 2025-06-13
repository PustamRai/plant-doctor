import { PlantChat } from "@/components/PlantChat";
import { UploadForm } from "@/components/UploadForm";
import React from "react";

export default function AnalyzePlant() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-green-800">
        Analyze Your Plant
      </h2>

      {/* upload image and chat with AI */}
      <div className="mx-auto rounded-xl bg-white p-8 shadow-lg sm:flex flex-col justify-center items-center gap-4">
        <div>
          <UploadForm />
        </div>

        <div>
          <PlantChat />
        </div>
      </div>
    </section>
  );
}
