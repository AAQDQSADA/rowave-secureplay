import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const docs = [
    {
      title: "Getting Started",
      content: "Learn how to integrate RoWave into your Roblox game quickly and easily.",
    },
    {
      title: "Installation Guide",
      content: "Step-by-step instructions for installing and configuring RoWave.",
    },
    {
      title: "API Reference",
      content: "Complete API documentation for advanced implementations.",
    },
    {
      title: "Best Practices",
      content: "Learn about security best practices and recommended configurations.",
    },
    {
      title: "Troubleshooting",
      content: "Common issues and their solutions.",
    },
  ];

  const filteredDocs = docs.filter((doc) =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Documentation</h1>
        
        <div className="max-w-2xl mx-auto mb-8">
          <Input
            type="search"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <Accordion type="single" collapsible>
            {filteredDocs.map((doc, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white hover:text-blue-300">
                  {doc.title}
                </AccordionTrigger>
                <AccordionContent className="text-blue-100">
                  {doc.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            className="bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => window.location.href = '/pricing'}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Documentation;