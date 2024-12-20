import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("latest", "routes/latest.tsx"),
  ...prefix("offers", [
    index("routes/offers.tsx"),
    route(":merchantSlug/:offerSlug/:dateSlug", "routes/offers/details.tsx"),
    route(":merchantSlug", "routes/offers/byMerchant.tsx")
  ]),
  route("myoffers", "routes/myoffers.tsx"),
] satisfies RouteConfig;
