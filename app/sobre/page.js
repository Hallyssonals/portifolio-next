import Navbar from "../../components/Navbar";

export default function Sobre() {
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
        .vought-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 2rem 5rem;
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: #1a1a1a;
          border: 1px solid #1a1a1a;
          margin-top: 2.5rem;
          margin-bottom: 4rem;
        }
        /* Individual blocks */
        .vought-block {
          background: #0f0f0f;
          padding: 2.5rem 2rem;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 640px) {
          .vought-block { grid-template-columns: 1fr; }
        }
        .vought-block-label {
          padding-top: 0.3rem;
        }
        .vought-block-label-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c0000a;
          display: block;
          margin-bottom: 0.4rem;
        }
        .vought-block-label-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 1.1;
        }
        .vought-block-content {
          font-size: 1rem;
          line-height: 1.8;
          color: #888;
        }
        .vought-block-content p {
          margin: 0 0 1rem;
        }
        .vought-block-content p:last-child { margin-bottom: 0; }
        .vought-block-content strong {
          color: #ccc;
          font-weight: 700;
        }
        /* Tags/chips */
        .vought-tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .vought-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #666;
          border: 1px solid #222;
          padding: 0.25rem 0.7rem;
          background: #0a0a0a;
          transition: border-color 0.2s, color 0.2s;
        }
        .vought-tag:hover {
          border-color: #c0000a;
          color: #fff;
        }
      `}</style>

      <main className="vought-body">
        <Navbar />

        <div className="vought-page-header">
          <p className="vought-page-eyebrow">Arquivo Pessoal</p>
          <h1 className="vought-page-title">Sobre</h1>
        </div>

        <div className="vought-content" style={{ maxWidth: "1100px", margin: "2.5rem auto 4rem" }}>
          {/* Quem Sou */}
          <div className="vought-block">
            <div className="vought-block-label">
              <span className="vought-block-label-tag">Identidade</span>
              <div className="vought-block-label-title">Quem Sou</div>
            </div>
            <div className="vought-block-content">
              <p>
                Olá! Meu nome é <strong>Hallysson Araújo Laurindo Silva</strong>.
              </p>
              <p>
                Sou estudante da área de Tecnologia da Informação e atuo
                profissionalmente com suporte técnico e soluções de
                comunicação empresarial.
              </p>
              <p>
                Possuo experiência com atendimento ao cliente, implantação de
                sistemas, plataformas omnichannel, WhatsApp Business API e
                tecnologias VoIP.
              </p>
              <p>
                Atualmente busco aprimorar meus conhecimentos em
                desenvolvimento web, com foco em React, Next.js e integração
                de APIs, desenvolvendo projetos acadêmicos e pessoais.
              </p>
              <p>
                Tenho grande interesse por tecnologia, acessibilidade digital,
                desenvolvimento de software e soluções que gerem impacto
                positivo para usuários e empresas.
              </p>
            </div>
          </div>

          {/* Objetivos */}
          <div className="vought-block">
            <div className="vought-block-label">
              <span className="vought-block-label-tag">Missão</span>
              <div className="vought-block-label-title">Objetivos Profissionais</div>
            </div>
            <div className="vought-block-content">
              <p>
                Meu objetivo é consolidar minha carreira na área de
                tecnologia, atuando no desenvolvimento de aplicações web
                modernas, integrações de sistemas e soluções que contribuam
                para a transformação digital das organizações.
              </p>
              <p>
                Busco constantemente aprender novas tecnologias e aprimorar
                minhas habilidades técnicas para enfrentar desafios cada vez
                mais complexos.
              </p>
            </div>
          </div>

          {/* Stack do portfólio */}
          <div className="vought-block">
            <div className="vought-block-label">
              <span className="vought-block-label-tag">Stack</span>
              <div className="vought-block-label-title">Tecnologias Usadas</div>
            </div>
            <div className="vought-block-content">
              <div className="vought-tag-list">
                {["React","Next.js","JavaScript","HTML5","CSS3","Tailwind CSS","Git","GitHub","Vercel"].map(t => (
                  <span className="vought-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Áreas de Interesse */}
          <div className="vought-block">
            <div className="vought-block-label">
              <span className="vought-block-label-tag">Foco</span>
              <div className="vought-block-label-title">Áreas de Interesse</div>
            </div>
            <div className="vought-block-content">
              <div className="vought-tag-list">
                {["Desenvolvimento Front-End","React e Next.js","Integração de APIs","Automação de Processos","WhatsApp Business API","VoIP e Telecomunicações","Acessibilidade Digital"].map(t => (
                  <span className="vought-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}