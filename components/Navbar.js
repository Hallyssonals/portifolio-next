import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/experiencia-academica">Experiência Acadêmica</Link>
      <Link href="/experiencia-profissional">Experiência Profissional</Link>
      <Link href="/projetos">Projetos</Link>
    </nav>
  );
}