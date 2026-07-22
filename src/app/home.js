import Navbar from "./navbar";
export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Raios e Razões</h1>
            <p className="p-inicio">
                Esse é um trabalho de matemática onde iremos analisar a
                temperatura e umidade do estacionamento da escola SESI de
                Florianópolis.
            </p>
        </div>
    );
}
