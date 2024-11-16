"use client";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation"; // Changed import from 'next/router' to 'next/navigation'

export default function Navbar() {
  const router = useRouter();

  const handleTabChange = (value: string) => {
    if (value === "home") {
      router.push("/");
    }
    if (value === "insights") {
      router.push("/dashboard");
    }
    if (value === "sources") {
      router.push("/sources");
    }
    if (value === "geo") {
      router.push("/geo");
    }
    if (value === "about") {
      router.push("/about");
    }
  };

  return (
    <header className="border-b overflow-hidden">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

      <div className="flex items-center text-2xl font-bold">
        <img 
          src="/assets/logowithfont.png" 
          alt="WindyCity Logo" 
          className="h-20 w-auto"
        />
      </div>


        <Tabs defaultValue="home" onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="insights">Crop Insights</TabsTrigger>
            <TabsTrigger value="sources">Data Sources</TabsTrigger>
            <TabsTrigger value="geo">Geo Location</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
}
