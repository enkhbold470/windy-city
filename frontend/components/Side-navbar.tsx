"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Crop Insights", path: "/dashboard" },
  { label: "Geo Location", path: "/maps" },
  { label: "Data Sources", path: "/sources" },
  { label: "About", path: "/about" },
];

export default function SidebarNav() {
  const router = useRouter();
  const [activePath, setActivePath] = useState("/");

  const handleMenuItemClick = (path: string) => {
    setActivePath(path);
    router.push(path);
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">WindyCity</h1>
            <SidebarTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle Sidebar">
                <Menu className="h-6 w-6" />
              </Button>
            </SidebarTrigger>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={activePath === item.path}
                  onClick={() => handleMenuItemClick(item.path)}
                >
                  <button type="button">{item.label}</button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
