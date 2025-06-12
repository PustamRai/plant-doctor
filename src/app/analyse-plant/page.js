import { UploadForm } from "@/components/UploadForm";
import React from "react";

export default function AnalyzePlant() {
  return (
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
  );
}
