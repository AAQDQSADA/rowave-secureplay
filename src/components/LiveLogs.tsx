import { useEffect, useState } from "react";
import { Shield, AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface Log {
  id: number;
  type: "detection" | "action";
  message: string;
  timestamp: string;
}

export const LiveLogs = () => {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    // Simulated live logs - in production, this would connect to your backend
    const demoLogs: Log[] = [
      {
        id: 1,
        type: "detection",
        message: "Suspicious teleportation detected",
        timestamp: new Date().toISOString()
      },
      {
        id: 2,
        type: "action",
        message: "Auto-ban system activated",
        timestamp: new Date().toISOString()
      }
    ];
    setLogs(demoLogs);
  }, []);

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Live Protection Status
          </h2>
          <p className="text-blue-100/80">
            Real-time monitoring and action logs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {logs.map((log) => (
            <Card key={log.id} className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  {log.type === "detection" ? (
                    <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                  ) : (
                    <Shield className="mr-2 h-5 w-5 text-green-500" />
                  )}
                  {log.type === "detection" ? "Detection Alert" : "System Action"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">{log.message}</p>
                <p className="text-sm text-gray-400 mt-2">
                  {new Date(log.timestamp).toLocaleTimeString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};