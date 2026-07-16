import Navbar from "../navbar";

export default function Tabelas() {
    return (
        <div>
            <Navbar />
            <h1>Tabelas</h1>
            <div className="tabelas">
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
                            <td>21,9</td>
                            <td>62</td>
                            <td>20,2</td>
                            <td>81,5</td>
                            <td>19</td>
                            <td>89</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Estacionamento</td>
                            <td>09/07/2026</td>
                            <td>22</td>
                            <td>72</td>
                            <td>19,4</td>
                            <td>71,7</td>
                            <td>15</td>
                            <td>74</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Estacionamento</td>
                            <td>10/07/2026</td>
                            <td>20,1</td>
                            <td>66</td>
                            <td>18,2</td>
                            <td>85,9</td>
                            <td>15</td>
                            <td>89</td>
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
                    <tbody>
                        <tr>
                            <td>Estacionamento</td>
                            <td>13/07/2026</td>
                            <td>22,2</td>
                            <td>43</td>
                            <td>23,7</td>
                            <td>61,5</td>
                            <td>18</td>
                            <td>66</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Estacionamento</td>
                            <td>14/07/2026</td>
                            <td>17,5</td>
                            <td>92</td>
                            <td>17</td>
                            <td>78,2</td>
                            <td>13</td>
                            <td>87</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Estacionamento</td>
                            <td>16/07/2026</td>
                            <td>23</td>
                            <td>61</td>
                            <td>21</td>
                            <td>80</td>
                            <td>17</td>
                            <td>85</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
