export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&display=swap');

        .vought-footer {
          background: #0a0a0a;
          border-top: 2px solid #c0000a;
          font-family: 'Barlow Condensed', sans-serif;
          margin-top: auto;
        }
        .vought-footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 2rem 2rem;
        }
        .vought-footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #1a1a1a;
        }
        .vought-footer-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          letter-spacing: 0.08em;
          color: #fff;
          margin: 0 0 0.35rem;
          line-height: 1;
        }
        .vought-footer-name span {
          color: #c0000a;
        }
        .vought-footer-roles {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #444;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .vought-footer-dot {
          width: 4px;
          height: 4px;
          background: #c0000a;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }
        .vought-footer-github {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.4rem;
          border: 1px solid #222;
          color: #666;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          transition: border-color 0.25s, color 0.25s, background 0.25s;
          align-self: flex-start;
        }
        .vought-footer-github:hover {
          border-color: #c0000a;
          color: #fff;
          background: rgba(192,0,10,0.06);
        }
        .vought-footer-github-icon {
          font-size: 1rem;
          line-height: 1;
        }
        .vought-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding-top: 1.5rem;
        }
        .vought-footer-copy {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #333;
        }
        .vought-footer-stack {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2a2a2a;
        }
      `}</style>

      <footer className="vought-footer">
        <div className="vought-footer-inner">
          <div className="vought-footer-top">
            <div>
              <h3 className="vought-footer-name">
                Hallysson<span>.</span>Dev
              </h3>
              <div className="vought-footer-roles">
                <span>Analista de Suporte</span>
                <span className="vought-footer-dot" />
                <span>Sistemas para Internet</span>
                <span className="vought-footer-dot" />
                <span>Desenvolvedor Front-End</span>
              </div>
            </div>

            <a
              href="https://github.com/Hallyssonals"
              target="_blank"
              rel="noopener noreferrer"
              className="vought-footer-github"
            >
              <span className="vought-footer-github-icon">⌥</span>
              GitHub: Hallyssonals
            </a>
          </div>

          <div className="vought-footer-bottom">
            <p className="vought-footer-copy">
              © 2026 Hallysson Araújo Laurindo Silva
            </p>
            <p className="vought-footer-stack">
              React · Next.js · Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}