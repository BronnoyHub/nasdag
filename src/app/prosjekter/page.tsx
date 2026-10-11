import { ArrowIcon } from "@/components/arrow-icon";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { defaultContent } from "@/lib/default-content";
import { getProjects } from "@/lib/projects";
import { ServiceVisual } from "@/components/service-visual";
export const metadata: Metadata = {
  title: "Portefølje og muligheter | NASDAG media & IT",
  description:
    "Se kundeleveranser og visuelle konseptforslag innen design, nettsider, profilering og teknologi fra NASDAG media & IT.",
};
export default async function Portfolio() {
  const projects = await getProjects();
  return (
    <>
      <a className="skip-link" href="#portfolio-main">
        Hopp til innhold
      </a>
      <header className="portfolio-header">
        <Link className="brand" href="/">
          NASDAG<span>media & IT</span>
        </Link>
        <nav aria-label="Hovedmeny">
          <Link href="/#tjenester">Tjenester</Link>
          <Link href="/prosjekter" aria-current="page">
            Prosjekter
          </Link>
          <Link href="/#kontakt">Kontakt</Link>
        </nav>
      </header>
      <main id="portfolio-main" className="portfolio">
        <section className="portfolio-hero">
          <p className="eyebrow">PORTEFØLJE & MULIGHETER</p>
          <h1>
            Ideer får form.
            <br />
            <em>Virksomheter får uttrykk.</em>
          </h1>
          <p className="intro">
            Fra det første konseptet til det ferdige uttrykket. Her viser vi hva
            vi leverer til kunder – og hvordan tjenestene våre kan ta form for
            deg.
          </p>
          <div className="portfolio-jumps">
            <a href="#kundeleveranser">Kundeleveranser ↓</a>
            <a href="#muligheter">Utforsk mulighetene ↓</a>
          </div>
        </section>
        <section id="kundeleveranser" className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">UTFØRT ARBEID</p>
              <h2>Kundeleveranser</h2>
            </div>
            <p>Behovet. Løsningen. Det vi leverte.</p>
          </div>
          {projects.length ? (
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project._id}>
                  {project.image?.url && project.image.alt ? (
                    <div className="project-image">
                      <Image
                        src={project.image.url}
                        alt={project.image.alt}
                        fill
                        sizes="(max-width: 700px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div className="project-no-image">Prosjektbilde kommer</div>
                  )}
                  <div className="project-copy">
                    <p className="eyebrow">
                      {project.customer}
                      {project.year ? ` · ${project.year}` : ""}
                    </p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    {project.services?.length ? (
                      <ul className="tags">
                        {project.services.map((service, i) => (
                          <li key={`${service}-${i}`}>{service}</li>
                        ))}
                      </ul>
                    ) : null}
                    <details>
                      <summary>Se hva vi leverte</summary>
                      {project.challenge && (
                        <>
                          <h4>Kundens behov</h4>
                          <p>{project.challenge}</p>
                        </>
                      )}
                      {project.solution && (
                        <>
                          <h4>Vår løsning</h4>
                          <p>{project.solution}</p>
                        </>
                      )}
                      {project.deliveries?.length ? (
                        <>
                          <h4>Leveransen</h4>
                          <ul>
                            {project.deliveries.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </>
                      ) : null}
                      {project.results && (
                        <>
                          <h4>Dokumenterte resultater</h4>
                          <p>{project.results}</p>
                        </>
                      )}
                    </details>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="portfolio-empty">
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
              <div>
                <h3>Her kommer kundeleveransene.</h3>
                <p>
                  Vi legger til prosjekter når tekst, kundenavn og bilder er
                  godkjent for publisering. Inntil da kan du utforske
                  konseptforslagene nedenfor.
                </p>
              </div>
            </div>
          )}
        </section>
        <section id="muligheter" className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HVA KAN VI SKAPE SAMMEN?</p>
              <h2>Fra tjeneste til uttrykk.</h2>
            </div>
            <p>
              Visuelle konseptforslag.
              <br />
              Disse er ikke utførte kundeoppdrag.
            </p>
          </div>
          <div className="concept-grid">
            {defaultContent.services.map((service, i) => (
              <article className="concept-card" key={service._key}>
                <ServiceVisual kind={service._key} />
                <div className="concept-copy">
                  <span className="concept-label">
                    Konseptforslag · {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href={`/#kontakt`}>
                    Snakk med oss om {service.title.toLowerCase()}{" "}
                    <span aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="portfolio-cta">
          <p className="eyebrow">NESTE PROSJEKT KAN VÆRE DITT</p>
          <h2>
            Har du en idé?
            <br />
            La oss gi den form.
          </h2>
          <p>
            Du trenger ikke ha alle svarene klare. Fortell oss hva du ønsker å
            oppnå, så finner vi veien videre sammen.
          </p>
          <Link className="button" href="/#kontakt">
            Fortell oss om prosjektet ditt <ArrowIcon />
          </Link>
        </section>
      </main>
      <footer>
        <Link href="/">NASDAG media & IT</Link>
        <span>Design · Teknologi · Samarbeid</span>
      </footer>
    </>
  );
}
