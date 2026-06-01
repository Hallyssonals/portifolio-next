import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="p-10 text-center">
        {/* INSIRA SUA FOTO AQUI */}
        <img
          src="/sua-foto.jpg"
          alt="Minha Foto"
          className="w-40 h-40 rounded-full mx-auto"
        />

        {/* INSIRA SEU NOME AQUI */}
        <h1 className="text-4xl font-bold mt-4">
          Seu Nome
        </h1>

        {/* INSIRA SUA DESCRIÇÃO AQUI */}
        <p className="mt-4 text-lg">
          Desenvolvedor Front-End em formação apaixonado por tecnologia,
          interfaces modernas e desenvolvimento web.
        </p>
      </section>
    </main>
  );
}