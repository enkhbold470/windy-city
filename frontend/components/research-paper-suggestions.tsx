"use client";

import { ExternalLink, Search, SortAsc, SortDesc } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// This would typically come from an API call
import { mockPapers } from "@/lib/data";

export default function ResearchPaperSuggestions() {
  const [papers, setPapers] = useState(mockPapers);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    // Randomize the relevance scores initially
    const randomizedPapers = [...mockPapers].map((paper) => ({
      ...paper,
      score: Math.random(),
    }));
    setPapers(randomizedPapers);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const filtered = mockPapers.filter(
      (paper) =>
        paper.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        paper.authors.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setPapers(filtered);
  };

  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const sorted = [...papers].sort((a, b) =>
      newOrder === "asc" ? a.score - b.score : b.score - a.score
    );
    setPapers(sorted);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Suggested Research Papers</CardTitle>
        <CardDescription>
          Explore scientific literature related to crop selection and cell
          culture techniques
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search papers..."
              className="pl-8"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <Button variant="outline" onClick={handleSort}>
            Sort by Score
            {sortOrder === "asc" ? (
              <SortAsc className="ml-2 h-4 w-4" />
            ) : (
              <SortDesc className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Authors</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Journal</TableHead>
              <TableHead>Relevance Score</TableHead>
              <TableHead className="text-right">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {papers.map((paper) => (
              <TableRow key={paper.id}>
                <TableCell className="font-medium">{paper.title}</TableCell>
                <TableCell>{paper.authors}</TableCell>
                <TableCell>{paper.year}</TableCell>
                <TableCell>{paper.journal}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      paper.score > 0.9
                        ? "default"
                        : paper.score > 0.8
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {paper.score.toFixed(2)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    View <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Relevance scores are calculated based on the paper&apos;s content and
          its applicability to GALY&apos;s crop selection criteria.
        </p>
      </CardFooter>
    </Card>
  );
}
