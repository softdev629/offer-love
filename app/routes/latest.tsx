import type { Route } from "./+types/latest";

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
  const latestOffers = [
    {
      href: "?search=calvinklein",
      img: "https://chaseoffers.chase.com/offerimages/nonannotatedLogo/1000071374.jpg",
      alt: "5% cash back Get up to $12 back",
    },
    {
      href: "?search=blueland",
      img: "https://cashbackdeals.usbank.com/offerimages/1000071726",
      alt: "Earn $10 cash back",
    },
    {
      href: "?search=simplisafe",
      img: "https://cashbackdeals.usbank.com/offerimages/1000071668",
      alt: "Earn $50 cash back",
    },
    {
      href: "?search=ulta",
      img: "https://publisher-cdn-us.cardlytics.com/preTrim-w110-h50-jpeg/images/non-annotated-logo/ebccf520ac2942e68615eeb53dcca3b1.png",
      alt: "Earn 10% back on purchases",
    },
    // Add more offers as needed
  ];

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Card */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <img src="/images/favicon.png" alt="Logo" className="w-5 h-5" />
            <h1 className="text-lg font-medium text-gray-900">
              Offer.love - Latest Amex / Chase / BoA / Citi Offers Today
            </h1>
          </div>
        </div>

        {/* Stats */}
        <div className="p-3 border-b border-gray-200 text-center text-sm">
          <span>
            <b>Offers:</b> 3309 <b>Merchants:</b> 2418{" "}
            <b>Latest Offer Added:</b> 12/15/2024, 11:39:51 PM
          </span>
        </div>

        {/* Latest Offers */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-center gap-2 text-sm">
            <b>Latest Offers: </b>
            <div className="flex overflow-x-auto whitespace-nowrap gap-2">
              {latestOffers.map((offer, index) => (
                <a
                  key={index}
                  href={offer.href}
                  className="hover:opacity-75 transition-opacity flex-shrink-0"
                >
                  <img
                    src={offer.img}
                    alt={offer.alt}
                    title={offer.alt}
                    className="w-10 h-10 object-contain rounded"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Offers List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-full divide-y divide-gray-200">
            {/* Headers */}
            <div className="bg-gray-50">
              <div className="grid grid-cols-12 gap-4 px-6 py-3">
                <div className="col-span-1 text-xs font-medium text-gray-500 uppercase tracking-wider">Merchant</div>
                <div className="col-span-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Title</div>
                <div className="col-span-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Description</div>
                <div className="col-span-2 text-xs font-medium text-gray-500 uppercase tracking-wider">Added</div>
                <div className="col-span-1 text-xs font-medium text-gray-500 uppercase tracking-wider">Bank</div>
              </div>
            </div>

            {/* Offer Rows */}
            <div className="bg-white divide-y divide-gray-200">
              {offers.map((offer, index) => (
                <div key={index} className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50">
                  <div className="col-span-1">
                    <img
                      src={offer.merchant.img}
                      alt=""
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <div className="col-span-2 text-sm text-gray-900">
                    {offer.title}
                  </div>
                  <div className="col-span-6 text-sm text-gray-500">
                    {offer.description}
                  </div>
                  <div className="col-span-2 text-sm text-gray-500">
                    {offer.added}
                  </div>
                  <div className="col-span-1 text-sm text-gray-500">
                    {offer.bank}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
