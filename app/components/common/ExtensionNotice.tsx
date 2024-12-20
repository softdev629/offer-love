export default function ExtensionNotice() {
  return (
    <div className="p-4" id="notification-missing-extension">
      <p className="text-gray-600">
        Install our{" "}
        <a 
          href="https://chromewebstore.google.com/detail/amex-boa-chase-citi-offer/onoiombdhkjneegnlbgodhopdnadfknm" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          Chrome Extension
        </a>
        {" "}to save your offers, then come back to this page on <b>desktop</b> to 
        search and sync your offers to the cloud. Once synced, you can then 
        search on-the-go with your cell phone.
      </p>
    </div>
  );
} 