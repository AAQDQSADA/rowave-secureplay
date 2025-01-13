import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";

const KeyGenerator = () => {
  const [generatedKey, setGeneratedKey] = useState("");

  const generateKey = () => {
    // This is a simple example - in production, this would connect to your backend
    const key = 'RW-' + Math.random().toString(36).substring(2, 15).toUpperCase();
    setGeneratedKey(key);
    toast.success("Key generated successfully!");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedKey);
    toast.success("Key copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-md mx-auto bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">
              License Key Generator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                value={generatedKey}
                readOnly
                placeholder="Your license key will appear here"
                className="bg-gray-700 text-white border-gray-600"
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={generateKey}
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Generate Key
              </Button>
              {generatedKey && (
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="w-full"
                >
                  Copy Key
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default KeyGenerator;