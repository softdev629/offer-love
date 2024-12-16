import type { Route } from "./+types/myoffers";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Offer.love: My Offers",
    },
  ];
}

export default function MyOffers() {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Success Alert */}
      <div className="mb-6 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 hidden">
        {/* Status message would go here */}
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <img src="/images/favicon.png" alt="Logo" className="w-5 h-5" />
            <h1 className="text-lg font-medium text-gray-900">
              Offer.love - Love Offers
            </h1>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {/* Extension Notice */}
          <div className="p-4 hidden" id="notification-missing-extension">
            <p className="text-gray-600">
              Install our{" "}
              <a
                href="https://chromewebstore.google.com/detail/amex-boa-chase-citi-offer/onoiombdhkjneegnlbgodhopdnadfknm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Chrome Extension
              </a>{" "}
              to save your offers, then come back to this page on <b>desktop</b>{" "}
              to search and sync your offers to the cloud. Once synced, you can
              then search on-the-go with your cell phone.
            </p>
          </div>

          {/* Search Input */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Search Your Added Offers 🔍"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            />
          </div>

          {/* Stats */}
          <div className="p-4 text-sm text-center">
            <span>
              <b>Offers:</b> 3309 <b>Merchants:</b> 2418{" "}
            </span>
            <button className="ml-2 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Show All My Offers
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Login CTA */}
      <div className="text-center font-bold mb-6">
        <p className="mb-2">Using your cell phone?</p>
        <a
          href="/account"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Login to search your synced offers
        </a>
      </div>

      {/* Data Table Section */}
      <div id="data-table">{/* Table content would go here */}</div>

      {/* CTA Section */}
      <div className="flex justify-center mt-12">
        <a
          href="https://app.offer.love/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://offer.love/images/cws-logo.png"
            alt="Chrome Web Store"
            className="w-[200px]"
          />
        </a>
      </div>
    </div>
  );
}
