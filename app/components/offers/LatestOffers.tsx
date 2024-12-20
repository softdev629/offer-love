import { Link } from "react-router";

interface LatestOffer {
  merchantSlug: string;
  merchantLogo: string;
  offer: string;
}

interface LatestOffersProps {
  offers: LatestOffer[];
}

export default function LatestOffers({ offers }: LatestOffersProps) {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-center gap-2 text-sm">
        <b>Latest Offers: </b>
        <div className="flex overflow-x-auto whitespace-nowrap gap-2">
          {offers.map((offer, index) => (
            <Link
              key={index}
              to={`/?search=${offer.merchantSlug}`}
              className="hover:opacity-75 transition-opacity flex-shrink-0"
            >
              <img
                src={offer.merchantLogo}
                alt={offer.offer}
                className="w-10 h-10 object-contain rounded"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}