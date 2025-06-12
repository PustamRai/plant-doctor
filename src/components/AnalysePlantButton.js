"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalysePlantButton() {
  return (
    <div>
      <Link href={"/analyse-plant"}>
        <Button
          variant="outline"
          className="border-green-600 text-green-600 hover:bg-green-50"
        >
          analyse plant
        </Button>
      </Link>
    </div>
  );
}
