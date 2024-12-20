"use client";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

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
    // if (value === "geo") {
    //   router.push("/geo");
    // }
    if (value === "about") {
      router.push("/about");
    }
    // if (value === "widgets") {
    //   router.push("/widgets");
    // }
  };

  return (
    <header className="border-b overflow-hidden bg-green-100">
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

        <Tabs
          defaultValue="home"
          onValueChange={handleTabChange}
          className="text-xl"
        >
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="insights">Crop Insights</TabsTrigger>
            <TabsTrigger value="sources">Data Sources</TabsTrigger>
            {/* <TabsTrigger value="geo">Geo Location</TabsTrigger> */}
            <TabsTrigger value="about">About</TabsTrigger>
            {/* <TabsTrigger value="widgets">Widgets</TabsTrigger> */}
          </TabsList>
        </Tabs>
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-1 rounded-md"
              >
                Login
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
