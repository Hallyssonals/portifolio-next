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
         Curso Superior em Sistemas para internet - Universidade catolica de pernambuco
        </p>
        <p className="mt-4">
        Atualmente desenvolvendo conhecimentos em:

        </p>
        <p className="mt-4">
         • Desenvolvimento Front-End
        </p>
        <p className="mt-4">
        • Desenvolvimento Web com React e Next.js

        </p>
        <p className="mt-4">
         • Programação Orientada a Objetos
        </p>
        <p className="mt-4">
        • Estrutura de Dados

        </p>
        <p className="mt-4">
        • Banco de Dados

        </p>
        <p className="mt-4">
        • Engenharia de Software

        </p>
        <p className="mt-4">
        • APIs e Integrações

        </p>
        <p className="mt-4">
        • Versionamento de Código com Git e GitHub

        </p>
        

      </section>
    </main>
  );
}