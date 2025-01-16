import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";
import { motion } from "framer-motion";

const RandomGenerator = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [color, setColor] = useState("#000000");

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let result = "";
    for (let i = 0; i < 12; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
    toast.success("Password generated!");
  };

  const generateUsername = () => {
    const adjectives = ["Happy", "Lucky", "Clever", "Brave", "Swift", "Mighty", "Cool", "Super"];
    const nouns = ["Panda", "Dragon", "Tiger", "Eagle", "Wolf", "Lion", "Phoenix", "Warrior"];
    const number = Math.floor(Math.random() * 1000);
    
    const username = `${adjectives[Math.floor(Math.random() * adjectives.length)]}${
      nouns[Math.floor(Math.random() * nouns.length)]
    }${number}`;
    
    setUsername(username);
    toast.success("Username generated!");
  };

  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
    toast.success("Color generated!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Password Generator */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Password Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                value={password}
                readOnly
                className="bg-gray-700 text-white border-gray-600"
              />
              <Button
                onClick={generatePassword}
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Generate Password
              </Button>
            </CardContent>
          </Card>

          {/* Username Generator */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Username Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                value={username}
                readOnly
                className="bg-gray-700 text-white border-gray-600"
              />
              <Button
                onClick={generateUsername}
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Generate Username
              </Button>
            </CardContent>
          </Card>

          {/* Color Generator */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Color Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="h-20 rounded-lg transition-colors duration-500"
                style={{ backgroundColor: color }}
              />
              <Input
                value={color}
                readOnly
                className="bg-gray-700 text-white border-gray-600"
              />
              <Button
                onClick={generateColor}
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Generate Color
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default RandomGenerator;