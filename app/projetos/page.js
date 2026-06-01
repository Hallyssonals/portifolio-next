import Navbar from "../../components/Navbar";

export default function Projetos() {
  return (
    <main>
      <Navbar />

      <section className="p-10">
        <h1 className="text-3xl font-bold">
          Projetos Desenvolvidos
        </h1>

        {/* INSIRA SEUS PROJETOS AQUI */}
        <ul className="mt-4">
          <li>Projeto Jogo de Dados</li>
          <li>Site de Perfil</li>
        </ul>
      </section>
    </main>
  );
}