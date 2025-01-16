import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Copy, RefreshCw } from "lucide-react";
import { Footer } from "@/components/Footer";

const ProtectedGames = () => {
  const [gameId, setGameId] = useState("");

  const generateGameId = () => {
    const prefix = "RW";
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    const newGameId = `${prefix}-${timestamp}-${random}`;
    setGameId(newGameId);
    toast.success("New Game ID generated!");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gameId);
    toast.success("Game ID copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Protected Games Registry
          </h1>
          
          <Card className="bg-gray-800/50 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">
                Game ID Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-700/50 p-6 rounded-lg text-center">
                <p className="text-xl font-mono text-blue-300 break-all">
                  {gameId || "Click generate to create a new Game ID"}
                </p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={generateGameId}
                  className="bg-blue-500 hover:bg-blue-600 gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Generate ID
                </Button>
                
                <Button
                  onClick={copyToClipboard}
                  disabled={!gameId}
                  className="bg-green-500 hover:bg-green-600 gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy ID
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-100/80 space-y-4">
                <p>Each Game ID is unique and includes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>RoWave prefix (RW)</li>
                  <li>Timestamp-based identifier</li>
                  <li>Random alphanumeric sequence</li>
                  <li>Automatic validation system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-100/80 space-y-4">
                <p>Your Game ID provides access to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Real-time protection</li>
                  <li>Automated threat detection</li>
                  <li>24/7 monitoring</li>
                  <li>Instant security alerts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ProtectedGames;