import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 max-w-2xl mx-auto mb-6">
        Discover Insights on Plant Crops <br /> at Scale
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-md mx-auto mb-8">
        Unlock the potential of your agricultural practices with our advanced
        AI-driven insights and data analysis.
      </p>
      <div className="text-center">
        <Link href={"/dashboard"}>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
