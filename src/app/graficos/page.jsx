import Navbar from "../navbar";

export default function Graficos() {
    return (
        <div>
            <Navbar />
            <h1>Gráficos</h1>
            <div className="graficos">
                <table>
                    <caption>Semana 1</caption>
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
                    <tbody>
                        <tr>
                            <td>Estacionamento</td>
                            <td>09/07/2026</td>
                            <td>22°C</td>
                            <td>72%</td>
                            <td>19.4°C</td>
                            <td>71.7%</td>
                            <td>15°C</td>
                            <td>74%</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Estacionamento</td>
                            <td>10/07/2026</td>
                            <td>20.1°C</td>
                            <td>66%</td>
                            <td>18.2°C</td>
                            <td>85.9%</td>
                            <td>15°C</td>
                            <td>89%</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <caption>Semana 2</caption>
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
                </table>
                <table>
                    <caption>Semana 3</caption>
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
                </table>
            </div>
        </div>
    );
}
