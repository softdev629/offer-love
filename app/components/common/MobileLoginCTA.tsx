export default function MobileLoginCTA() {
  return (
    <div className="text-center font-bold mb-6">
      <p className="mb-2">Using your cell phone?</p>
      <a 
        href="/account" 
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Login to search your synced offers
      </a>
    </div>
  );
} 