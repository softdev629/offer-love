import type { Route } from "./+types/latest";
import Container from "~/components/layout/Container";
import PageHeader from "~/components/common/PageHeader";
import StatsBar from "~/components/common/StatsBar";
import LatestOffers from "~/components/offers/LatestOffers";
import OffersTable from "~/components/offers/OffersTable";

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

export default function Latest() {
  const stats = {
    offers: 3309,
    merchants: 2418,
    lastOfferAdded: "12/15/2024, 11:39:51 PM"
  };

  const offers = [
    {
      merchant: {
        img: "https://media.rewardsnetwork.com/t_legacy_logo/v1730490097/185276/logo.jpg",
      },
      title: "6% back",
      description:
        "Earn a statement credit when you dine and pay with your linked card at participating local restaurants. Awarded on qualifying dines up to the maximum limit of $2000. Valid at the following locations: 2102 Eastchester Rd, Bronx, NY, 10461. Offer may be displayed on multiple websites but is redeemable only once per qualifying transaction. If you link to the same offer on more than one program, your qualifying transaction will only be eligible for rewards or benefits associated with the offer through the most recently linked site. A linked offer that has not been redeemed will automatically expire 45 days. After such time the offer must be re-linked prior to your purchase. Offer may be displayed on multiple websites but is redeemable only once per qualifying transaction. A restaurant may be removed prior to the offer expiration date, if that happens and your qualified dine does not appear in your Account Center, after you have activated an offer, please contact Member Services at the number on the back of your card.	",
      added: "Dec 15, 2024, 11:38 PM",
      bank: "Citi",
    },
    // Add more offers...
  ];

  return (
    <Container>
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <PageHeader 
          title="Offer.love - anb Today"
          showLogo={true}
        />
        <StatsBar {...stats} />
        <LatestOffers offers={[]} />
      </div>

      <OffersTable offers={offers} />
    </Container>
  );
}
