import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";

export default function ErrorPage() {
  useEffect(() => {
    const header = document.getElementById("main-header");
    const footer = document.getElementById("main-footer");
    header.style.display = "none";
    footer.style.display = "none";
  });
  return (
    <section className="error">
      <div className="error-top">
        <h1 className="error-top-title">
          <span className="title-word title-word-1">4</span>
          <span className="title-word title-word-2">0</span>
          <span className="title-word title-word-3">4</span>
        </h1>
        <h2>PAGE NOT FOUND</h2>
        <p className="p-error-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Link smooth to="/" className="error-page-text">
          GO BACK HOME
        </Link>
      </div>
    </section>
  );
}
