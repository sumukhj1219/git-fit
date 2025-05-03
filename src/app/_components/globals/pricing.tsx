import React from "react";
import { CheckIcon, XIcon } from "lucide-react";

const Pricing = () => {
  const prices = [
    {
      name: "Free",
      price: "$0",
      color: "border-green-500",
      features: [
        { label: "10 commits/day", included: true },
        { label: "Basic commit styles (e.g. concise, conventional)", included: true },
        { label: "API access", included: false },
        { label: "Advanced styles (e.g. emoji, Jira-style)", included: false },
        { label: "Priority support", included: false },
      ],
    },
    {
      name: "Pro",
      price: "$3",
      color: "border-blue-500",
      features: [
        { label: "100 commits/day", included: true },
        { label: "All commit styles", included: true },
        { label: "API access (500 requests/month)", included: true },
        { label: "Local git hook integration (CLI)", included: true },
        { label: "Light analytics", included: true },
      ],
    },
    {
      name: "Team",
      price: "$10",
      color: "border-purple-500",
      features: [
        { label: "Unlimited commits/day", included: true },
        { label: "Priority API access (5,000+ reqs/month)", included: true },
        { label: "Webhooks / GitHub Action integration", included: true },
        { label: "Team usage dashboard", included: true },
        { label: "Priority support", included: true },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl text-secondary/50 font-bold mt-20 m-10">Pricing</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prices.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border p-6 shadow-md bg-neutral-950 dark:bg-black text-white ${plan.color}`}
          >
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-4xl font-bold mb-4">{plan.price}<span className="text-sm font-normal">/month</span></p>
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  {feature.included ? (
                    <CheckIcon className="w-4 h-4 text-green-400" />
                  ) : (
                    <XIcon className="w-4 h-4 text-red-400" />
                  )}
                  <span className={`${!feature.included ? 'line-through text-gray-400' : ''}`}>
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
