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
import { topCrops } from "@/lib/data";

export default function Candidates() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Crop Candidates</CardTitle>
        <CardDescription>Top crops ranked by the AI model</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Crop Name</TableHead>
              <TableHead>Feasibility Score</TableHead>
              <TableHead>Market Value</TableHead>
              <TableHead>ESG Impact</TableHead>
              <TableHead>Technical Complexity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topCrops.map((crop) => (
              <TableRow key={crop.name}>
                <TableCell className="font-medium">{crop.name}</TableCell>
                <TableCell>{crop.score.toFixed(2)}</TableCell>
                <TableCell>{crop.marketValue}</TableCell>
                <TableCell>{crop.esgImpact}</TableCell>
                <TableCell>{crop.technicalComplexity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
