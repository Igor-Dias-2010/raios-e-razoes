import Image from "next/image";
export default function Navbar() {
    return (
        <div>
            <nav>
                <figure>
                    <Image
                        src={"/imgs/logo-raios-e-razoes-removebg-preview.png"}
                        alt="Logo do Raios e Razões"
                        width={250}
                        height={140}
                    ></Image>
                </figure>
            </nav>
        </div>
    );
}
