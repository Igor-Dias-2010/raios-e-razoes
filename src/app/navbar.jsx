"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div>
            <nav>
                <Link href={"/"} className={pathname === "/" ? "ativo" : ""}>
                    Início
                </Link>
                <Link
                    href={"/equipe"}
                    className={pathname === "/equipe" ? "ativo" : ""}
                >
                    Equipe
                </Link>
                <Link
                    href={"/pesquisas"}
                    className={pathname === "/pesquisas" ? "ativo" : ""}
                >
                    Pesquisas
                </Link>
                <Link
                    href={"/graficos"}
                    className={pathname === "/graficos" ? "ativo" : ""}
                >
                    Gráficos
                </Link>
            </nav>
        </div>
    );
}
