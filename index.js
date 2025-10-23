// --- CONSTANTES E CONFIGURAÇÕES DO JOGO ---
// Define todas as constantes usadas no jogo
const CONSTANTES = {
    VIDAS_INICIAIS: 5, // Número de vidas que o jogador começa
    RAIO_COLISAO_JOGADOR: 110, // Raio de colisão com o jogador em pixels
    RAIO_COLISAO_JOGADOR_QUADRADO: 110 * 110, // Raio ao quadrado (otimização de cálculo)
    CLASSES: { // Classes CSS usadas no jogo
        OCULTO: 'oculto', // Classe para ocultar elementos
        PONTUACAO_VITORIA: 'pontuacao-final', // Classe para pontuação de vitória
        PONTUACAO_DERROTA: 'pontuacao-final', // Classe para pontuação de derrota
        DESBLOQUEADO: 'desbloqueado', // Classe para itens desbloqueados
        CORACAO_PREENCHIDO: 'texto-vermelho-500', // Classe para coração com vida
        CORACAO_VAZIO: 'texto-cinza-600', // Classe para coração sem vida
    }
};

// Dados de cada tipo de animal do jogo
const DADOS_ANIMAIS = {
    'tartaruga': {
        emoji: '🐢', // Emoji representando o animal
        tamanho: 'texto-6xl', // Classe de tamanho do emoji
        intervaloVelocidade: [0.5, 1.0], // Velocidade mínima e máxima
        descricao: 'As tartarugas marinhas podem prender a respiração por minutos, e até horas, debaixo d\'água.' // Descrição
    },
    'peixe': {
        emoji: '🐠',
        tamanho: 'texto-6xl',
        intervaloVelocidade: [0.5, 1.0],
        descricao: 'Existem mais de 30.000 espécies conhecidas de peixes no mundo.'
    },
    'caranguejo': {
        emoji: '🦀',
        tamanho: 'texto-6xl',
        intervaloVelocidade: [0.7, 1.2],
        descricao: 'Caranguejos andam de lado porque as articulações de suas pernas são voltadas para fora.'
    },
    'polvo': {
        emoji: '🐙',
        tamanho: 'texto-7xl',
        intervaloVelocidade: [0.8, 1.5],
        descricao: 'Polvos têm três corações e seu sangue é azul.'
    },
    'lula': {
        emoji: '🦑',
        tamanho: 'texto-7xl',
        intervaloVelocidade: [0.8, 1.5],
        descricao: 'Lulas gigantes podem atingir até 14 metros de comprimento.'
    },
    'camarão': {
        emoji: '🦐',
        tamanho: 'texto-6xl',
        intervaloVelocidade: [1.0, 1.6],
        descricao: 'O camarão pode nadar para trás rapidamente para escapar de predadores. Esse movimento pode ser chamado de "reação de fuga".'
    },
    'golfinho': {
        emoji: '🐬',
        tamanho: 'texto-8xl',
        intervaloVelocidade: [1.0, 1.7],
        descricao: 'Golfinhos são mamíferos marinhos altamente inteligentes e sociais.'
    },
    'tubarão': {
        emoji: '🦈',
        tamanho: 'texto-8xl',
        intervaloVelocidade: [1.2, 1.8],
        descricao: 'Tubarões existem há mais de 400 milhões de anos, antes mesmo dos dinossauros.'
    },
};

