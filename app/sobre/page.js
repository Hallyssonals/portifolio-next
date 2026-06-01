import Navbar from "../../components/Navbar";

export default function Sobre() {
  return (
    <main>
      <Navbar />

      <section className="p-10">
        <h1 className="text-3xl font-bold">
          Sobre
        </h1>

        <p className="mt-4">
          Aqui você irá escrever informações pessoais e profissionais.
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Tecnologias utilizadas
        </h2>

        <ul className="list-disc ml-6 mt-4">
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>GitHub</li>
          <li>Vercel</li>
        </ul>
      </section>
    </main>
  );
}