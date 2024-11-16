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
    if (value === "widgets") {
      router.push("/widgets");
    }
  };

  return (
    <header className="border-b overflow-hidden">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center text-2xl font-bold">
          <Link href="/">
            {/* WindyCity */}
            <img
              src="/assets/logowithfont.png"
              alt="WindyCity Logo"
              className="h-14 w-auto"
            />
          </Link>
        </div>

        <Tabs defaultValue="home" onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="insights">Crop Insights</TabsTrigger>
            <TabsTrigger value="sources">Data Sources</TabsTrigger>
            <TabsTrigger value="geo">Geo Location</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="widgets">Widgets</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
}
