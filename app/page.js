import Navbar from "../components/Navbar";
import ClimaHora from "../components/ClimaHora";

export default function Home() {
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

        /* ── HERO ── */
        .hero {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 6rem 2rem 4rem;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 50% 0%, rgba(192,0,10,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-scanlines {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.18) 3px,
            rgba(0,0,0,0.18) 4px
          );
          pointer-events: none;
        }

        .hero-photo-ring {
          position: relative;
          width: 180px;
          height: 180px;
          margin-bottom: 2.5rem;
        }
        .hero-photo-ring::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid #c0000a;
          animation: ring-pulse 2.4s ease-in-out infinite;
        }
        .hero-photo-ring::after {
          content: '';
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 1px solid rgba(192,0,10,0.25);
        }
        @keyframes ring-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(192,0,10,0.4); }
          50% { box-shadow: 0 0 0 10px rgba(192,0,10,0); }
        }
        .hero-photo-ring img {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          filter: grayscale(25%) contrast(1.1);
          display: block;
        }

        .hero-label {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c0000a;
          margin-bottom: 0.5rem;
        }
        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5rem);
          letter-spacing: 0.06em;
          line-height: 1;
          color: #fff;
          margin: 0 0 1rem;
        }
        .hero-role {
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #666;
          margin-bottom: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }
        .hero-role-sep {
          width: 4px;
          height: 4px;
          background: #c0000a;
          border-radius: 50%;
          display: inline-block;
        }
        .hero-bio {
          max-width: 640px;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #888;
          margin-bottom: 2.5rem;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 2rem;
          background: transparent;
          border: 1px solid #c0000a;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s, color 0.25s;
          position: relative;
        }
        .hero-cta::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          right: -3px;
          bottom: -3px;
          border: 1px solid rgba(192,0,10,0.25);
          pointer-events: none;
        }
        .hero-cta:hover {
          background: #c0000a;
          color: #fff;
        }

        /* ── DIVIDER ── */
        .vought-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .vought-divider-line {
          flex: 1;
          height: 1px;
          background: #1e1e1e;
        }
        .vought-divider-diamond {
          width: 8px;
          height: 8px;
          background: #c0000a;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* ── SECTION ── */
        .vought-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        .vought-section-header {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .vought-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.1em;
          color: #fff;
          margin: 0;
        }
        .vought-section-number {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #c0000a;
        }

        /* ── CARDS ── */
        .skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1px;
          background: #1a1a1a;
          border: 1px solid #1a1a1a;
        }
        .skill-card {
          background: #0f0f0f;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: background 0.25s;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #c0000a;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .skill-card:hover {
          background: #111;
        }
        .skill-card:hover::before {
          transform: scaleX(1);
        }
        .skill-card-index {
          font-size: 3rem;
          font-family: 'Bebas Neue', sans-serif;
          color: #1e1e1e;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .skill-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 0.75rem;
        }
        .skill-card-desc {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.6;
        }
      `}</style>

      <main className="vought-body">
        <Navbar />

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-scanlines" />

          <div className="hero-photo-ring">
            <img
              src="/perfil port.jpeg"
              alt="Foto de Perfil"
            />
          </div>

          <p className="hero-label">Portfólio Profissional &amp; Acadêmico</p>

          <h1 className="hero-name">
            Hallysson Araújo<br />Laurindo Silva
          </h1>

          <div className="hero-role">
            <span>Analista de Suporte</span>
            <span className="hero-role-sep" />
            <span>T.I.</span>
            <span className="hero-role-sep" />
            <span>Desenvolvedor Front-End</span>
          </div>

          <p className="hero-bio">
            Profissional com experiência em suporte técnico,
            soluções de comunicação empresarial, WhatsApp Business API,
            VoIP e implantação de sistemas. Atualmente focado no
            desenvolvimento web com React, Next.js e integração de APIs.
          </p>

          <a
            href="https://github.com/Hallyssonals"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
          >
            ⌥ Ver GitHub
          </a>
        </section>

        <div className="vought-divider">
          <div className="vought-divider-line" />
          <div className="vought-divider-diamond" />
          <div className="vought-divider-line" />
        </div>
        {/* ── DADOS EM TEMPO REAL ── */}
        <section className="vought-section">
          <div className="vought-section-header">
           <span className="vought-section-number">00</span>
             <h2 className="vought-section-title">
                Dados em Tempo Real
              </h2>
           </div>

            <ClimaHora />
            </section>
       
        <section className="vought-section">
          <div className="vought-section-header">
            <span className="vought-section-number">01</span>
            <h2 className="vought-section-title">Competências</h2>
          </div>

          <div className="skill-grid">
            {[
              {
                i: "01",
                title: "Desenvolvimento Web",
                desc: "React, Next.js, JavaScript, HTML e CSS.",
              },
              {
                i: "02",
                title: "Suporte Técnico",
                desc: "Atendimento ao cliente, implantação e suporte de sistemas.",
              },
              {
                i: "03",
                title: "Comunicação Empresarial",
                desc: "WhatsApp Business API, VoIP, chatbots e plataformas omnichannel.",
              },
            ].map(({ i, title, desc }) => (
              <div className="skill-card" key={i}>
                <div className="skill-card-index">{i}</div>
                <div className="skill-card-title">{title}</div>
                <div className="skill-card-desc">{desc}</div>
              </div>
              
            ))}

          </div>
        </section>
      </main>
    </>
  );
}