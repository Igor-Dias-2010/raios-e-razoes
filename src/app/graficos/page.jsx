import Navbar from "../navbar";

export default function Graficos() {
    return (
        <div>
            <Navbar />
            <h1>Gráficos</h1>
            <div className="graficos">
                <h2>Semana 1</h2>
                <table>
                    <thead>
                        <tr>
                            <th>LOCAL</th>
                            <th>DATA</th>
                            <th>TEMPERATURA (KIT)</th>
                            <th>UMIDADE (KIT)</th>
                            <th>TEMPERATURA (LABDISC)</th>
                            <th>UMIDADE (LABDISC)</th>
                            <th>TEMPERATURA (Internet)</th>
                            <th>UMIDADE (Internet)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Estacionamento</td>
                            <td>06/07/2026</td>
                            <td>21.9°C</td>
                            <td>62%</td>
                            <td>20.2°C</td>
                            <td>81.5%</td>
                            <td>19°C</td>
                            <td>89%</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Semana 2</h2>
                <table>
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>TEMPERATURA (KIT)</th>
                            <th>UMIDADE (KIT)</th>
                            <th>TEMPERATURA (LABDISC)</th>
                            <th>UMIDADE (LABDISC)</th>
                            <th>TEMPERATURA (Internet)</th>
                            <th>UMIDADE (Internet)</th>
                        </tr>
                    </thead>
                </table>
                <h2>Semana 3</h2>
                <table>
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>TEMPERATURA (KIT)</th>
                            <th>UMIDADE (KIT)</th>
                            <th>TEMPERATURA (LABDISC)</th>
                            <th>UMIDADE (LABDISC)</th>
                            <th>TEMPERATURA (Internet)</th>
                            <th>UMIDADE (Internet)</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}
