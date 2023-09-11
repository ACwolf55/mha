export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-#462d91 py-5 text-center">
      <p className="text-white">
        More Questions?{" "}
        <a
          className="font-medium text-white underline transition-colors"
          href="https://justtellone.org/about/"
          target="_self"
          rel="noopener noreferrer"
        >
          Read more on our website
        </a>
      </p>
    </div>
  );
}
