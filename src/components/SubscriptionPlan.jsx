"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CheckIcon, XIcon, LeafIcon, ZapIcon } from "lucide-react";

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to Standard plan (index 1)

  const plans = [
    {
      name: "Basics",
      price: "Rs.1000",
      period: "/month",
      features: [
        { name: "5 disease classifications monthly", included: true },
        { name: "Standard library", included: true },
        { name: "Access to expert support", included: false },
      ],
      icon: <CheckIcon className="h-5 w-5 text-green-800" />,
      buttonVariant: "outline",
    },
    {
      name: "Standard",
      price: "Rs.5000",
      period: "/month",
      features: [
        { name: "10 disease classifications monthly", included: true },
        { name: "Research library", included: true },
        { name: "Access to expert support", included: false },
      ],
      icon: <LeafIcon className="h-5 w-5 text-green-800" />,
      buttonVariant: "default",
    },
    {
      name: "Advanced",
      price: "Rs.10000",
      period: "/month",
      features: [
        { name: "Unlimited disease classifications", included: true },
        { name: "Research library", included: true },
        { name: "Access to expert support", included: true },
      ],
      icon: <ZapIcon className="h-5 w-5 text-green-800" />,
      buttonVariant: "outline",
    },
  ];

  const handlePlanSelect = (planIndex) => {
    setSelectedPlan(planIndex);
  };

  const handleChoosePlan = (planIndex) => {
    setSelectedPlan(planIndex);
    // Here you can add logic to proceed with the selected plan
    console.log(`Selected plan: ${plans[planIndex].name}`);
    // You could redirect to checkout or show a confirmation modal
  };

  return (
    <div className="w-full">
      <h2 className="mb-8 text-center text-3xl font-bold text-green-800">
        Select your subscription
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => {
          const isSelected = selectedPlan === index;
          return (
            <Card
              key={index}
              className={`cursor-pointer overflow-hidden border-0 bg-green-50 shadow-sm transition-all hover:shadow-md ${
                isSelected ? "relative ring-2 ring-green-500 shadow-lg" : ""
              }`}
              onClick={() => handlePlanSelect(index)}
            >
              {isSelected && (
                <div className="absolute right-4 top-4 rounded-full bg-green-100 p-1">
                  {plan.icon}
                </div>
              )}
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3
                      className={`text-lg font-medium ${
                        isSelected ? "text-green-800" : "text-green-700"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    {isSelected && (
                      <span className="text-xs font-medium text-green-600">
                        Selected Plan
                      </span>
                    )}
                  </div>
                  {!isSelected && (
                    <div className="rounded-full bg-green-100 p-1">
                      {plan.icon}
                    </div>
                  )}
                </div>
                <div className="mb-6">
                  <span
                    className={`text-3xl font-bold ${
                      isSelected ? "text-green-800" : "text-green-700"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <CheckIcon className="mr-2 h-5 w-5 flex-shrink-0 text-green-600" />
                      ) : (
                        <XIcon className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400" />
                      )}
                      <span
                        className={
                          feature.included ? "text-gray-700" : "text-gray-500"
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter
                className={`border-t px-6 py-4 ${
                  isSelected
                    ? "border-green-200 bg-green-100"
                    : "border-green-100 bg-green-50"
                }`}
              >
                <Button
                  variant={isSelected ? "default" : "outline"}
                  className={`w-full ${
                    isSelected
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "border-green-600 text-green-600 hover:bg-green-100"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click when button is clicked
                    handleChoosePlan(index);
                  }}
                >
                  {isSelected ? "Selected" : "Choose Plan"}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* Optional: Show selected plan summary */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Selected:{" "}
          <span className="font-semibold text-green-800">
            {plans[selectedPlan].name}
          </span>{" "}
          - {plans[selectedPlan].price}
          {plans[selectedPlan].period}
        </p>
      </div>
    </div>
  );
}
