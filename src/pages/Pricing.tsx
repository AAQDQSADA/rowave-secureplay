import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "$19.99",
    description: "Perfect for small games",
    features: [
      "Basic anti-cheat protection",
      "Email support",
      "Up to 1,000 players"
    ]
  },
  {
    name: "Pro",
    price: "$49.99",
    description: "For growing games",
    features: [
      "Advanced anti-cheat protection",
      "Priority support",
      "Up to 10,000 players",
      "Real-time notifications"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale games",
    features: [
      "Custom anti-cheat solutions",
      "24/7 dedicated support",
      "Unlimited players",
      "Custom features"
    ]
  }
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-blue-100">
            Protect your game with our flexible pricing options
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <CardDescription className="text-blue-100">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-6">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-blue-100 flex items-center">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600"
                  onClick={() => navigate("/key-generator")}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;