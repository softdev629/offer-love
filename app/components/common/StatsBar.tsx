import { formatDateTime } from "~/utils/dateHelper";

interface StatsBarProps {
  offers: number;
  merchants: number;
  lastOfferAdded?: string;
  showAllButton?: boolean;
}

export default function StatsBar({ offers, merchants, lastOfferAdded, showAllButton }: StatsBarProps) {
  return (
    <div className="p-4 text-sm text-center text-gray-600">
      <span className="space-x-4">
        <b>Offers:</b> {offers}
        <b>Merchants:</b> {merchants}
        {lastOfferAdded && (
          <><b>Latest Offer Added:</b> {formatDateTime(lastOfferAdded)}</>
        )}
      </span>
      {showAllButton && (
        <button className="ml-2 px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Show All My Offers
        </button>
      )}
    </div>
  );
}