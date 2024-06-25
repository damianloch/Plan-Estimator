import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Construction Cost Estimator</h1>
          <Button variant="secondary">Generate Report</Button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-[300px_1fr] gap-8 p-8">
        <div className="bg-card rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Upload Plans</h2>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="file">File</Label>
              <Input type="file" id="file" />
            </div>
            <Button>Analyze</Button>
          </div>
        </div>
        <div className="bg-card rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Cost Breakdown</h2>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Materials</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Unit Cost</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Aluminum Frames</TableCell>
                    <TableCell>391.5 sqft</TableCell>
                    <TableCell>$30/sqft</TableCell>
                    <TableCell>$11,745</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Triple Pane Glass</TableCell>
                    <TableCell>188 sqft</TableCell>
                    <TableCell>$75/sqft</TableCell>
                    <TableCell>$14,100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tempered and Mirror Glass</TableCell>
                    <TableCell>203.5 sqft</TableCell>
                    <TableCell>$85/sqft</TableCell>
                    <TableCell>$17,297.50</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Labor</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Trade</TableHead>
                    <TableHead>Hours</TableHead>
                    <TableHead>Hourly Rate</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Installation Labor</TableCell>
                    <TableCell>150 hours</TableCell>
                    <TableCell>$75/hour</TableCell>
                    <TableCell>$11,250</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Equipment</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Equipment Rental</TableCell>
                    <TableCell>$1,500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Safety Equipment and Temporary Shoring</TableCell>
                    <TableCell>$2,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Miscellaneous</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Caulking Materials</TableCell>
                    <TableCell>$1,200</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Window Sill Pans</TableCell>
                    <TableCell>$800</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tinted Window Film</TableCell>
                    <TableCell>$500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Compliance and Certification Costs</TableCell>
                    <TableCell>$1,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
