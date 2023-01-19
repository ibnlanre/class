import { Store } from "./Store";

import Creator from "./assets/creator.webp";
import YangaBeauty from "./assets/yanga-beauty.webp";

import { Invoices } from "./Invoices";
import { PaymentLinks } from "./PaymentLinks";

import "./Products.css";

export function Products() {
  return (
    <main className="product-container">
      <article className="product-body">
        <h2 className="product-title">
          Build a successful online business with our{" "}
          <span className="product-green">Commerce tools.</span>
        </h2>

        <section className="store-section">
          <Store />
          <figure className="store-figure">
            <img
              className="store-image"
              height="100%"
              width="100%"
              src={YangaBeauty}
              alt="woman"
            />
          </figure>
        </section>

        <section className="art-section">
          <figure className="art-figure">
            <img
              className="art-image"
              width="100%"
              src={Creator}
              alt="artwork"
            />
            <figcaption className="art-caption">
              A platform for you, whether you're a big business or a{" "}
              <span className="product-green">solo artist.</span>
            </figcaption>
          </figure>
          <div className="art-content store-body">
            <Invoices />
            <PaymentLinks />
          </div>
        </section>

        <section className="large-container">
          <h3 className="large-content">
            Let's play to our strengths, shall we? You focus on bringing your
            amazing ideas to life and we focus on providing all the{" "}
            <span className="product-green">commerce tools</span> you need.
          </h3>
          <button className="content-button large-button">
            Okay, let's go
          </button>
        </section>
      </article>
    </main>
  );
}
