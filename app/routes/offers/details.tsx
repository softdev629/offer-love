import Container from "~/components/layout/Container";
import type { Route } from "../offers/+types/details";
import { formatDate } from "~/utils/dateHelper";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "100 Thieves Offer: Earn 6% back on any purchase. | Offer.love",
    },
    {
      name: "description",
      content:
        "Earn 6% back on any purchase. at 100 Thieves. This offer is available through Citi Offers.",
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_ENDPOINT}/offer/${params.merchantSlug}/${
        params.offerSlug
      }/${params.dateSlug}`
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching stats:", error);
    return {
      merchantName: "",
      offer: "",
      bank: "",
      end_date: "",
      merchantLogo: "",
      description: "",
      insertedAt: "",
    };
  }
}

export default function Details({ loaderData }: Route.ComponentProps) {
  const {
    merchantName,
    offer,
    merchantLogo,
    bank,
    end_date,
    description,
    insertedAt,
  } = loaderData;
  return (
    <Container>
      <header className="text-center mb-8">
        <h1 className="text-2xl font-semibold mb-4">
          {merchantName} Offer: {offer}
        </h1>
        {merchantLogo && merchantLogo != "" ? (
          <img
            src={merchantLogo}
            alt={`${merchantName} Logo`}
            className="mx-auto my-4 w-[150px]"
          />
        ) : (
          <></>
        )}
  
        <p className="text-lg text-gray-600">
          {offer.replace(".", "")} at {merchantName}. This offer is available
          through {bank} Offers
          {end_date ? ` and expires on ${formatDate(end_date)}` : ""}.
        </p>
      </header>

      <section className="mb-4">
        <h2 className="text-xl font-semibold bg-gray-100 p-3 rounded-lg mb-4">
          Offer Details
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-12 gap-y-4">
          <dt className="sm:col-span-3 font-semibold">Merchant:</dt>
          <dd className="sm:col-span-9">{merchantName}</dd>

          <dt className="sm:col-span-3 font-semibold">Offer:</dt>
          <dd className="sm:col-span-9">{offer}</dd>

          <dt className="sm:col-span-3 font-semibold">Description:</dt>
          <dd className="sm:col-span-9">{description}</dd>

          <dt className="sm:col-span-3 font-semibold">Expiration Date:</dt>
          <dd className="sm:col-span-9">
            {end_date ? formatDate(end_date) : "No expiry"}
          </dd>

          <dt className="sm:col-span-3 font-semibold">Bank:</dt>
          <dd className="sm:col-span-9">{bank}</dd>

          <dt className="sm:col-span-3 font-semibold">Offer Added Date:</dt>
          <dd className="sm:col-span-9">{formatDate(insertedAt)}</dd>
        </dl>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold bg-gray-100 p-3 rounded-lg mb-4">
          How to Redeem
        </h2>
        <p className="text-gray-700">
          To redeem this offer, simply use your eligible {bank} card at{" "}
          {merchantName}. The credit will be applied to your account
          automatically.
        </p>
      </section>
    </Container>
  );
}
