import type { Route } from "./+types/offers";
import Container from "~/components/layout/Container";
import PageHeader from "~/components/common/PageHeader";
import CTASection from "~/components/common/CTASection";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "View All Coupons, Deals, Credit Card and Merchant Offers",
    },
    {
      name: "description",
      content:
        "View all credit card merchant offers, coupons and discounts from banks. Amex Offers, Chase Offers, BoA Offers BankAmeriDeals, Citi Merchant Offers, Paypal Offers, US Bank Cashback Deals.",
    },
  ];
}

export default function Offers() {
  return (
    <Container>
      <PageHeader 
        title="Latest Amex / Chase / BoA (Bank of America) / Citi Offers"
        description="View all credit card merchant offers, coupons and discounts from banks. 
          Amex Offers, Chase Offers, BoA Offers BankAmeriDeals, Citi Merchant Offers."
      />

      <div className="flex flex-col items-center justify-center mt-5 mb-5">
        <div className="mb-4 max-w-lg text-center text-gray-600">
          Install our chrome extension to collect all your Amex / Chase / BoA 
          (Bank of America) / Citi Offers with a single click, and receive 
          notifications when you visit websites that are offer eligible. Oh, yes, 
          we support grocery stores like Safeway and HEB too!
        </div>

        <CTASection showBanner={true} />
      </div>
    </Container>
  );
}
