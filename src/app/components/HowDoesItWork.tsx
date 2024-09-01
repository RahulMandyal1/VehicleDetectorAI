import React from "react";
import { Upload, Zap, CheckCircle, LucideIcon } from "lucide-react";

interface StepProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-purple-600 mb-4">
        <Icon className="w-12 h-12 mx-auto" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-black">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

interface StepData {
  icon: LucideIcon;
  title: string;
  description: string;
}

const HowItWorks: React.FC = () => {
  const steps: StepData[] = [
    {
      icon: Upload,
      title: "Upload Image",
      description:
        "Upload or capture an image of a vehicle you want to identify.",
    },
    {
      icon: Zap,
      title: "AI Processing",
      description:
        "Our advanced AI analyzes the image to identify the vehicle.",
    },
    {
      icon: CheckCircle,
      title: "Get Results",
      description:
        "Receive accurate information about the vehicle's make and model.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
