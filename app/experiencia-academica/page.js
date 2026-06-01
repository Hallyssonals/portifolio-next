import Navbar from "../../components/Navbar";

export default function ExperienciaAcademica() {
  return (
    <main>
      <Navbar />

      <section className="p-10">
        <h1 className="text-3xl font-bold">
          Experiência Acadêmica
        </h1>

        {/* INSIRA SUA FORMAÇÃO AQUI */}
        <p className="mt-4">
          Curso, faculdade, certificações e estudos.
        </p>
      </section>
    </main>
  );
}