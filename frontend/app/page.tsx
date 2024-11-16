"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image"; // Importing Image component

export default function Home() {
  // State for the category title and description
  const [categoryTitle, setCategoryTitle] = useState("Choose a Category");
  const [categoryDescription, setCategoryDescription] = useState(
    "Hover over one of the categories above to see more information about it here."
  );

  // Category titles and descriptions for each category
  const categoryTitles: { [key: string]: string } = {
    "Charts & Graphs": "Interactive Charts & Graphs",
    Insights: "Get Data Insights",
    "Advanced Analysis": "Advanced Data Modeling",
    Reports: "Create Detailed Reports",
  };

  const categoryDescriptions: { [key: string]: string } = {
    "Charts & Graphs":
      "Explore the world of visual data representation with customizable charts and graphs.",
    Insights:
      "Ask anything and get actionable insights from your data to make smarter decisions.",
    "Advanced Analysis":
      "Use predictive modeling to analyze and forecast your data with high accuracy.",
    Reports: "Generate reports, summaries, and more with ease and precision.",
  };

  // Handle hover to change title and description
  const handleMouseEnter = (categoryText: keyof typeof categoryTitles) => {
    setCategoryTitle(categoryTitles[categoryText]);
    setCategoryDescription(categoryDescriptions[categoryText]);
  };

  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tufts_University_wordmark.svg/382px-Tufts_University_wordmark.svg.png",
      alt: "Tufts University",
      link: "https://www.tufts.edu/",
    },
    {
      src: "https://www.deanza.edu/logo/images/DAC_Logo_Black.png",
      alt: "De Anza College",
      link: "https://www.deanza.edu/",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
      alt: "MIT",
      link: "https://www.mit.edu/",
    },
    {
      src: "https://digitalpeople.dev/logo.png",
      alt: "Digital People",
      link: "https://digitalpeople.dev/",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/64e671ae65d4e6410e54f932/8c1cb075-9269-47d5-9573-9c2f8ca1c00b/hack_logo.png?format=1500w",
      alt: "Hack Logo",
      link: "#",
    },
    {
      src: "https://d2kq0urxkarztv.cloudfront.net/63e4cddd714d710019b39e16/4143904/image-b84a3173-43c7-47e0-b040-33df0a499522.png?w=465&e=webp&nll=true",
      alt: "Cloudfront Logo",
      link: "#",
    },
  ];

  const userAvatars = [
    {
      src: "https://media.licdn.com/dms/image/v2/D5603AQG7_3TKVKyh9Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726541283569?e=1736985600&v=beta&t=NPJ33Tpo-saWeyZzECE94-hmtGPdP90L2v7eRk3N2ls",
      alt: "User avatar 1",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5603AQEk7Wkcz7o42w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730736646752?e=1736985600&v=beta&t=bq-1SbZBzZ-_sKgAVrOcVyxQ4RaroLUJIlgh1w5vQtg",
      alt: "User avatar 2",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5603AQHtKpb9OcC7JQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705957050541?e=1736985600&v=beta&t=1QuI_AafLUijxOrNt945aDA9vTyWGXO-oRuYpa8p6bg",
      alt: "User avatar 3",
    },
  ];

  const scrollVariants = {
    animate: {
      x: ["0%", "-100%"], // Smooth scrolling from start to end
      transition: {
        repeat: Infinity, // Loop forever
        duration: 15, // Adjust duration for speed
        ease: "linear", // Smooth movement
      },
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <main className="w-full max-w-7xl mx-auto px-6 lg:px-20">
        {/* Hero Section */}
        <section className="text-center py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            We Make Crop Data Processing A Breeze.
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Growing crops is tough. Making sense of the data shouldn’t be. With
            our interactive flowchart, you can track, compare, and act—boosting
            yields and solving problems faster.
          </p>
          <div className="flex justify-center">
            <a href="/dashboard">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-8 py-4 text-lg">
                Try it Out!
              </Button>
            </a>
          </div>
          <div className="mt-12 flex justify-center items-center text-gray-600">
            <div className="flex items-center space-x-2">
              {userAvatars.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar.src}
                  alt={avatar.alt}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="ml-4 text-sm">
              Founded in Boston, MA at MIT Energy Hackathon
            </p>
          </div>
        </section>

        {/* Scrolling Logos Section */}
        <section className="py-8 w-1/2 h-3/4 mx-auto">
          <div className="bg-background rounded-2xl overflow-hidden relative">
            <motion.div
              className="flex gap-8" // 12px gap between the logos
              variants={scrollVariants}
              animate="animate"
              style={{
                width: `${logos.length * 100 + (logos.length - 1) * 12}px`, // Total width of logos + gaps
              }}
            >
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <a
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-32 h-16"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={128}
                      height={32}
                      className="w-auto h-8 dark:brightness-200 grayscale transition-opacity duration-300"
                    />
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 (Charts & Graphs) */}
            <div
              className="group relative bg-gray-50 rounded-lg p-6 text-center hover:cursor-pointer"
              onMouseEnter={() => handleMouseEnter("Charts & Graphs")}
            >
              <div className="flex justify-center items-center bg-blue-100 rounded-full w-12 h-12 mb-4">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/858/858154.png"
                  alt="Charts & Graphs"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Charts & Graphs
              </h3>
              <p className="text-sm text-gray-600">
                Create sleek looking data visualizations.
              </p>
            </div>

            {/* Category 2 (Insights) */}
            <div
              className="group relative bg-gray-50 rounded-lg p-6 text-center hover:cursor-pointer"
              onMouseEnter={() => handleMouseEnter("Insights")}
            >
              <div className="flex justify-center items-center bg-blue-100 rounded-full w-12 h-12 mb-4">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/490px-Magnifying_glass_icon.svg.png"
                  alt="Insights"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Insights
              </h3>
              <p className="text-sm text-gray-600">
                Ask complex questions and receive actionable insights.
              </p>
            </div>

            {/* Category 3 (Advanced Analysis) */}
            <div
              className="group relative bg-gray-50 rounded-lg p-6 text-center hover:cursor-pointer"
              onMouseEnter={() => handleMouseEnter("Advanced Analysis")}
            >
              <div className="flex justify-center items-center bg-blue-100 rounded-full w-12 h-12 mb-4">
                <Image
                  src="https://static-00.iconduck.com/assets.00/pie-chart-icon-512x512-giqhu09w.png"
                  alt="Advanced Analysis"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Advanced Analysis
              </h3>
              <p className="text-sm text-gray-600">
                Perform predictive modeling and advanced data forecasting.
              </p>
            </div>

            {/* Category 4 (Reports) */}
            <div
              className="group relative bg-gray-50 rounded-lg p-6 text-center hover:cursor-pointer"
              onMouseEnter={() => handleMouseEnter("Reports")}
            >
              <div className="flex justify-center items-center bg-blue-100 rounded-full w-12 h-12 mb-4">
                <Image
                  src="https://cdn-icons-png.freepik.com/256/1321/1321938.png?semt=ais_hybrid"
                  alt="Reports"
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Reports
              </h3>
              <p className="text-sm text-gray-600">
                Generate polished reports and summaries effortlessly.
              </p>
            </div>
          </div>

          {/* Information Box below */}
          <div className="mt-8 w-full bg-white p-8 border-t-4 border-blue-600 rounded-lg transition-all ease-in-out duration-500">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-3xl font-bold mb-4">{categoryTitle}</h2>
              <p className="text-lg text-gray-500">{categoryDescription}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
