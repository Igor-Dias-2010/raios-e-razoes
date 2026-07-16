import Navbar from "../navbar"

export default function Pesquisas() {
    return (
        <div>
            <Navbar />
            <h1>Pesquisas</h1>
            <div className="pesquisas">
                <h2>Pesquisa 1</h2>
                <h3>Microcontrolador Arduíno</h3>
                <p>O microcontrolador é o chip principal que executa as instruções e os comandos que você escreve. No entanto, para funcionar de maneira prática, ele precisa de componentes de suporte (como reguladores de tensão, portas USB e pinos), que juntos formam a Placa Arduino.</p>
                <h3>funcionalidades</h3>
                <p>O arduino serve, principalmente, para facilitar o aprendizado de programação e o desenvolvimento de projetos de eletrônica e robótica. Mas, a lista de possibilidades é enorme e inclui projetos de automação residencial, automação industrial e muito mais. Veja alguns exemplos:</p>
                <ul>
                    <li><strong>Automatização de ambientes –</strong> com a conexão do arduino a outros acessórios, como displays, módulos de relés, teclados, entre outros, é possível controlar abertura de portas e cortinas, volume de som e muito mais;</li>
                    <li><strong>Criação de produtos –</strong> pode ser usado para testar produtos em desenvolvimento, com baixo custo, a fim de descobrir as possíveis falhas e as capacidades do projeto, durante a prototipagem;</li>
                    <li><strong>Segurança residencial –</strong> serve como dispositivo de segurança residencial, com programação de alarme inteligente, sensores de movimento, sirenes, câmeras, detecção de fumaça, etc</li>
                </ul>
                <h3>Profissões que usam ele</h3>
                <ul>
                    <li>Engenheiro eletrônico</li>
                    <li>Desenvolvedor IoT e Sistemas Embarcados</li>
                    <li>Desenvolvedor de Firmware Junior</li>
                    <li>Professor de Robótica</li>
                    <li>Professor de Informática</li>
                </ul>
            </div>
            <div className="pesquisas">
                <h2>Pesquisa 2</h2>
                <h3>Temperatura</h3>
                <p>A temperatura é uma grandeza física escalar que indica o grau de agitação dos átomos de um corpo. Calor e temperatura são grandezas físicas diferentes.</p>
                <p>quanto maior for a vibração desses átomos e moléculas, maior será a temperatura. Da mesma forma, quanto menor for a vibração desses átomos e moléculas, menor será a temperatura.</p>
                <h3>Porque é importante?</h3>
                <p>É necessário sabermos medir a temperatura pois é essencial para o conforto térmico, proteger a saúde e garantir a conservação correta de alimentos,medicamentos e equipamentos sensíveis.</p>
                <h3>Áreas profissionais</h3>
                <ul>
                    <li>Técnico de refrigeração e climatização</li>
                    <li>Meterologista</li>
                </ul>
                <h3>Profisssão aprofundada</h3>
                <p>A meteorologia é definida como a ciência que estuda os fenômenos que ocorrem na atmosfera, e está relacionada ao estado físico, dinâmico e químico da atmosfera, as interações entre elas e a superfície terrestre subjacente.Os instrumentos que são utlizados são vários, mas os mais conhecidos são o Barômetro e o Pluviômetro.</p>
                <h3>Temperatura x Clima</h3>
                <p>Clima é uma condição duradoura do ambiente atmosférico e equivale ao conjunto dos tipos de tempos mais comuns em um determinado lugar ao longo de um período de aproximadamente 30 anos. Representa, portanto, um padrão geral das condições meteorológicas que se alteram de acordo com as estações do ano.Já a temperatura do ar é a quantidade de calor presente no ar, sendo uma das principais variáveis do clima.</p>
            </div>
        </div>
    )
}