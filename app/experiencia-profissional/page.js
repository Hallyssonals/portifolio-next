import Navbar from "../../components/Navbar";

export default function ExperienciaProfissional() {
  return (
    <main>
      <Navbar />

      <section className="p-10">
        <h1 className="text-3xl font-bold">
          Experiência Profissional
        </h1>

        {/* INSIRA SUAS EXPERIÊNCIAS AQUI */}
        <p className="mt-4">
          Empresas, cargos e atividades desenvolvidas.
        </p>
      </section>
    </main>
  );
}