import type { Route } from "./+types/latest";
import Container from "~/components/layout/Container";
import PageHeader from "~/components/common/PageHeader";
import StatsBar from "~/components/common/StatsBar";
import LatestOffers from "~/components/offers/LatestOffers";
import OffersTable from "~/components/offers/OffersTable";
import type { Stats } from "~/utils/types";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Offer.love: Latest Credit Card Offers",
    },
    {
      name: "description",
      content:
        "View latest credit card merchant offers from banks. Amex Offers, Chase Offers, BoA Offers BankAmeriDeals, Citi Merchant Offers.",
    },
  ];
}

export async function loader() {
  try {
    const statsResponse = await fetch(
      `${import.meta.env.VITE_SERVER_ENDPOINT}/stats`
    );
    const stats: Stats = await statsResponse.json();

    const latestResponse = await fetch(
      `${import.meta.env.VITE_SERVER_ENDPOINT}/offer/latest-images`
    );
    const latestJson = await latestResponse.json();
    const latestOffers = latestJson.data;

    const listResponse = await fetch(
      `${import.meta.env.VITE_SERVER_ENDPOINT}/offer/latest`
    );
    const listJson = await listResponse.json();
    const listOffers = listJson.data;

    return { stats, latestOffers, listOffers };
  } catch (error) {
    console.log("Error fetching stats:", error);
    return {
      stats: {
        offers: 0,
        merchants: 0,
        lastOfferAdded: "",
      },
      latestOffers: [],
      listOffers: []
    };
  }
}

export default function Latest({ loaderData }: Route.ComponentProps) {
  const { stats, latestOffers, listOffers } = loaderData;

  return (
    <Container>
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <PageHeader 
          title="Offer.love - anb Today"
          showLogo={true}
        />
        <StatsBar {...stats} />
        <LatestOffers offers={latestOffers} />
      </div>

      <OffersTable offers={listOffers} />
    </Container>
  );
}
