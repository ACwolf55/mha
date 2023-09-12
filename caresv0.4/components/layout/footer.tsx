const styles = {
  footer: {
    backgroundColor: "#462d91",
  },
};
export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 bg-opacity-100 bg-purple py-5 text-center">
      <p className="text-white">
        More Questions?{" "}
        <a
          className="font-medium text-white underline transition-colors"
          href="https://justtellone.org/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more on our website
        </a>
      </p>
    </div>
  );
}
