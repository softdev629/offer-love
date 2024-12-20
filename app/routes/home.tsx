import type { Route } from "./+types/home";
import Container from "~/components/layout/Container";
import PageHeader from "~/components/common/PageHeader";
import StatsBar from "~/components/common/StatsBar";
import SearchInput from "~/components/common/SearchInput";
import LatestOffers from "~/components/offers/LatestOffers";
import CTASection from "~/components/common/CTASection";
import MobileLoginCTA from "~/components/common/MobileLoginCTA";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import OffersTable from "~/components/offers/OffersTable";

interface Stats {
  offers: number;
  merchants: number;
  lastOfferAdded: string;
}

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Offer.love: Collect all your anb Offers with a single click",
    },
    {
      name: "description",
      content:
        "Collect all your anb Offers with a single click, and receive notifications when you visit websites that are offer eligible. Oh, yes, we support grocery stores like Safeway and HEB too!",
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

    return { stats, latestOffers };
  } catch (error) {
    console.log("Error fetching stats:", error);
    return {
      stats: {
        offers: 0,
        merchants: 0,
        lastOfferAdded: "",
      },
      latestOffers: [],
    };
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { stats, latestOffers } = loaderData;
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      fetch(
        `${import.meta.env.VITE_SERVER_ENDPOINT}/offer/search?q=${searchQuery}`
      )
        .then((response) => response.json())
        .then(({ data }) => setSearchResults(data))
        .catch((error) => console.error("Error searching offers:", error));
    }
  }, [searchParams]);

  console.log(searchResults);

  return (
    <Container>
      <PageHeader title="Offer.love - Search any anb Offers" showLogo={true} />

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <SearchInput
          placeholder="Search Available Offers 🔍"
          defaultValue={searchParams.get("search") || ""}
        />
        <StatsBar {...stats} />
        <LatestOffers offers={latestOffers} />
      </div>

      {searchResults && searchResults.length > 0 ? (
        <OffersTable offers={searchResults} />
      ) : (
        <>
          {" "}
          <CTASection showBanner={false} />
          <MobileLoginCTA />
        </>
      )}
    </Container>
  );
}
