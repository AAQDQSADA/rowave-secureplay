import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Users, Ban, Clock, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

const ProtectedGames = () => {
  const [lastDetection, setLastDetection] = useState("");
  const [detectionCount, setDetectionCount] = useState(0);

  useEffect(() => {
    // Simulate real-time detections
    const interval = setInterval(() => {
      const now = new Date();
      setLastDetection(now.toLocaleTimeString());
      setDetectionCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: "Active Players",
      value: "1,234",
      icon: Users,
      description: "Currently protected",
      color: "text-blue-500",
    },
    {
      title: "Alts Detected",
      value: detectionCount.toString(),
      icon: Ban,
      description: "Last 24 hours",
      color: "text-red-500",
    },
    {
      title: "Response Time",
      value: "12ms",
      icon: Clock,
      description: "Average detection speed",
      color: "text-green-500",
    },
    {
      title: "Protection Score",
      value: "99.9%",
      icon: Activity,
      description: "System efficiency",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto text-blue-500 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Protected by Linkifx
            </h1>
            <p className="text-xl text-blue-200">
              Advanced alt detection system actively monitoring your game
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">{stat.title}</CardTitle>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <p className="text-blue-200">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Live Detection Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-white">System Active</span>
                  </div>
                  <span className="text-blue-200">All systems operational</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-white">Last Detection</span>
                  </div>
                  <span className="text-blue-200">{lastDetection || "Monitoring..."}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ProtectedGames;