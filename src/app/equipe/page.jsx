import Image from "next/image"
import Navbar from "../navbar"

export default function Equipe(){
    return(
        <div>
            <Navbar />
            <h1>Equipe</h1>
            <figure>
                <figcaption>Igor Dias</figcaption>
                <Image src={'/imgs/minha foto.jpeg'} alt="Foto do líder" width={300} height={300} />
                <figcaption>Líder</figcaption>
            </figure>
            <figure>
                <figcaption>Léo Coimbra</figcaption>
                <Image src={'/imgs/foto leo.jpeg'} alt="Foto do Léo" width={300} height={300}/>
                <figcaption>Coletor</figcaption>
            </figure>
            <figure></figure>
        </div>
    )
}