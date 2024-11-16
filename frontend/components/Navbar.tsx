"use client";
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
    if (value === "about") {
      router.push("/about");
    }
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Windy City</h1>
        <Tabs defaultValue="home" onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="insights">Crop Insights</TabsTrigger>
            <TabsTrigger value="sources">Data Sources</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
}