// Configuração de cada nível do jogo
const NIVEIS = [
    {
        nivel: 1, // Número do nível
        animais: ['tartaruga','peixe'], // Tipos de animais que aparecem
        intervaloGeracao: 1500, // Intervalo em ms para gerar novos animais
        totalAnimais: 15, // Total de animais a serem gerados 
        multiplicadorDificuldade: 1.5, // Multiplicador de velocidade
        chanceArmadilha: 0.5 // Chance (0-1) do animal estar preso
    },
    {
        nivel: 2,
        animais: ['tartaruga','peixe', 'caranguejo'],
        intervaloGeracao: 1200,
        totalAnimais: 20,
        multiplicadorDificuldade: 2.0,
        chanceArmadilha: 0.6
    },
    {
        nivel: 3,
        animais: ['tartaruga','peixe', 'caranguejo', 'polvo', 'lula'],
        intervaloGeracao: 800,
        totalAnimais: 30,
        multiplicadorDificuldade: 2.8,
        chanceArmadilha: 0.65
    },
    {
        nivel: 4,
        animais: ['tartaruga','peixe', 'caranguejo', 'polvo', 'lula', 'camarão', 'golfinho'],
        intervaloGeracao: 600,
        totalAnimais: 35, 
        multiplicadorDificuldade: 3.0,
        chanceArmadilha: 0.7
    },
    {
        nivel: 5,
        animais: ['tartaruga','peixe', 'caranguejo', 'polvo', 'lula', 'camarão', 'golfinho', 'tubarão'],
        intervaloGeracao: 500,
        totalAnimais: 45,
        multiplicadorDificuldade: 3.2,
        chanceArmadilha: 0.8
    },
];

// --- ELEMENTOS DO DOM ---
// Armazena referências a todos os elementos HTML importantes
const DOM = {
    telaInicio: document.getElementById('tela-inicio'), // Tela inicial
    telaJogo: document.getElementById('tela-jogo'), // Tela do jogo
    telaFinal: document.getElementById('tela-final'), // Tela de fim de jogo
    botaoIniciar: document.getElementById('botao-iniciar'), // Botão para iniciar
    botaoReiniciar: document.getElementById('botao-reiniciar'), // Botão para reiniciar
    containerVidas: document.getElementById('container-vidas'), // Container dos corações
    exibicaoPontuacao: document.getElementById('exibicao-pontuacao'), // Display da pontuação
    exibicaoNivel: document.getElementById('exibicao-nivel'), // Display do nível
    pontuacaoFinal: document.getElementById('pontuacao-final'), // Pontuação final
    tituloFinal: document.getElementById('titulo-final'), // Título da tela final
    mensagemFinal: document.getElementById('mensagem-final'), // Mensagem final
    mensagemNivelCompleto: document.getElementById('mensagem-nivel-completo'), // Mensagem de nível completo
    areaJogo: document.getElementById('area-jogo'), // Área onde os animais aparecem
    botaoPausar: document.getElementById('botao-pausar'), // Botão de pausa
    menuPausa: document.getElementById('menu-pausa'), // Modal do menu de pausa
    modalBestiario: document.getElementById('modal-bestiario'), // Modal do bestiário
    modalRegras: document.getElementById('modal-regras'), // Modal de regras
    modalSobre: document.getElementById('modal-sobre'), // Modal sobre o jogo
    modalConquistas: document.getElementById('modal-conquistas'), // Modal de conquistas
    botaoRetomar: document.getElementById('botao-retomar'), // Botão para retomar jogo
    botaoReiniciarPausa: document.getElementById('botao-reiniciar-pausa'), // Botão reiniciar no menu pausa
    botaoInicio: document.getElementById('botao-inicio'), // Botão voltar ao início
    botaoBestiario: document.getElementById('botao-bestiario'), // Botão abrir bestiário
    botaoConquistas: document.getElementById('botao-conquistas'), // Botão abrir conquistas
    botaoRegras: document.getElementById('botao-regras'), // Botão abrir regras
    botaoSobre: document.getElementById('botao-sobre'), // Botão abrir sobre
    botoesFechar: document.querySelectorAll('.botao-fechar'), // Todos os botões de fechar modais
    gradeBestiario: document.getElementById('grade-bestiario'), // Grade de animais do bestiário
    corpoConquistas: document.getElementById('corpo-conquistas'), // Corpo da tela de conquistas
};

