import Link from "next/link";
import { ArrowRight, Car, Bike } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI-Powered Vehicle Detection
            </h1>
            <p className="text-xl mb-8">
              Instantly identify cars and bikes with our cutting-edge AI
              technology.
            </p>
            <Link
              href="/detect"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-64 md:h-96 relative">
              <Car className="text-white w-48 h-48 md:w-64 md:h-64 absolute top-0 left-0 transform -rotate-12 transition-all duration-500 hover:scale-110" />
              <Bike className="text-white w-32 h-32 md:w-48 md:h-48 absolute bottom-0 right-0 transform rotate-12 transition-all duration-500 hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
