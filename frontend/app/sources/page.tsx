"use client";
import { useState, useEffect } from "react";
import { Search, ExternalLink, Download, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ResearchPaperSuggestions from "@/components/research-paper-suggestions";
// Function to generate random data sources
const generateRandomDataSources = () => {
  const names = [
    "World Bank Commodities Data",
    "FAO Crop Production Statistics",
    "USDA Agricultural Research Service",
    "PubMed Central",
    "EPA Environmental Datasets",
    "NASA Earth Observations",
    "OECD Economic Outlook",
    "UNESCO Education Statistics",
    "WHO Health Data",
    "IMF Financial Data",
  ];

  // Shuffle the names array
  const shuffledNames = names.sort(() => Math.random() - 0.5);

  const types = [
    "Economic",
    "Agricultural",
    "Scientific",
    "Environmental",
    "Health",
    "Educational",
  ];

  return shuffledNames.map((name, index) => ({
    id: index + 1,
    name,
    type: types[Math.floor(Math.random() * types.length)],
    url: `https://datasetsearch.research.google.com/search?src=0&query=${name
      .replace(/\s+/g, "-")
      .toLowerCase()}`,
    lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
      .toISOString()
      .split("T")[0],
  }));
};

export default function DataSources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [dataSources, setDataSources] = useState(generateRandomDataSources());

  useEffect(() => {
    setDataSources(generateRandomDataSources());
  }, []);

  const filteredSources = dataSources.filter(
    (source) =>
      source.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTypes.length === 0 || selectedTypes.includes(source.type))
  );

  const types = Array.from(new Set(dataSources.map((source) => source.type)));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Data Sources</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Our Data</CardTitle>
          <CardDescription>
            The GALY Crop Selection AI utilizes a diverse range of high-quality,
            up-to-date data sources to provide accurate and comprehensive
            insights.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Our AI model integrates economic indicators, agricultural
            statistics, scientific research, and environmental data to evaluate
            crops for plant cell agriculture. We regularly update our datasets
            to ensure the most current information is used in our analysis.
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center mb-6">
        <div className="relative w-1/3">
          <Input
            type="search"
            placeholder="Search data sources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter by Type
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Data Types</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {types.map((type) => (
                <DropdownMenuCheckboxItem
                  key={type}
                  checked={selectedTypes.includes(type)}
                  onCheckedChange={(checked) => {
                    setSelectedTypes(
                      checked
                        ? [...selectedTypes, type]
                        : selectedTypes.filter((t) => t !== type)
                    );
                  }}
                >
                  {type}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button>
            <Download className="mr-2 h-4 w-4" /> Export List
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data Source List</CardTitle>
          <CardDescription>
            Comprehensive list of data sources used in our AI model
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSources.map((source) => (
                <TableRow key={source.id}>
                  <TableCell className="font-medium">{source.name}</TableCell>
                  <TableCell>{source.type}</TableCell>
                  <TableCell>{source.lastUpdated}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Visit
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="mt-8">
        <ResearchPaperSuggestions />
      </div>
    </div>
  );
}