// --- ESTADO DO JOGO ---
// Armazena todas as variáveis de estado do jogo
const estadoJogo = {
    indiceNivel: 0, // Índice do nível atual (0-4)
    vidas: 0, // Número de vidas restantes
    pontuacao: 0, // Pontuação atual
    animais: [], // Array com todos os animais na tela
    animaisGerados: 0, // Contador de animais gerados no nível
    estaAtivo: false, // Se o jogo está rodando
    estaPausado: false, // Se o jogo está pausado
    proximoIdAnimal: 0, // ID único para o próximo animal
    idIntervaloGeracao: null, // ID do intervalo de geração de animais
    idQuadroAnimacao: null, // ID do requestAnimationFrame
    elementosCoracao: [], // Array com elementos dos corações (vidas)
    animaisSalvos: new Set(), // Set com nomes dos animais já salvos
    totalAnimaisSalvos: 0, // Contador total de animais salvos
    recordePontuacao: 0, // Recorde de pontuação 
    vitorias: 0, // Contador de vitórias 
};

// --- LÓGICA PRINCIPAL DO JOGO ---
// Objeto que contém toda a lógica do jogo
const Jogo = {
    // Inicializa o jogo
    inicializar() {
    // 🔄 Zera todo o progresso ao abrir ou atualizar a página
    localStorage.removeItem('belugaGameSavedAnimals');
    localStorage.removeItem('belugaGameTotalSaved');
    localStorage.removeItem('belugaGameRecorde');
    localStorage.removeItem('belugaGameVitorias');

    // Também zera os valores atuais em memória
    estadoJogo.animaisSalvos = new Set();
    estadoJogo.totalAnimaisSalvos = 0;
    estadoJogo.recordePontuacao = 0;
    estadoJogo.vitorias = 0;

    // Continua a inicialização normal do jogo
    this.carregarDadosJogo();
    this.inicializarHUD();
    this.configurarOuvintes();
    DOM.telaInicio.classList.remove(CONSTANTES.CLASSES.OCULTO);
    DOM.telaJogo.classList.add(CONSTANTES.CLASSES.OCULTO);
    DOM.telaFinal.classList.add(CONSTANTES.CLASSES.OCULTO);
},


    // Carrega dados salvos do localStorage
    carregarDadosJogo() {
        // Recupera animais salvos anteriormente
        const dadosSalvos = localStorage.getItem('belugaGameSavedAnimals');
        if (dadosSalvos) {
            // Converte JSON de volta para Set
            estadoJogo.animaisSalvos = new Set(JSON.parse(dadosSalvos));
        }
        // Recupera total de animais salvos
        estadoJogo.totalAnimaisSalvos = parseInt(localStorage.getItem('belugaGameTotalSaved') || '0', 10);
    },

    // Salva progresso de animal desbloqueado
    carregarDadosDoJogo() {
        const dadosSalvos = localStorage.getItem('belugaJogoAnimaisSalvos');
        if (dadosSalvos) {
            estadoDoJogo.animaisSalvos = new Set(JSON.parse(dadosSalvos));
        }
        estadoDoJogo.totalDeAnimaisSalvos = parseInt(localStorage.getItem('belugaJogoTotalSalvos') || '0', 10);
        estadoDoJogo.recorde = parseInt(localStorage.getItem('belugaJogoRecorde') || '0', 10);
        estadoDoJogo.vitorias = parseInt(localStorage.getItem('belugaJogoVitorias') || '0', 10);
    },

    // Inicia um novo jogo
    iniciar() {
        DOM.telaInicio.classList.add(CONSTANTES.CLASSES.OCULTO); // Esconde tela inicial
        DOM.telaFinal.classList.add(CONSTANTES.CLASSES.OCULTO); // Esconde tela final
        DOM.telaJogo.classList.remove(CONSTANTES.CLASSES.OCULTO); // Mostra tela do jogo

        estadoJogo.indiceNivel = 0; // Começa no nível 1
        estadoJogo.vidas = CONSTANTES.VIDAS_INICIAIS; // Reseta vidas
        estadoJogo.pontuacao = 0; // Zera pontuação

        this.iniciarNivel(); // Inicia o primeiro nível
    },

    // Inicia um nível específico
    iniciarNivel() {
        // Cancela animação anterior se existir
        if (estadoJogo.idQuadroAnimacao) {
            cancelAnimationFrame(estadoJogo.idQuadroAnimacao);
            estadoJogo.idQuadroAnimacao = null;
        }

        // Remove todos os animais da tela anterior
        estadoJogo.animais.forEach(a => a.elemento.remove());
        estadoJogo.animais = []; // Limpa array
        estadoJogo.animaisGerados = 0; // Reseta contador
        estadoJogo.estaAtivo = true; // Ativa o jogo
        estadoJogo.estaPausado = false; // Despausa

        this.atualizarHUD(); // Atualiza interface

        // Pega configuração do nível atual
        const nivelAtual = NIVEIS[estadoJogo.indiceNivel];
        // Inicia intervalo de geração de animais
        estadoJogo.idIntervaloGeracao = setInterval(() => this.gerarAnimal(), nivelAtual.intervaloGeracao);

        this.loopJogo(); // Inicia loop principal
    },

    // Loop principal do jogo (executado a cada frame)
    loopJogo() {
        // Para o loop se o jogo não estiver ativo
        if (!estadoJogo.estaAtivo) return;

        // Só executa lógica se não estiver pausado
        if (!estadoJogo.estaPausado) {
            // Pega dimensões da área de jogo
            const { width: largura, height: altura } = DOM.areaJogo.getBoundingClientRect();
            const jogadorX = largura / 2; // Posição X do jogador (centro)
            const jogadorY = altura / 2; // Posição Y do jogador (centro)
            let vidaPerdidaNesteFrame = false; // Flag para perda de vida

            // Itera sobre todos os animais (de trás para frente para remoção segura)
            for (let i = estadoJogo.animais.length - 1; i >= 0; i--) {
                const animal = estadoJogo.animais[i];
                // Atualiza posição do animal
                animal.x += animal.vx; // Adiciona velocidade X
                animal.y += animal.vy; // Adiciona velocidade Y

                // Calcula distância ao quadrado até o jogador
                const distanciaQuadrado = Math.pow(animal.x - jogadorX, 2) + Math.pow(animal.y - jogadorY, 2);

                let deveRemover = false; // Flag para remoção
                // Verifica colisão com jogador
                if (distanciaQuadrado < CONSTANTES.RAIO_COLISAO_JOGADOR_QUADRADO) {
                    // Se o animal está preso, perde vida
                    if (animal.estaPreso) vidaPerdidaNesteFrame = true;
                    deveRemover = true; // Remove animal
                    // Verifica se saiu da tela
                } else if (animal.y > altura + 100 || animal.x < -200 || animal.x > largura + 200) {
                    deveRemover = true; // Remove animal
                }

                // Remove animal se necessário
                if (deveRemover) {
                    animal.elemento.remove(); // Remove do DOM
                    estadoJogo.animais.splice(i, 1); // Remove do array
                } else {
                    // Atualiza posição visual do animal
                    animal.elemento.style.left = `${animal.x}px`;
                    animal.elemento.style.top = `${animal.y}px`;
                }
            }

            // Processa perda de vida
            if (vidaPerdidaNesteFrame) {
                estadoJogo.vidas--; // Decrementa vida
                this.atualizarHUD(); // Atualiza interface
                // Verifica game over
                if (estadoJogo.vidas <= 0) {
                    this.finalizar(false); // Termina jogo (derrota)
                    return;
                }
            }

            // Pega configuração do nível atual
            const nivelAtual = NIVEIS[estadoJogo.indiceNivel];
            // Verifica se completou o nível (todos animais gerados e nenhum na tela)
            if (estadoJogo.animaisGerados >= nivelAtual.totalAnimais && estadoJogo.animais.length === 0) {
                // Se é o último nível, vitória
                if (estadoJogo.indiceNivel === NIVEIS.length - 1) this.finalizar(true);
                // Senão, passa de nível
                else this.nivelCompleto();
                return;
            }
        }

        // Agenda próximo frame
        estadoJogo.idQuadroAnimacao = requestAnimationFrame(() => this.loopJogo());
    },

    // Finaliza o jogo (vitória ou derrota)
    // Na função finalizar(), adicione:
    // Finaliza o jogo (vitória ou derrota)
    finalizar(venceu) {
        estadoJogo.estaAtivo = false;
        estadoJogo.estaPausado = false;
        clearInterval(estadoJogo.idIntervaloGeracao);
        cancelAnimationFrame(estadoJogo.idQuadroAnimacao);
        estadoJogo.idQuadroAnimacao = null;

        // Atualiza recorde se a pontuação atual for maior
        if (estadoJogo.pontuacao > estadoJogo.recordePontuacao) {
            estadoJogo.recordePontuacao = estadoJogo.pontuacao;
            localStorage.setItem('belugaGameRecorde', estadoJogo.recordePontuacao.toString());
        }

        // Se venceu, incrementa contador de vitórias
        if (venceu) {
            estadoJogo.vitorias++;
            localStorage.setItem('belugaGameVitorias', estadoJogo.vitorias.toString());
        }

        // Atualiza a pontuação final
        DOM.pontuacaoFinal.textContent = estadoJogo.pontuacao;

        // Define mensagens e estilos baseados no resultado
        if (venceu) {
            DOM.tituloFinal.textContent = '🎉 Você Venceu!';
            DOM.mensagemFinal.textContent = 'Parabéns! Você salvou o oceano e completou todos os níveis!';
            DOM.pontuacaoFinal.className = 'pontuacao-vitoria';
        } else {
            DOM.tituloFinal.textContent = '💔 Fim de Jogo';
            DOM.mensagemFinal.textContent = 'Os animais precisam de sua ajuda. Tente novamente!';
            DOM.pontuacaoFinal.className = 'pontuacao-derrota';
        }

        DOM.telaJogo.classList.add(CONSTANTES.CLASSES.OCULTO);
        DOM.telaFinal.classList.remove(CONSTANTES.CLASSES.OCULTO);
    },

    // Executado quando um nível é completado
    nivelCompleto() {
        estadoJogo.estaAtivo = false; // Pausa o jogo
        clearInterval(estadoJogo.idIntervaloGeracao); // Para geração de animais
        // Atualiza mensagem de nível completo
        DOM.mensagemNivelCompleto.querySelector('h2').textContent = `🎯 Nível ${NIVEIS[estadoJogo.indiceNivel].nivel} concluído!`;
        DOM.mensagemNivelCompleto.classList.remove(CONSTANTES.CLASSES.OCULTO); // Mostra mensagem

        // Aguarda 2 segundos e inicia próximo nível
        setTimeout(() => {
            DOM.mensagemNivelCompleto.classList.add(CONSTANTES.CLASSES.OCULTO); // Esconde mensagem
            estadoJogo.indiceNivel++; // Avança para próximo nível
            this.iniciarNivel(); // Inicia próximo nível
        }, 2000);
    },

    // Gera um novo animal na tela
    gerarAnimal() {
        const nivelAtual = NIVEIS[estadoJogo.indiceNivel]; // Pega configuração do nível
        // Verifica condições para parar geração
        if (!estadoJogo.estaAtivo || estadoJogo.estaPausado || estadoJogo.animaisGerados >= nivelAtual.totalAnimais) {
            // Se atingiu o total, para o intervalo
            if (estadoJogo.animaisGerados >= nivelAtual.totalAnimais) {
                clearInterval(estadoJogo.idIntervaloGeracao);
            }
            return;
        }

        // Pega dimensões da área de jogo
        const { width: largura, height: altura } = DOM.areaJogo.getBoundingClientRect();
        // Escolhe tipo de animal aleatório do nível
        const nomeAnimal = nivelAtual.animais[Math.floor(Math.random() * nivelAtual.animais.length)];
        const dadosAnimal = DADOS_ANIMAIS[nomeAnimal]; // Pega dados do animal

        // Define lado de spawn (0=topo, 1=esquerda, 2=direita)
        const lado = Math.floor(Math.random() * 3);
        let x, y; // Posição inicial
        if (lado === 0) {
            x = Math.random() * largura; // Posição X aleatória
            y = -100; // Acima da tela
        }
        else if (lado === 1) {
            x = -100; // Esquerda da tela
            y = Math.random() * altura; // Posição Y aleatória
        }
        else {
            x = largura + 100; // Direita da tela
            y = Math.random() * altura; // Posição Y aleatória
        }

        // Calcula ângulo em direção ao centro (jogador)
        const angulo = Math.atan2((altura / 2) - y, (largura / 2) - x);
        // Calcula velocidade aleatória dentro do intervalo
        const velocidade = (dadosAnimal.intervaloVelocidade[0] + Math.random() * (dadosAnimal.intervaloVelocidade[1] - dadosAnimal.intervaloVelocidade[0])) * nivelAtual.multiplicadorDificuldade;
        // Define se está preso baseado na chance do nível
        const estaPreso = Math.random() < nivelAtual.chanceArmadilha;

        // Cria objeto do animal
        const novoAnimal = {
            id: estadoJogo.proximoIdAnimal++, // ID único
            nome: nomeAnimal, // Nome do tipo
            x, // Posição X
            y, // Posição Y
            vx: Math.cos(angulo) * velocidade, // Velocidade X (componente horizontal)
            vy: Math.sin(angulo) * velocidade, // Velocidade Y (componente vertical)
            estaPreso, // Se está em armadilha
            elemento: this.criarElementoAnimal(nomeAnimal, estaPreso), // Elemento HTML
        };

        // Adiciona listener de clique no animal
        novoAnimal.elemento.addEventListener('click', () => this.tratarCliqueAnimal(novoAnimal.id));
        // Posiciona elemento na tela
        novoAnimal.elemento.style.left = `${x}px`;
        novoAnimal.elemento.style.top = `${y}px`;
        DOM.areaJogo.appendChild(novoAnimal.elemento); // Adiciona ao DOM
        estadoJogo.animais.push(novoAnimal); // Adiciona ao array
        estadoJogo.animaisGerados++; // Incrementa contador
    },

    // Trata clique em um animal
    tratarCliqueAnimal(idAnimal) {
        // Ignora clique se jogo não está ativo ou está pausado
        if (!estadoJogo.estaAtivo || estadoJogo.estaPausado) return;
        // Procura animal clicado no array
        const indiceAnimalClicado = estadoJogo.animais.findIndex(a => a.id === idAnimal);
        if (indiceAnimalClicado === -1) return; // Animal não encontrado

        const animalClicado = estadoJogo.animais[indiceAnimalClicado]; // Pega referência

        // Verifica se animal está preso
        if (animalClicado.estaPreso) {
            estadoJogo.pontuacao += 15; // Adiciona pontos
            this.salvarProgressoAnimal(animalClicado.nome); // Salva no bestiário
        } else {
            estadoJogo.vidas--; // Perde vida por clicar em animal livre
            // Verifica game over
            if (estadoJogo.vidas <= 0) {
                this.atualizarHUD(); // Atualiza interface
                this.finalizar(false); // Termina jogo
                return;
            }
        }

        animalClicado.elemento.remove(); // Remove elemento do DOM
        estadoJogo.animais.splice(indiceAnimalClicado, 1); // Remove do array
        this.atualizarHUD(); // Atualiza interface
    },

    // Adicione esta função dentro do objeto Jogo, após a função tratarCliqueAnimal()

    salvarProgressoAnimal(nomeAnimal) {
        // Adiciona o animal ao Set de animais salvos
        if (!estadoJogo.animaisSalvos.has(nomeAnimal)) {
            estadoJogo.animaisSalvos.add(nomeAnimal);
        }

        // Incrementa o total de animais salvos
        estadoJogo.totalAnimaisSalvos++;

        // Salva no localStorage
        localStorage.setItem('belugaGameSavedAnimals', JSON.stringify([...estadoJogo.animaisSalvos]));
        localStorage.setItem('belugaGameTotalSaved', estadoJogo.totalAnimaisSalvos.toString());
    },

    // Inicializa o HUD (interface do usuário)
    inicializarHUD() {
        DOM.containerVidas.innerHTML = ''; // Limpa container de vidas
        estadoJogo.elementosCoracao = []; // Reseta array de corações
        // SVG do coração
        const svgCoracao = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>`;
        // Cria um coração para cada vida inicial
        for (let i = 0; i < CONSTANTES.VIDAS_INICIAIS; i++) {
            const coracao = document.createElement('div'); // Cria elemento
            coracao.innerHTML = svgCoracao; // Adiciona SVG
            estadoJogo.elementosCoracao.push(coracao); // Adiciona ao array
            DOM.containerVidas.appendChild(coracao); // Adiciona ao DOM
        }
    },

    // Atualiza informações do HUD
    atualizarHUD() {
        // Atualiza texto da pontuação
        DOM.exibicaoPontuacao.textContent = `Pontuação: ${estadoJogo.pontuacao}`;
        // Atualiza texto do nível
        DOM.exibicaoNivel.textContent = `Nível: ${NIVEIS[estadoJogo.indiceNivel].nivel}`;
        // Atualiza visual dos corações
        estadoJogo.elementosCoracao.forEach((coracao, indice) => {
            const svg = coracao.firstChild; // Pega elemento SVG
            // Adiciona/remove classe de preenchido se tem vida
            svg.classList.toggle(CONSTANTES.CLASSES.CORACAO_PREENCHIDO, indice < estadoJogo.vidas);
            // Adiciona/remove classe de vazio se não tem vida
            svg.classList.toggle(CONSTANTES.CLASSES.CORACAO_VAZIO, indice >= estadoJogo.vidas);
        });
    },

    // Cria elemento HTML de um animal
    criarElementoAnimal(nome, estaPreso) {
        const visual = DADOS_ANIMAIS[nome]; // Pega dados visuais
        const elemento = document.createElement('div'); // Cria div
        elemento.className = "elemento-animal"; // Adiciona classe
        elemento.style.zIndex = 1;
        elemento.style.position = "fixed"
        // Monta HTML interno
        elemento.innerHTML = `
            <div>
                <span class="emoji ${visual.tamanho}">${visual.emoji}</span>
                ${estaPreso ? '<div class="sacola-plastica"></div>' : ''} 
            </div>
        `;
        return elemento; // Retorna elemento criado
    },

    // Alterna pausa do jogo
    alternarPausa(estadoForcado) {
        if (!estadoJogo.estaAtivo) return; // Ignora se jogo não está ativo
        // Define estado de pausa (usa parâmetro ou inverte estado atual)
        estadoJogo.estaPausado = typeof estadoForcado === 'boolean' ? estadoForcado : !estadoJogo.estaPausado;

        if (estadoJogo.estaPausado) {
            this.abrirModal(DOM.menuPausa); // Abre menu de pausa
            clearInterval(estadoJogo.idIntervaloGeracao); // Para geração de animais
        } else {
            this.fecharModal(DOM.menuPausa); // Fecha menu
            // Reinicia geração de animais
            estadoJogo.idIntervaloGeracao = setInterval(() => this.gerarAnimal(), NIVEIS[estadoJogo.indiceNivel].intervaloGeracao);
        }
    },

    // Retorna para a tela inicial
    irParaTelaInicial() {
        estadoJogo.estaAtivo = false; // Desativa jogo
        estadoJogo.estaPausado = false; // Remove pausa
        // Cancela animação se existir
        if (estadoJogo.idQuadroAnimacao) cancelAnimationFrame(estadoJogo.idQuadroAnimacao);
        estadoJogo.idQuadroAnimacao = null;
        clearInterval(estadoJogo.idIntervaloGeracao); // Para geração

        // Remove todos os animais da tela
        estadoJogo.animais.forEach(a => a.elemento.remove());
        estadoJogo.animais = []; // Limpa array

        // Mostra tela inicial e esconde outras
        DOM.telaInicio.classList.remove(CONSTANTES.CLASSES.OCULTO);
        DOM.telaJogo.classList.add(CONSTANTES.CLASSES.OCULTO);
        DOM.telaFinal.classList.add(CONSTANTES.CLASSES.OCULTO);
        this.fecharModal(DOM.menuPausa); // Fecha menu de pausa
    },

    // Abre um modal
    abrirModal(elementoModal) {
        elementoModal.classList.remove(CONSTANTES.CLASSES.OCULTO); // Remove classe oculto
    },

    // Fecha um modal
    fecharModal(elementoModal) {
        elementoModal.classList.add(CONSTANTES.CLASSES.OCULTO); // Adiciona classe oculto
    },

    // Abre o bestiário (coleção de animais)
    abrirBestiario() {
        DOM.gradeBestiario.innerHTML = ''; // Limpa grade
        // Itera sobre todos os tipos de animais
        Object.keys(DADOS_ANIMAIS).forEach(nome => {
            const animal = DADOS_ANIMAIS[nome]; // Pega dados do animal
            const estaDesbloqueado = estadoJogo.animaisSalvos.has(nome); // Verifica se foi salvo
            const cartao = document.createElement('div'); // Cria cartão
            // Define classes (desbloqueado se foi salvo)
            cartao.className = `cartao-bestiario ${estaDesbloqueado ? CONSTANTES.CLASSES.DESBLOQUEADO : ''}`;
            // Monta HTML do cartão
            cartao.innerHTML = `
                <div class="emoji">${animal.emoji}</div>
                <h3>${estaDesbloqueado ? nome : '???'}</h3>
                <p>${estaDesbloqueado ? animal.descricao : 'Salve este animal para saber mais.'}</p>
            `;
            DOM.gradeBestiario.appendChild(cartao); // Adiciona à grade
        });
        this.abrirModal(DOM.modalBestiario); // Abre modal
    },
    // Abre a tela de conquistas
    abrirConquistas() {
        DOM.corpoConquistas.innerHTML = `
            <div class="item-conquista">
                <span class="rotulo">Total de Animais Salvos</span>
                <span class="valor">${estadoJogo.totalAnimaisSalvos}</span>
            </div>
            <div class="item-conquista">
                <span class="rotulo">Recorde de Pontuação</span>
                <span class="valor">${estadoJogo.recordePontuacao}</span>
            </div>
            <div class="item-conquista">
                <span class="rotulo">Vitórias</span>
                <span class="valor">${estadoJogo.vitorias}</span>
            </div>
        `;
        this.abrirModal(DOM.modalConquistas);
    },

    // Configura todos os event listeners
    configurarOuvintes() {
        // Botão iniciar jogo
        DOM.botaoIniciar.addEventListener('click', () => this.iniciar());
        // Botão reiniciar jogo
        DOM.botaoReiniciar.addEventListener('click', () => this.iniciar());
        // Botão pausar
        DOM.botaoPausar.addEventListener('click', () => this.alternarPausa(true));
        // Botão retomar
        DOM.botaoRetomar.addEventListener('click', () => this.alternarPausa(false));
        // Botão reiniciar no menu de pausa
        DOM.botaoReiniciarPausa.addEventListener('click', () => {
            this.fecharModal(DOM.menuPausa); // Fecha menu
            this.iniciar(); // Reinicia jogo
        });
        // Botão voltar ao início
        DOM.botaoInicio.addEventListener('click', () => this.irParaTelaInicial());
        // Botão abrir bestiário
        DOM.botaoBestiario.addEventListener('click', () => this.abrirBestiario());
        // Botão abrir conquistas
        DOM.botaoConquistas.addEventListener('click', () => this.abrirConquistas());
        // Botão abrir regras
        DOM.botaoRegras.addEventListener('click', () => this.abrirModal(DOM.modalRegras));
        // Botão abrir sobre
        DOM.botaoSobre.addEventListener('click', () => this.abrirModal(DOM.modalSobre));
        // Botões de fechar modais (X)
        DOM.botoesFechar.forEach(botao => {
            botao.addEventListener('click', () => {
                // Fecha o modal mais próximo do botão clicado
                this.fecharModal(botao.closest('.sobreposicao-modal'));
            });
        });
    }
};

// --- INICIALIZAÇÃO ---
// Inicializa o jogo quando o DOM estiver carregado
Jogo.inicializar();