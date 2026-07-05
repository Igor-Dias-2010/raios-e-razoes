import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <nav>
                <Link href={'/'}>Início</Link>
                <Link href={'/equipe'}>Equipe</Link>
                <Link href={'/pesquisas'}>Pesquisas</Link>
                <Link href={'/graficos'}>Gráficos</Link>
            </nav>
        </div>
    );
}
