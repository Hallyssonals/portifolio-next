import Navbar from "../../components/Navbar";

export default function ExperienciaAcademica() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;1,400&display=swap');

        .vought-body {
          background: #0a0a0a;
          color: #e0e0e0;
          font-family: 'Barlow Condensed', sans-serif;
          min-height: 100vh;
        }
        .vought-page-header {
          border-bottom: 1px solid #1a1a1a;
          padding: 3.5rem 2rem 2.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .vought-page-eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c0000a;
          margin-bottom: 0.5rem;
        }
        .vought-page-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4rem);
          letter-spacing: 0.08em;
          color: #fff;
          margin: 0;
          line-height: 1;
        }

        /* ── LAYOUT ── */
        .vought-layout {
          max-width: 1100px;
          margin: 2.5rem auto 5rem;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: #1a1a1a;
          border: 1px solid #1a1a1a;
        }
        @media (max-width: 700px) {
          .vought-layout { grid-template-columns: 1fr; }
        }

        .vought-card {
          background: #0f0f0f;
          padding: 2rem;
          position: relative;
        }
        .vought-card.full-width {
          grid-column: 1 / -1;
        }
        .vought-card-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #c0000a;
          display: block;
          margin-bottom: 0.5rem;
        }
        .vought-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 0.06em;
          color: #fff;
          margin: 0 0 1.5rem;
        }

        /* Formation rows */
        .info-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
          font-size: 0.95rem;
        }
        .info-row-label {
          color: #555;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          min-width: 90px;
          flex-shrink: 0;
        }
        .info-row-value {
          color: #bbb;
        }
        .info-row-value strong {
          color: #fff;
        }
        .vought-desc {
          margin-top: 1.2rem;
          font-size: 0.95rem;
          color: #666;
          line-height: 1.7;
          border-top: 1px solid #1a1a1a;
          padding-top: 1.2rem;
        }

        /* Tag chips */
        .vought-tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .vought-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555;
          border: 1px solid #1e1e1e;
          padding: 0.28rem 0.65rem;
          background: #0a0a0a;
          transition: border-color 0.2s, color 0.2s;
        }
        .vought-tag:hover {
          border-color: #c0000a;
          color: #ccc;
        }

        /* Cert list */
        .cert-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .cert-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 0;
          border-bottom: 1px solid #161616;
          font-size: 0.95rem;
          color: #888;
          transition: color 0.2s;
        }
        .cert-item:last-child { border-bottom: none; }
        .cert-item:hover { color: #ccc; }
        .cert-bullet {
          width: 6px;
          height: 6px;
          background: #c0000a;
          border-radius: 50%;
          flex-shrink: 0;
        }
      `}</style>

      <main className="vought-body">
        <Navbar />

        <div className="vought-page-header">
          <p className="vought-page-eyebrow">Registro Acadêmico</p>
          <h1 className="vought-page-title">Experiência Acadêmica</h1>
        </div>

        <div className="vought-layout">

          {/* Formação */}
          <div className="vought-card full-width">
            <span className="vought-card-tag">Formação</span>
            <h2 className="vought-card-title">Graduação em Andamento</h2>

            <div className="info-row">
              <span className="info-row-label">Instituição</span>
              <span className="info-row-value"><strong>Universidade Católica de Pernambuco</strong> — Unicap</span>
            </div>
            <div className="info-row">
              <span className="info-row-label">Curso</span>
              <span className="info-row-value">Sistemas para Internet</span>
            </div>
            <div className="info-row">
              <span className="info-row-label">Período</span>
              <span className="info-row-value">3º Período</span>
            </div>

            <p className="vought-desc">
              Durante minha formação venho desenvolvendo conhecimentos em
              desenvolvimento web, programação, banco de dados, engenharia de
              software, integração de APIs e boas práticas de desenvolvimento.
            </p>
          </div>

          {/* Conhecimentos */}
          <div className="vought-card">
            <span className="vought-card-tag">Currículo</span>
            <h2 className="vought-card-title">Conhecimentos Desenvolvidos</h2>
            <div className="vought-tag-list">
              {["Desenvolvimento Front-End","React","Next.js","JavaScript","Banco de Dados","APIs e Integrações","Git e GitHub","Engenharia de Software"].map(k => (
                <span className="vought-tag" key={k}>{k}</span>
              ))}
            </div>
          </div>

          {/* Certificações */}
          <div className="vought-card">
            <span className="vought-card-tag">Certificados</span>
            <h2 className="vought-card-title">Certificações &amp; Cursos</h2>
            <ul className="cert-list">
              {["Git e GitHub","JavaScript","React","Next.js","Fundamentos de Desenvolvimento Web","VoIP e Telecomunicações","Atendimento e Suporte ao Cliente"].map(c => (
                <li className="cert-item" key={c}>
                  <span className="cert-bullet" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>
    </>
  );
}