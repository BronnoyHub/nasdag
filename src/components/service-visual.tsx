import { ArrowIcon } from "@/components/arrow-icon";
export function ServiceVisual({ kind }: { kind: string }) {
  return (
    <div className={`service-visual visual-${kind}`} aria-hidden="true">
      {kind === "konsept" && (
        <div className="idea-map">
          <span>Idé</span>
          <i />
          <span>Retning</span>
          <i />
          <span>Konsept</span>
        </div>
      )}
      {kind === "trykk" && (
        <div className="print-stack">
          <div>
            FORM
            <br />
            <b>& FARGE</b>
          </div>
          <div>
            Et uttrykk.
            <br />
            Mange flater.
          </div>
        </div>
      )}
      {kind === "design" && (
        <div className="identity">
          <strong>
            N
            <span>
              <ArrowIcon />
            </span>
          </strong>
          <div className="swatches">
            <i />
            <i />
            <i />
          </div>
          <small>VISUELL IDENTITET</small>
        </div>
      )}
      {kind === "nettsider" && (
        <div className="browser-art">
          <div className="browser-bar">● ● ●</div>
          <div className="browser-body">
            <small>DIGITAL OPPLEVELSE</small>
            <strong>
              Enklere.
              <br />
              Smartere.
            </strong>
            <span>
              Finn din vei <ArrowIcon />
            </span>
          </div>
          <div className="chat-art">Hvordan kan vi hjelpe?</div>
        </div>
      )}
      {kind === "annonsering" && (
        <div className="campaign">
          <small>DITT BUDSKAP</small>
          <strong>
            Bli
            <br />
            sett.
          </strong>
          <span>Riktig budskap. Riktig kanal.</span>
          <i>
            <ArrowIcon />
          </i>
        </div>
      )}
      {kind === "grunder" && (
        <div className="collaboration">
          <span>Din idé</span>
          <b>+</b>
          <span>Vår kompetanse</span>
          <strong>
            Neste steg <ArrowIcon />
          </strong>
        </div>
      )}
      {kind === "kurs" && (
        <div className="course">
          <small>KUNNSKAP I PRAKSIS</small>
          <strong>
            Lær.
            <br />
            Prøv.
            <br />
            Skap.
          </strong>
          <span>Design · Teknologi · KI</span>
        </div>
      )}
    </div>
  );
}
