import { ArrowRight, Leaf, Microscope, Sprout } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  {
    src: "/assets/Mohamed-Abdelmeguid-Headshot.webp",
    alt: "User avatar 4",
  },
  {
    src: "/assets/Nikita-Agrawal-Profile-Photo.jpg",
    alt: "User avatar 5",
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          About Windy City and Our Mission
        </h1>

        {/* Team Section */}
        <div className="mb-8 flex justify-center items-center">
          <div className="flex items-center space-x-2">
            {userAvatars.map((avatar, index) => (
              <Image
                key={index}
                src={avatar.src}
                alt={avatar.alt}
                width={100}
                height={100}
                className="rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              At Windy City, we envision a world where agriculture is
              sustainable, efficient, and capable of meeting the growing global
              demand for food and materials. We are pioneering the field of
              plant cell agriculture to make this vision a reality.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Leaf className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Sustainability</CardTitle>
            </CardHeader>
            <CardContent>
              Reducing environmental impact through innovative farming
              techniques.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Microscope className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              Leveraging cutting-edge biotechnology to revolutionize crop
              production.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Sprout className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Growth</CardTitle>
            </CardHeader>
            <CardContent>
              Scaling our solutions to meet global agricultural challenges.
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold mb-4">
          The Hackathon Project: Crop Selection AI
        </h2>
        <p className="text-lg mb-6">
          Our Crop Selection AI is a groundbreaking tool developed during an
          intensive hackathon. It aims to revolutionize how we evaluate and
          select crops for plant cell agriculture, considering technical,
          market, ESG, and regulatory factors.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Features of Our AI</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Advanced machine learning algorithms for crop evaluation</li>
              <li>Comprehensive analysis of technical feasibility</li>
              <li>Market demand and potential value assessment</li>
              <li>
                Environmental, Social, and Governance (ESG) impact consideration
              </li>
              <li>Regulatory landscape analysis for different regions</li>
            </ul>
          </CardContent>
        </Card>

        <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
        <p className="text-lg mb-6">
          The Crop Selection AI was developed by a diverse team of experts in
          biotechnology, data science, agriculture, and software engineering.
          Our collaborative effort during the hackathon brought together a wide
          range of skills and perspectives to create this innovative tool.
        </p>

        <div className="text-center mb-12">
          <Button size="lg">
            Learn More About Our Technology <ArrowRight className="ml-2" />
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Join Us in Shaping the Future of Agriculture</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We are always looking for passionate individuals to join our
              mission. Whether you are a scientist, engineer, or simply
              enthusiastic about sustainable agriculture, there might be a place
              for you at Windy City.
            </p>
            <Button variant="outline">View Career Opportunities</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
