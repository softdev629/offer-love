import type { Route } from "./+types/offers";
import { Link } from "react-router";

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
        "View all credit card merchant offers, coupons and discounts from banks. anb Offers.",
    },
  ];
}

export async function loader() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_ENDPOINT}/offer/merchants`
    );
    const { data } = await response.json();
    return { merchants: data };
  } catch (error) {
    console.log("Error fetching merchants", error);
    return {
      merchants: [],
    };
  }
}

export default function Offers({ loaderData }: Route.ComponentProps) {
  const { merchants } = loaderData;

  return (
    <Container>
      <PageHeader
        title="Latest anb Offers"
        description="View all credit card merchant offers, coupons and discounts from banks. 
          anb Offers."
      />

      <div className="flex flex-col items-center justify-center mt-5 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 break-words w-full">
          {merchants.map(
            (item: { merchantSlug: string; merchantName: string }) => (
              <Link className="text-blue-600 underline" key={item.merchantSlug} to={`/offers/${item.merchantSlug}`}>
                {item.merchantName}
              </Link>
            )
          )}
        </div>

        <CTASection showBanner={true} />
      </div>
    </Container>
  );
}
