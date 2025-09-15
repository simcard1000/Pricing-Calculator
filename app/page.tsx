import PricingCalculatorClient from "@/components/pricing-calculator/PricingCalculatorClient";

// Structured data for the pricing calculator tool
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pricing Calculator for Handmade Products",
  description:
    "A comprehensive pricing calculator designed specifically for handmade product creators and artisans. Calculate materials, labor, packaging, and marketplace fees to determine optimal pricing for your crafts.",
  url: "https://yarnnu.com/pricing-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Materials cost calculation",
    "Labor cost tracking",
    "Packaging and shipping costs",
    "Markup and discount calculations",
    "Profit margin analysis",
    "Visual cost breakdown chart",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Handmade product creators, artisans, craft business owners",
  },
  creator: {
    "@type": "Organization",
    name: "Yarnnu",
    url: "https://yarnnu.com",
  },
};

export default function PricingCalculatorPage() {
  return (
    <>
      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Main content with semantic HTML structure */}
      <article className="max-w-7xl mx-auto">
        {/* Hero section with clear value proposition */}
        <header className="text-center py-8 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pricing Calculator for Handmade Products
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Take the guesswork out of pricing your handmade products and spend
            more time making. Our simple calculator helps you account for
            materials, labor, and packaging costs to ensure you&apos;re pricing for profit.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Free to use
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              No registration required
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Real-time calculations
            </span>
          </div>
        </header>

        {/* Calculator tool */}
        <section aria-label="Pricing Calculator Tool">
          <PricingCalculatorClient />
        </section>

        {/* Additional information and tips */}
        <section className="px-4 py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Pricing Tips for Handmade Products
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Understanding Your Costs
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Track all material costs, including waste</li>
                  <li>• Calculate your time at a fair hourly rate</li>
                  <li>• Include packaging and shipping materials</li>
                  <li>• Factor in your desired profit margin</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Pricing Strategies
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Research competitor pricing in your niche</li>
                  <li>
                    • Consider your target market&apos;s price sensitivity
                  </li>
                  <li>• Factor in seasonal demand fluctuations</li>
                  <li>• Build in room for discounts and promotions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section for SEO */}
        <section className="px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I calculate my hourly rate for labor?
                </h3>
                <p className="text-gray-700">
                  Consider your skill level, experience, and local market rates.
                  Many artisans charge between $15-50 per hour depending on
                  their expertise and the complexity of their work.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What markup percentage should I use?
                </h3>
                <p className="text-gray-700">
                  Typical markups range from 20-100% depending on your market,
                  competition, and product uniqueness. Start with 50% and adjust
                  based on your research and testing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I account for packaging costs?
                </h3>
                <p className="text-gray-700">
                  Include all packaging materials like boxes, bubble wrap, tape, 
                  and labels. Don&apos;t forget to factor in the cost per unit 
                  based on how many items each package can hold.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
