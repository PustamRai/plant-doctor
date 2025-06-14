import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CheckIcon, XIcon, LeafIcon, ZapIcon } from "lucide-react";

export default function SubscriptionPlans() {
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
      popular: false,
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
      popular: true,
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
      popular: false,
      buttonVariant: "outline",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="mb-8 text-center text-3xl font-bold text-green-800">
        Select your subscription
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`overflow-hidden border-0 bg-green-50 shadow-sm transition-all hover:shadow-md ${
              plan.popular ? "relative ring-2 ring-green-500" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute right-4 top-4 rounded-full bg-green-100 p-1">
                {plan.icon}
              </div>
            )}
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-green-800">
                    {plan.name}
                  </h3>
                </div>
                {!plan.popular && (
                  <div className="rounded-full bg-green-100 p-1">
                    {plan.icon}
                  </div>
                )}
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-green-800">
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
            <CardFooter className="border-t border-green-100 bg-green-50 px-6 py-4">
              <Button
                variant={plan.buttonVariant}
                className={`w-full ${
                  plan.popular
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "border-green-600 text-green-600 hover:bg-green-100"
                }`}
              >
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
