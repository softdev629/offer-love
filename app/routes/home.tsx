import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Offer.love: Collect all your Amex / Chase / BoA (Bank of America) / Citi Offers with a single click",
    },
    {
      name: "description",
      content:
        "Collect all your Amex / Chase / BoA (Bank of America) / Citi Offers with a single click, and receive notifications when you visit websites that are offer eligible. Oh, yes, we support grocery stores like Safeway and HEB too!",
    },
  ];
}

export default function Home() {
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Status Alert - if needed */}
      <div className="bg-green-100 text-green-700 p-4 rounded mb-4 hidden"></div>

      {/* Search Card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <img
              src="/images/favicon.png"
              alt="Offer.love"
              className="w-5 h-5 mr-2"
            />
            <h1 className="text-lg font-medium">
              Offer.love - Search any Amex / Chase / BoA / Citi Offers
            </h1>
          </div>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            placeholder="Search Available Offers 🔍"
          />
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

      {/* CTA Section */}
      <div className="mt-12 flex flex-col items-center text-center">
        <p className="max-w-lg mb-6 text-gray-600">
          Install our chrome extension to collect all your Amex / Chase / BoA
          (Bank of America) / Citi Offers with a single click, and receive
          notifications when you visit websites that are offer eligible. Oh,
          yes, we support grocery stores like Safeway and HEB too!
        </p>
        <a
          href="https://app.offer.love/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-90 transition-opacity"
        >
          <img
            src="https://offer.love/images/cws-logo.png"
            alt="Chrome Web Store"
            className="w-48"
          />
        </a>
        <div className="mt-6 font-bold">
          <p className="text-gray-700">Using your cell phone?</p>
          <a
            href="/account"
            className="inline-block mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login to search your synced offers
          </a>
        </div>
      </div>
    </div>
  );
}
