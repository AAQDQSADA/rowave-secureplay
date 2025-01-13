import { User } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const teamMembers = [
  { name: "Doro", role: "Lead Developer" },
  { name: "Micha", role: "Security Expert" },
  { name: "Vanessa", role: "Support Lead" },
  { name: "Ekrem", role: "System Administrator" }
];

export const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Team
          </h2>
          <p className="text-blue-100/80">
            Expert professionals dedicated to your game's security
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <User className="h-10 w-10 text-blue-500" />
                </div>
                <CardTitle className="text-center text-white">
                  {member.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-blue-100/80">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};