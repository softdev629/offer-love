import type { Route } from "../offers/+types/byMerchant";
import Container from "~/components/layout/Container";
import PageHeader from "~/components/common/PageHeader";
import StatsBar from "~/components/common/StatsBar";
import LatestOffers from "~/components/offers/LatestOffers";
import OffersTable from "~/components/offers/OffersTable";
import type { Stats } from "~/utils/types";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Coupons, Deals, anb Offers",
    },
    {
      name: "description",
      content:
        "View all credit card merchant offers, deals, coupons, and discounts from banks. anb Offers Cashback Deals.",
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_ENDPOINT}/offer/${params.merchantSlug}`
    );
    const { data } = await response.json();

    return { offers: data };
  } catch (error) {
    console.log("Error fetching offers:", error);
    return {
      offers: [],
    };
  }
}

export default function ByMerchant({ loaderData }: Route.ComponentProps) {
  const { offers } = loaderData;

  return (
    <Container>
      <h1 className="mb-3 text-3xl font-semibold">
        All publicly available{" "}
        {offers?.length > 0 ? offers[0].merchantName : ""} Coupons, Deals, anb
        Offers
      </h1>
      <div className="mb-3">
        View all credit card merchant offers, deals, coupons, and discounts for
        {offers?.length > 0 ? offers[0].merchantName : ""} from banks. anb Offers Cashback Deals.
      </div>
      <OffersTable offers={offers} />
    </Container>
  );
}
