import Link from "next/link";
import { getSiteContent } from "@/lib/content";
export default async function Home() {
  const content = await getSiteContent();
  const company = content?.companyName || "Nasdag Design og IT";
  return (
    <>
      <header>
        <Link className="brand" href="/">
          nasdag<span>Design og IT</span>
        </Link>
        <nav aria-label="Hovedmeny">
          <a href="#tjenester">Tjenester</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <p className="eyebrow">DESIGN · TEKNOLOGI · MULIGHETER</p>
          <h1>{content?.headline || "Gode ideer. Digitale muligheter."}</h1>
          <p className="intro">
            {content?.introduction ||
              "Et nytt nettsted for Nasdag Design og IT er under utvikling. Mer informasjon om virksomheten og tjenestene kommer snart."}
          </p>
          <a className="button" href="#tjenester">
            Utforsk tjenester <span aria-hidden="true">↗</span>
          </a>
        </section>
        <section id="tjenester" className="section">
          <p className="eyebrow">DET VI GJØR</p>
          <h2>Tjenester</h2>
          {content?.services?.length ? (
            <div className="cards">
              {content.services.map((service, i) => (
                <article key={service._key}>
                  <span className="number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          ) : (
            <p>Informasjon om tjenestene kommer snart.</p>
          )}
        </section>
        <section id="kontakt" className="section contact">
          <p className="eyebrow">LA OSS SNAKKE SAMMEN</p>
          <h2>Kontakt {company}</h2>
          {content?.email && (
            <p>
              <a href={`mailto:${content.email}`}>{content.email}</a>
            </p>
          )}
          {content?.phone && (
            <p>
              <a href={`tel:${content.phone.replace(/\s/g, "")}`}>
                {content.phone}
              </a>
            </p>
          )}
          {!content?.email && !content?.phone && (
            <p>Kontaktinformasjon kommer snart.</p>
          )}
        </section>
      </main>
      <footer>
        <span>{company}</span>
        <span>© Nasdag</span>
      </footer>
    </>
  );
}
