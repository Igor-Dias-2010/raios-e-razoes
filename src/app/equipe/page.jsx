import Image from "next/image";
import Navbar from "../navbar";

export default function Equipe() {
    return (
        <div>
            <Navbar />
            <h1>Equipe</h1>
            <div className="fotos">
                <figure>
                    <figcaption><strong>Igor Dias</strong></figcaption>
                    <figcaption>Líder</figcaption>
                    <Image
                        className="image"
                        src={"/imgs/foto-igor.jpeg"}
                        alt="foto do líder"
                        width={200}
                        height={200}
                    />
                </figure>
                <figure>
                    <figcaption><strong>Léo Coimbra</strong></figcaption>
                    <figcaption>Pesquisador</figcaption>
                    <Image
                        className="image"
                        src={"/imgs/foto-leo.jpeg"}
                        alt="foto do Léo"
                        width={200}
                        height={200}
                    />
                </figure>
                <figure>
                    <figcaption><strong>Nikolas Santos</strong></figcaption>
                    <figcaption>Pesquisador</figcaption>
                    <Image
                        className="image"
                        src={"/imgs/foto-nikolas.jpeg"}
                        alt="foto do Nikolas"
                        width={200}
                        height={200}
                    />
                </figure>
                <figure>
                    <figcaption><strong>Eduardo Vianna</strong></figcaption>
                    <figcaption>Coletor</figcaption>
                    <Image
                        className="image"
                        src={"/imgs/foto-dudu.jpeg"}
                        alt="foto do Eduardo"
                        width={200}
                        height={200}
                    />
                </figure>
                <figure>
                    <figcaption><strong>Otávio Ramos</strong></figcaption>
                    <figcaption>Coletor</figcaption>
                    <Image
                        className="image"
                        src={"/imgs/foto-otavio.jpeg"}
                        alt="foto do Otávio"
                        width={200}
                        height={200}
                    />
                </figure>
            </div>
        </div>
    );
}
