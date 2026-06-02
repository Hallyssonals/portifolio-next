import Navbar from "../../components/Navbar";

const projetos = [
  {
    id: "01",
    titulo: "Jogo de Dados",
    descricao:
      "Aplicação desenvolvida em React e Next.js que simula uma partida entre dois jogadores em cinco rodadas, utilizando sorteio de dados, controle de pontuação e definição automática do vencedor.",
    stack: ["React", "Next.js", "JavaScript", "CSS"],
    tipo: "Jogo / Lógica",
  },
  {
    id: "02",
    titulo: "Site de Perfil",
    descricao:
      "Projeto desenvolvido para apresentação de informações pessoais, utilizando componentes React e estrutura moderna do Next.js.",
    stack: ["React", "Next.js", "CSS"],
    tipo: "Web / UI",
  },
  {
    id: "03",
    titulo: "Tradutor para LIBRAS",
    descricao:
      "Projeto acadêmico voltado para acessibilidade digital, permitindo a tradução de conteúdos para LIBRAS através de avatar virtual e geração de vídeos traduzidos.",
    stack: ["JavaScript", "APIs", "Acessibilidade Digital"],
    tipo: "Acessibilidade / Inclusão",
  },
  {
    id: "04",
    titulo: "Portfólio Pessoal",
    descricao:
      "Site desenvolvido para apresentar minha trajetória acadêmica, experiência profissional, projetos desenvolvidos e integração com APIs.",
    stack: ["React", "Next.js", "Tailwind CSS", "GitHub", "Vercel"],
    tipo: "Portfólio / Full-Stack",
  },
];

export default function Projetos() {
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

        /* ── GRID ── */
        .projects-grid {
          max-width: 1100px;
          margin: 2.5rem auto 5rem;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(460px, 1fr));
          gap: 1px;
          background: #1a1a1a;
          border: 1px solid #1a1a1a;
        }
        @media (max-width: 520px) {
          .projects-grid { grid-template-columns: 1fr; }
        }

        /* ── PROJECT CARD ── */
        .project-card {
          background: #0f0f0f;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          overflow: hidden;
          transition: background 0.25s;
        }
        .project-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #c0000a 0%, transparent 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .project-card:hover {
          background: #111;
        }
        .project-card:hover::after {
          transform: scaleX(1);
        }

        .project-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4.5rem;
          color: #161616;
          line-height: 1;
          margin-bottom: -0.5rem;
          user-select: none;
          transition: color 0.25s;
        }
        .project-card:hover .project-number {
          color: #1e1e1e;
        }

        .project-type {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c0000a;
          margin-bottom: 0.35rem;
        }
        .project-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          letter-spacing: 0.06em;
          color: #fff;
          margin: 0 0 1rem;
          line-height: 1;
        }
        .project-desc {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex: 1;
        }
        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
          padding-top: 1.2rem;
          border-top: 1px solid #161616;
        }
        .stack-chip {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #444;
          border: 1px solid #1e1e1e;
          padding: 0.2rem 0.55rem;
          background: #0a0a0a;
          transition: border-color 0.2s, color 0.2s;
        }
        .project-card:hover .stack-chip {
          border-color: #2a2a2a;
          color: #666;
        }
      `}</style>

      <main className="vought-body">
        <Navbar />

        <div className="vought-page-header">
          <p className="vought-page-eyebrow">Dossier de Projetos</p>
          <h1 className="vought-page-title">Projetos Desenvolvidos</h1>
        </div>

        <div className="projects-grid">
          {projetos.map((p) => (
            <div className="project-card" key={p.id}>
              <div className="project-number">{p.id}</div>
              <div className="project-type">{p.tipo}</div>
              <h2 className="project-title">{p.titulo}</h2>
              <p className="project-desc">{p.descricao}</p>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="stack-chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}