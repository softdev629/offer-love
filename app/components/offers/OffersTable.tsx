interface Offer {
  _id: string;
  merchantLogo: string;
  merchantName: string;
  merchantSlug: string;
  offer: string;
  offerSlug: string;
  description: string;
  insertedAt: string;
  bank: string;
  value?: number;
  start_date: string | null;
  end_date: string | null;
  link: string | null;
}

interface OffersTableProps {
  offers: Offer[];
  type?: 'exp' | 'add';
}

export default function OffersTable({ offers, type = 'add' }: OffersTableProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <div className="min-w-full divide-y divide-gray-200">
          {/* Headers */}
          <div className="bg-gray-50">
            <div className="grid grid-cols-12 gap-4 px-6 py-3">
              <div className="col-span-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Merchant
              </div>
              <div className="col-span-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Offer
              </div>
              <div className="col-span-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </div>
              <div className="col-span-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                {type === 'exp' ? 'Expires' : 'Added'}
              </div>
              <div className="col-span-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bank
              </div>
            </div>
          </div>

          {/* Offer Rows */}
          <div className="bg-white divide-y divide-gray-200">
            {offers.map((offer) => (
              <div key={offer._id} className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50">
                <div className="col-span-1 flex items-center">
                  <img 
                    src={offer.merchantLogo}
                    alt=""
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div className="col-span-2 text-sm text-gray-900">
                  {offer.offer}
                </div>
                <div className="col-span-6 text-sm text-gray-500">
                  {offer.description}
                </div>
                <div className="col-span-2 text-sm text-gray-500">
                  {type === 'exp' 
                    ? (offer.end_date ? new Date(offer.end_date).toLocaleDateString() : 'No expiry')
                    : new Date(offer.insertedAt).toLocaleDateString()
                  }
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
  );
} 