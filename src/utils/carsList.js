const carsList = [
    {
        id: Math.random().toString(36),
        name: 'ARGO',
        brand: 'FIAT',
        year: 2022,
        price: 20000,
        km: 10000,
        img: 'FiatArgo',
        mechanics:
            'Os motores disponíveis são: 1.0 Firefly Flex, de 3 cilindros, que rende 77 cv e 10,9 kgfm com etanol e 72 cv e 10,4 kgfm com gasolina; e 1.3 Firefly Flex, de 4 cilindros, com 109 cv e 14,2 kgfm no etanol e 101 cv e 13,7 kgfm na gasolina. O hatch mede 3998 mm de comprimento, 1724 mm de largura, 1503 mm de altura na versão Drive 1.0, (1501 mm na Drive 1.3, 1500 na Drive GSR e 1568 na Trekking), e 2521 mm de entre-eixos. O porta-malas comporta 300 litros de bagagem.',
        equipment:
            'A versão 1.0 é oferecida com freios ABS com EBD, airbag duplo, alarme, travamento central das portas, ISOFIX, ar condicionado, direção elétrica, ajuste de altura do volante, vidros dianteiros elétricos e computador de bordo. Acima, a Drive 1.0 adiciona limpador, lavador e desembaçador do vidro traseiro, banco do motorista com ajuste de altura e indicador de temperatura externa. A nova Seleção possui os mesmos itens e mecânica da Drive 1.0, mas características visuais exclusivas, além de 5 anos de garantia. A Drive 1.3 inclui monitoramento de pressão dos pneus, e com câmbio GSR, também inclui controles de tração e estabilidade, assistente de partida em rampa, borboletas para troca de marcha no volante e sistema multimídia com rádio, conexão Bluetooth, entrada USB, comandos de voz e volante multifuncional.',
    },
    {
        id: Math.random().toString(36),
        name: 'CRONOS',
        brand: 'FIAT',
        year: 2022,
        price: 20000,
        km: 10000,
        img: 'FiatCronos',
        mechanics:
            'O motor 1.3 Firefly gera 109 cv e 14,2 kgfm com etanol e 101 cv e 13,7 kgfm com gasolina, e a transmissão é manual de 5 velocidades. O sedã mede 4364 mm de comprimento, 1726 mm de largura, 1508 mm de altura e 2521 mm de entre-eixos. Seu porta-malas comporta até 525 litros de bagagem.',
        equipment:
            'A versão de entrada, 1.3, é equipada com freios ABS com EBD, airbag duplo, alarme, ISOFIX, monitoramento de pressão dos pneus, ar-condicionado, direção elétrica, ajuste de altura do volante, vidros dianteiros elétricos, volante multifuncional, computador de bordo, indicador de temperatura externa e rádio com conexão USB e Bluetooth. A versão Drive manual acrescenta 2° entrada USB e central multimídia Uconnect, com tela de 7” sensível ao toque, Android Auto e Apple CarPlay, e comandos de voz. A 1.8 AT6, para o público PCD, inclui controles de tração e estabilidade e assistente de partida em aclives.',
    },
    {
        id: Math.random().toString(36),
        name: 'SIENA',
        brand: 'FIAT',
        year: 2022,
        price: 20000,
        km: 10000,
        img: 'FiatGrandSiena',
        mechanics:
            'O motor 1.0 Evo rende 75 cv e 9,9 kgfm com etanol e 73 cv e 9,5 kgfm com gasolina e o 1.4 Evo rende 88 cv e 12,5 kgfm com etanol e 85 cv e 12,4 kgfm com gasolina. A transmissão disponível é manual de 5 velocidades. O sedã mede 4290 mm de comprimento, 1700 mm de largura, 1507 mm de altura, 2511 mm de entre-eixos e comporta até 520 litros de bagagem no porta-malas.',
        equipment:
            'Os principais equipamentos do Grand Siena são freios ABS, airbag duplo, travamento central das portas, ar condicionado, direção hidráulica, espelhos nos para-sóis, computador de bordo, banco traseiro rebatível e vidros dianteiros elétricos. A Attractive acrescenta faróis de neblina, ajuste de altura do volante e do banco do motorista.',
    },
    {
        id: Math.random().toString(36),
        name: 'COMMANDER',
        brand: 'JEEP',
        year: 2022,
        price: 20000,
        km: 10000,
        img: 'JeepCommander',
        mechanics:
            'O motor 1.3 turbo flex rende 185 cv e 27,5 kgfm com etanol e 180 cv e o mesmo torque com gasolina, acoplado a uma transmissão automática de 6 velocidades, e o 2.0 turbodiesel rende 170 cv e 38,7 kgfm, acoplado a uma transmissão automática de 9 velocidades e tração integral. Sua carroceria mede 4769 mm de comprimento, 1859 mm de largura, 1682 mm de altura e 2794 mm de entre-eixos, com porta-malas de 661 litros com 5 lugares e 233 litros com 7.',
        equipment:
            'Os principais itens de série do Commander 2022 na versão Limited são 6 airbags, câmera de ré, controles de tração e estabilidade, assistente de partida em rampa, faróis de LED com assistente de farol alto, controle de descida, sensores de estacionamento dianteiro e traseiro, alertas de ponto cego, mudança de faixa, colisão frontal e tráfego cruzado traseiro, assistente de permanência na faixa e recuperação veicular, frenagem automática de emergência, assistente de estacionamento, ar condicionado automático de 2 zonas, piloto automático adaptativo, retrovisor interno fotocrômico, banco do motorista com ventilação, sensor crepuscular, chave presencial, start-stop, tampa do porta-malas motorizada e sistema multimídia com cancelamento eletrônico de ruídos e espelhamento da tela do celular. A Overland adiciona teto solar panorâmico.',
    },
    {
        id: Math.random().toString(36),
        name: 'COMPASS',
        brand: 'JEEP',
        year: 2022,
        price: 20000,
        km: 10000,
        img: 'JeepCompass',
        mechanics:
            'São duas opções de motor: o novo 1.3 Turbo 270 rende 185 cv e 27,5 kgfm com etanol, e 180 cv e o mesmo torque com gasolina, acoplado à transmissão automática de 6 velocidades e tração dianteira; e o TD350 2.0 16v Multijet diesel de 170 cv e 35,7 kgfm, com transmissão automática de 9 velocidades e tração integral. O Compass mede 4416 mm de comprimento, 1819 mm de largura, 1654 mm de altura, 2636 mm de distância entre eixos e volume de porta-malas com capacidade para 388 litros de bagagem.',
        equipment:
            'Entre os principais equipamentos do modelo estão sistema start-stop, airbags frontais, ISOFIX, nova central multimídia Uconnect com tela sensível ao toque de 7” que conta com Apple Carplay e Google Android Auto, direção com assistência elétrica e ar condicionado automático digital de duas zonas. Na versão Longitude, os bancos passam a ter revestimento em couro e central multimídia Uconnect de 8,4”, também com espelhamento de smartphone. A Limited acrescenta chamada de assistência de emergência, assistência na recuperação do veículo, GPS, WiFi, informações de trânsito em tempo real, carregador de celular por indução e informações do veículo pelo aplicativo. A Trailhawk inclui detalhes visuais exclusivos, como adesivos e rodas, além de pneus All Terrain para trilhas.',
    },
    {
        id: Math.random().toString(36),
        name: 'RENEGADE',
        brand: 'JEEP',
        year: 2022,
        price: 20000,
        km: 10000,
        img: 'JeepRenegade',
        mechanics:
            'O novo motor é 1.3 turbo flex de 185 cv e 27,5 kgfm com etanol e 180 cv e o mesmo torque com gasolina, com opções de câmbio automático de 6 velocidades com tração dianteira e 9 velocidades com tração integral. Sua carroceria mede 4268 mm de comprimento, 1805 mm de largura, 1702 mm de altura e 2570 mm de entre-eixos, com porta-malas de 320 litros.',
        equipment:
            'O Renegade 2022 conta com 6 airbags, controles de tração e estabilidade, faróis de LED, assistente de farol alto, sensores de estacionamento dianteiro e traseiro, indicador de fadiga, alertas de ponto cego, mudança de faixa, tráfego cruzado traseiro e colisão frontal, assistente de permanência na faixa, frenagem automática de emergência, ar condicionado de duas zonas, assistente de estacionamento, retrovisor interno fotocrômico, rodas de liga leve de 19” na versão S, bancos revestidos em couro, sensores crepuscular e de chuva, chave presencial, start-stop, freio de estacionamento elétrico, acionamento remoto do motor e sistema multimídia com espelhamento da tela do celular, carregador por indução e leitor de placas de trânsito. E a Trailhawk se diferencia com rodas de liga leve de 17” com pneus de uso misto e visual exclusivo com apelo off-road.',
    },
    {
        id: Math.random().toString(36),
        name: 'COROLLA',
        brand: 'TOYOTA',
        year: 2022,
        price: 20000,
        km: 10000,
        img: 'ToyotaCorolla',
        mechanics:
            'Seus motores são: 2.0 Dynamic Force Flex VVT-iE, de ciclo Atkinson, que rende 177 cv com etanol ou 169 cv com gasolina e 21,4 kgfm com ambos combustíveis, acoplado à transmissão Direct Shift (CVT com simulação de 10 velocidades); e o 1.8 VVT-i Hybrid Flex, também de ciclo Atkinson, de 101 cv com etanol ou 98cv com gasolina e 14,5 kgfm com ambos combustíveis, que opera em conjunto com dois motores elétricos que rendem 72 cv e 16,6 kgfm e uma bateria de 1,3 kWh, acoplado à transmissão Hybrid Transaxle (CVT). Entre as dimensões do sedan estão 4.630 mm de comprimento, 1.780 mm de largura, 1.455 mm de altura, 2.700 mm de entre-eixos e porta-malas com capacidade para 470 litros de bagagem.',
        equipment:
            'Entre os principais itens de série do Corolla 2023, desde a versão GLi, estão freios ABS com EBD e BAS, controles de tração e estabilidade, assistente de partida em aclives, sete airbags (frontais, laterais, de cortina e de joelho para o motorista), ISOFIX, direção com assistência elétrica, ar condicionado, computador de bordo com tela de 4,2” em TFT, sistema multimídia com tela sensível ao toque de 8”, com entrada USB, MP3 player, Bluetooth e espelhamento de smartphone via Google Android Auto e Apple Carplay, bancos em couro e rodas de liga leve de 16”. Para a versão XEi, acrescenta-se ar condicionado automático digital, piloto automático, paddles shift atrás do volante, modos de condução selecionáveis, smart key com start button, faróis de neblina em LED, retrovisor interno fotocrômico e rodas de liga leve de 17”. Na versão topo de linha, Altis, acrescenta-se faróis Full-LED com AHB (farol alto automático), ACC (controle de cruzeiro adaptativo), LDA (sensor de alerta de mudança de faixa) e PCS (assistente de pré-colisão), além do Pacote Premium, que conta com ar condicionado dual zone, banco do motorista com ajustes elétricos, teto solar e sensor de chuva, já disponível na versão Altis 2.0 e como opcional na Altis Hybrid. A GR-S acrescenta design exclusivo dos para-choques, grade, rodas, apliques pretos e aerofólio traseiro.',
    },
    {
        id: Math.random().toString(36),
        name: 'CAMRY',
        brand: 'TOYOTA',
        year: 2022,
        price: 20000,
        km: 10000,
        img: 'ToyotaCamry',
        mechanics: 'Combustão: 2.5 L DOHC 4 cilindros 16V (VVT-iE). Motor elétrico de 120 cv. Potência combinada de 211 cv.',
        equipment:
            'Ar-condicionado integrado frio e quente, digital, 3-zone (com controle de temperatura independente para motorista, passageiro dianteiro e traseiro. Bancos dianteiros com sistema de aquecimento, além de painel de instrumentos com tela colorida de TFT de 7′′. Sistema de áudio com tela de LCD sensível ao toque de 9′′, rádio AM/FM+ Bluetooth® + 6 alto-falantes e sistema de conectividade Android Auto® e Apple CarPlay®.',
    },
    {
        id: Math.random().toString(36),
        name: 'HILLUX',
        brand: 'TOYOTA',
        year: 2022,
        price: 20000,
        km: 10000,
        img: 'ToyotaHilluxSW4',
        mechanics:
            'Os motores disponíveis são: o 2.7 flex de 4 cilindros, que rende 163 cv e 25 kgfm com etanol e 159 cv e o mesmo torque com gasolina, e o 2.8 turbodiesel de 177 cv e 45,9 kgfm. O primeiro pode ser acoplado a uma transmissão manual de 5 velocidades ou uma automática de 6, que é a única disponível para o outro. O SUV mede 4795 mm de comprimento, 1855 mm de largura, 1835 mm de altura e 2745 mm de entre-eixos, e seu porta-malas pode variar de 500 litros para 180 litros, quando a terceira fileira de assentos está em uso.',
        equipment:
            'A versão SR conta com freios ABS, airbag duplo, câmera de ré, controles de tração e estabilidade, assistente de partida em rampa, faróis e lanternas de neblina, ISOFIX, sensor de estacionamento traseiro, ar condicionado, volante com ajuste de altura e profundidade, apoio do braço para o motorista, piloto automático, retrovisores com rebatimento elétrico, banco do motorista com ajuste de altura, banco traseiro bipartido, porta-luvas climatizado e sistema multimídia com GPS, TV digital, DVD, USB e Bluetooth. A SRV acrescenta airbags laterais e de cortina, ar condicionado digital, aletas para troca de marcha no volante, bancos em couro e banco do motorista com ajustes elétricos, chave presencial e indicador de temperatura externa. A SRX adiciona faróis de Xenônio com regulagem de altura, luzes de condução diurna, controle automático de descida, retrovisor interno fotocrômico, sensor crepuscular e tampa do porta-malas motorizada. A nova GR-S conta com suspensão recalibrada e apliques esportivos na carroceria.',
    },
];

export default carsList;
