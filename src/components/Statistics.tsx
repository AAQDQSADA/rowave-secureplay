import { motion } from "framer-motion";
import { ArrowUpRight, Users, Shield, Code } from "lucide-react";
import CountUp from "react-countup";

export const Statistics = () => {
  const stats = [
    {
      title: "Active Users",
      value: 50000,
      icon: Users,
      description: "Trust RoWave for their games",
    },
    {
      title: "Threats Blocked",
      value: 1000000,
      icon: Shield,
      description: "Malicious attempts prevented",
    },
    {
      title: "Games Protected",
      value: 2500,
      icon: Code,
      description: "Across different genres",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="feature-card relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <stat.icon className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold text-white mb-2">
                <CountUp end={stat.value} duration={2.5} separator="," />+
              </h3>
              <p className="text-lg font-semibold text-blue-300 mb-1">{stat.title}</p>
              <p className="text-blue-200/80">{stat.description}</p>
              <ArrowUpRight className="absolute bottom-4 right-4 w-6 h-6 text-blue-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};