import type { Route } from "./+types/offers";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <h1 className="text-3xl font-semibold mb-3">
        Latest Amex / Chase / BoA (Bank of America) / Citi Offers
      </h1>

      <div className="mb-3 text-gray-600">
        View all credit card merchant offers, coupons and discounts from banks.
        Amex Offers, Chase Offers, BoA Offers BankAmeriDeals, Citi Merchant
        Offers.
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center mt-5 mb-5">
        <div className="mb-4 max-w-lg text-center text-gray-600">
          Install our chrome extension to collect all your Amex / Chase / BoA
          (Bank of America) / Citi Offers with a single click, and receive
          notifications when you visit websites that are offer eligible. Oh,
          yes, we support grocery stores like Safeway and HEB too!
        </div>

        {/* Chrome Web Store Logo */}
        <a
          href="https://app.offer.love/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-5 hover:opacity-80 transition-opacity"
        >
          <img
            src="https://offer.love/images/cws-logo.png"
            alt="Chrome Web Store"
            className="w-[200px]"
          />
        </a>

        {/* Banner Image */}
        <a
          href="https://app.offer.love/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="/images/homepage-banner.png"
            alt="Homepage Banner"
            className="w-full max-w-[720px] mt-5"
          />
        </a>
      </div>
    </div>
  );
}
