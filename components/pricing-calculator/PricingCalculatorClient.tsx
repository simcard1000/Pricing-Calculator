"use client";

import { useState } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import MaterialsSection from "@/components/pricing-calculator/MaterialsSection";
import LaborSection from "@/components/pricing-calculator/LaborSection";
import { LaborCostItem } from "@/components/pricing-calculator/LaborSection";
import PackagingSection from "@/components/pricing-calculator/PackagingSection";
import PricingOverviewSection from "@/components/pricing-calculator/PricingOverviewSection";
import PricingBreakdownSection from "@/components/pricing-calculator/PricingBreakdownSection";

Chart.register(ArcElement, Tooltip, Legend);

export default function PricingCalculatorClient() {
  const [materials, setMaterials] = useState([
    { name: "", cost: "", size: "", quantity: "", total: 0 },
  ]);
  const [packaging, setPackaging] = useState([
    { description: "", cost: "", size: "", quantity: "", total: 0 },
  ]);
  const [labor, setLabor] = useState<LaborCostItem[]>([
    { description: "", hourlyWage: "", time: "", total: 0 },
  ]);
  const [otherCosts] = useState([
    { description: "", total: "" },
  ]);

  // State to track total costs from each section (including misc costs)
  const [totalMaterialCost, setTotalMaterialCost] = useState(0);
  const [totalPackagingCost, setTotalPackagingCost] = useState(0);
  const [totalLaborCost, setTotalLaborCost] = useState(0);

  const [discount, setDiscount] = useState(0);
  const [markup, setMarkup] = useState(0);
  const [salesTax, setSalesTax] = useState(0);

  // Calculate other costs
  const totalOtherCosts = otherCosts.reduce(
    (acc, item) => acc + parseFloat(item.total || "0"),
    0
  );

  // Calculate total cost before markup
  const totalCost =
    totalMaterialCost +
    totalPackagingCost +
    totalLaborCost +
    totalOtherCosts;

  // Calculate selling price from costs + markup
  const sellingPrice =
    totalCost *
    (1 + markup / 100) *
    (1 - discount / 100) *
    (1 + salesTax / 100);

  // Calculate profit
  const profit = sellingPrice - totalCost;


  return (
    <div className="p-4 space-y-6">
      <MaterialsSection 
        materials={materials} 
        setMaterials={setMaterials} 
        onTotalChange={setTotalMaterialCost}
      />

      <LaborSection 
        labor={labor} 
        setLabor={setLabor} 
        onTotalChange={setTotalLaborCost}
      />

      <PackagingSection 
        packaging={packaging} 
        setPackaging={setPackaging} 
        onTotalChange={setTotalPackagingCost}
      />

      <PricingOverviewSection
        markup={markup}
        setMarkup={setMarkup}
        discount={discount}
        setDiscount={setDiscount}
        salesTax={salesTax}
        setSalesTax={setSalesTax}
      />

      <PricingBreakdownSection
        totalMaterialCost={totalMaterialCost}
        totalPackagingCost={totalPackagingCost}
        totalLaborCost={totalLaborCost}
        totalOtherCosts={totalOtherCosts}
        totalCost={totalCost}
        sellingPrice={sellingPrice}
        profit={profit}
      />
    </div>
  );
}
