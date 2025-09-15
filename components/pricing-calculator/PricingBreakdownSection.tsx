import { Card } from "@/components/ui/card";
import { Doughnut } from "react-chartjs-2";

interface PricingBreakdownProps {
  totalMaterialCost: number;
  totalPackagingCost: number;
  totalLaborCost: number;
  totalOtherCosts: number;
  totalCost: number;
  sellingPrice: number;
  profit: number;
}

export default function PricingBreakdownSection({
  totalMaterialCost,
  totalPackagingCost,
  totalLaborCost,
  totalOtherCosts,
  totalCost,
  sellingPrice,
  profit,
}: PricingBreakdownProps) {
  // Chart data with purple gradient palette
  const chartData = {
    labels: [
      "Materials",
      "Packaging",
      "Labor",
      "Other Costs",
      "Profit",
    ],
    datasets: [
      {
        data: [
          totalMaterialCost,
          totalPackagingCost,
          totalLaborCost,
          totalOtherCosts,
          profit,
        ],
        backgroundColor: [
          "#8B5CF6", // Purple-500 - Materials
          "#A78BFA", // Purple-400 - Packaging
          "#C4B5FD", // Purple-300 - Labor
          "#DDD6FE", // Purple-200 - Other Costs
          "#7C3AED", // Purple-600 - Profit (darker for emphasis)
        ],
        borderColor: [
          "#7C3AED", // Purple-600
          "#8B5CF6", // Purple-500
          "#A78BFA", // Purple-400
          "#C4B5FD", // Purple-300
          "#6D28D9", // Purple-700
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">Cost Breakdown</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-2">
          <p className="flex justify-between">
            <span>Materials:</span>
            <span className="font-medium">${totalMaterialCost.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Packaging:</span>
            <span className="font-medium">${totalPackagingCost.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Labor:</span>
            <span className="font-medium">${totalLaborCost.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Other Costs:</span>
            <span className="font-medium">${totalOtherCosts.toFixed(2)}</span>
          </p>
          <div className="border-t pt-2 mt-4">
            <p className="flex justify-between text-lg font-bold">
              <span>Total Cost:</span>
              <span>${totalCost.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-lg font-bold text-blue-600">
              <span>Selling Price:</span>
              <span>${sellingPrice.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-lg font-bold text-green-600">
              <span>Profit:</span>
              <span>${profit.toFixed(2)}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <Doughnut data={chartData} />
          </div>
        </div>
      </div>
    </Card>
  );
}
