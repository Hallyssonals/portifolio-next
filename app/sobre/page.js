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
          Olá! Meu nome é Hallysson Araújo Laurindo Silva.
          Sou estudante da área de Tecnologia da Informação e atuo profissionalmente com suporte técnico e soluções de comunicação empresarial. Tenho experiência com atendimento ao cliente, implantação de sistemas, plataformas de atendimento omnichannel, WhatsApp Business API e tecnologias VoIP.
          Atualmente busco aprimorar meus conhecimentos em desenvolvimento web, com foco em React, Next.js e integração de APIs, desenvolvendo projetos acadêmicos e pessoais que contribuem para minha evolução profissional.
          Tenho grande interesse por tecnologia, acessibilidade digital, desenvolvimento de software e soluções que gerem impacto positivo para usuários e empresas.
        </p>

        <h2 className="text-2xl font-bold mt-8">
          Este portfólio foi desenvolvido utilizando as seguintes tecnologias:

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