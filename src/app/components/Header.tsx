import Link from "next/link";
import { Car } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Car className="w-8 h-8 text-purple-500" />
          <span className="text-2xl font-bold">VehicleAI</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="hover:text-purple-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/detect"
                className="hover:text-purple-400 transition-colors"
              >
                Detect
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
