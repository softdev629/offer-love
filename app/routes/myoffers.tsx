import type { Route } from "./+types/myoffers";
import Container from "~/components/layout/Container";
import PageHeader from "~/components/common/PageHeader";
import StatsBar from "~/components/common/StatsBar";
import SearchInput from "~/components/common/SearchInput";
import Alert from "~/components/common/Alert";
import CTASection from "~/components/common/CTASection";
import ExtensionNotice from "~/components/common/ExtensionNotice";
import MobileLoginCTA from "~/components/common/MobileLoginCTA";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Offer.love: My Offers",
    },
  ];
}

export default function MyOffers() {
  const stats = {
    offers: 316,
    merchants: 314
  };

  return (
    <Container>
      <Alert type="success" className="mb-6" />

      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <PageHeader 
          title="Offer.love - Love Offers"
          showLogo={true}
        />

        <div className="divide-y divide-gray-200">
          <ExtensionNotice />
          <SearchInput placeholder="Search Your Added Offers 🔍" defaultValue="" />
          <StatsBar {...stats} showAllButton={true} />
        </div>
      </div>

      <MobileLoginCTA />
      
      <div id="data-table">
        {/* Table content would go here */}
      </div>

      <CTASection showBanner={false} />
    </Container>
  );
}
