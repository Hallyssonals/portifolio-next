import Navbar from "../../components/Navbar";

export default function ExperienciaProfissional() {
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

        /* ── MAIN WRAPPER ── */
        .vought-wrapper {
          max-width: 1100px;
          margin: 2.5rem auto 5rem;
          padding: 0 2rem;
        }

        /* ── JOB CARD ── */
        .job-card {
          border: 1px solid #1a1a1a;
          background: #0f0f0f;
          margin-bottom: 1px;
        }
        .job-card-header {
          padding: 2rem 2rem 1.5rem;
          border-bottom: 1px solid #161616;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .job-card-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #c0000a;
          margin-bottom: 0.4rem;
          display: block;
        }
        .job-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.06em;
          color: #fff;
          margin: 0;
          line-height: 1;
        }
        .job-card-company {
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #444;
          margin-top: 0.35rem;
        }
        .job-card-badge {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c0000a;
          border: 1px solid #c0000a22;
          padding: 0.25rem 0.75rem;
          background: rgba(192,0,10,0.06);
          white-space: nowrap;
          align-self: flex-start;
        }

        .job-card-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        @media (max-width: 640px) {
          .job-card-body { grid-template-columns: 1fr; }
        }

        .job-card-col {
          padding: 2rem;
          border-right: 1px solid #161616;
        }
        .job-card-col:last-child { border-right: none; }

        .job-col-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #444;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .job-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #1a1a1a;
        }

        .activity-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.55rem 0;
          border-bottom: 1px solid #131313;
          font-size: 0.95rem;
          color: #777;
          line-height: 1.4;
          transition: color 0.2s;
        }
        .activity-item:last-child { border-bottom: none; }
        .activity-item:hover { color: #bbb; }
        .activity-bullet {
          margin-top: 6px;
          width: 4px;
          height: 4px;
          background: #c0000a;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── COMPETÊNCIAS TAGS ── */
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
      `}</style>

      <main className="vought-body">
        <Navbar />

        <div className="vought-page-header">
          <p className="vought-page-eyebrow">Histórico Operacional</p>
          <h1 className="vought-page-title">Experiência Profissional</h1>
        </div>

        <div className="vought-wrapper">
          <div className="job-card">

            
            <div className="job-card-header">
              <div>
                <span className="job-card-tag">Cargo Atual</span>
                <h2 className="job-card-title">Analista de Suporte</h2>
                <div className="job-card-company">Voicetec</div>
              </div>
              <span className="job-card-badge">▶ Em Atividade</span>
            </div>

            
            <div className="job-card-body">

              
              <div className="job-card-col">
                <div className="job-col-title">Atividades</div>
                <ul className="activity-list">
                  {[
                    "Atendimento e suporte técnico aos clientes",
                    "Implantação de plataformas omnichannel",
                    "Configuração de WhatsApp Business API Oficial",
                    "Configuração de chatbots e automações",
                    "Suporte a sistemas VoIP",
                    "Treinamento de usuários",
                    "Análise e resolução de incidentes",
                    "Integração entre plataformas de atendimento",
                  ].map((a) => (
                    <li className="activity-item" key={a}>
                      <span className="activity-bullet" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              
              <div className="job-card-col">
                <div className="job-col-title">Competências</div>
                <div className="vought-tag-list">
                  {[
                    "Suporte Técnico",
                    "VoIP",
                    "WhatsApp Business API",
                    "Atendimento ao Cliente",
                    "Implantação de Sistemas",
                    "Resolução de Problemas",
                    "Integração de Plataformas",
                  ].map((c) => (
                    <span className="vought-tag" key={c}>{c}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}