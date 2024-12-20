interface CTASectionProps {
  showBanner?: boolean;
}

export default function CTASection({ showBanner = true }: CTASectionProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <p className="max-w-lg mb-6 text-gray-600">
        Install our chrome extension to collect all your Amex / Chase / BoA
        (Bank of America) / Citi Offers with a single click, and receive
        notifications when you visit websites that are offer eligible. Oh, yes,
        we support grocery stores like Safeway and HEB too!
      </p>
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
      {showBanner && (
        <a
          href="https://app.offer.love/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 hover:opacity-80 transition-opacity"
        >
          <img
            src="/images/homepage-banner.png"
            alt="Homepage Banner"
            className="w-full max-w-[720px]"
          />
        </a>
      )}
    </div>
  );
}
