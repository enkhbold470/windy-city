import { Cover } from "@/components/ui/cover";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className=" h-screen  border">
      <h1 className="my-10  text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Find plant crop insight <br /> at <Cover>warp speed</Cover>
      </h1>
      <div className="text-center p-10 my-10">
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
