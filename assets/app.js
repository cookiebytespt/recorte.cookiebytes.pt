// Language switch. English lives in the HTML; Portuguese is swapped in from here.
// Order of preference: ?lang=, the saved choice, then the browser language.
(function () {
  var pt = {
    "doc.title": "Recorte — estúdio de corte para macOS",
    "doc.desc": "O Recorte é uma app nativa para macOS para plotters de corte, feita para designers. Desenhe ou importe a arte, corte vinil e faça Imprimir e Cortar com a Liyu GF-1261, sem máquina virtual Windows.",
    "skip": "Saltar para o conteúdo",
    "nav.features": "Funcionalidades",
    "nav.how": "Como funciona",
    "nav.cutters": "Máquinas",
    "nav.support": "Suporte",
    "nav.download": "Descarregar",

    "hero.eyebrow": "Estúdio de corte para macOS",
    "hero.title": "A sua plotter de corte, nativamente no Mac.",
    "hero.lead": "O Recorte é uma app nativa para macOS para plotters de corte, feita para designers. Desenhe ou importe a sua arte, carregue em <kbd>⌘P</kbd> e a app mostra-lhe como carregar a máquina. Imprimir e Cortar incluído, sem máquina virtual Windows.",
    "hero.cta": "Descarregar para macOS",
    "hero.cta2": "Ver no GitHub",
    "hero.meta1": "macOS 14 ou posterior",
    "hero.meta2": "Funciona hoje com a Liyu GF-1261",
    "hero.alt": "O editor do Recorte em modo escuro: uma folha de Imprimir e Cortar com a arte, o contorno de corte e quatro marcas de registo, a barra de ferramentas de desenho e uma barra lateral com o tamanho da tela e as camadas.",

    "what.title": "Da arte ao autocolante cortado, sem sair do Mac.",
    "what.1.t": "Desenhar ou importar",
    "what.1.d": "O Recorte abre numa tela vazia. Desenhe formas, escreva texto ou traga ficheiros Illustrator, PDF, SVG e DXF como linhas de corte.",
    "what.2.t": "Cortar vinil",
    "what.2.d": "Escolha o tamanho, as cópias e o material e siga os passos no ecrã para carregar o vinil e definir a origem.",
    "what.3.t": "Imprimir e Cortar",
    "what.3.d": "Imprima com quatro marcas de registo em qualquer impressora. A câmara da máquina encontra-as e corta à volta da impressão.",

    "feat.eyebrow": "Funcionalidades",
    "feat.title": "Feito para designers, não para técnicos.",
    "feat.a.t": "Uma tela que funciona por si só",
    "feat.a.d": "Ferramentas de retângulo, elipse, linha, polígono, estrela, desenho livre e texto, com todas as medidas em milímetros. O texto é convertido em contornos ao cortar e as camadas podem ser ocultadas ou bloqueadas.",
    "feat.a.1": "Abre ficheiros Illustrator (.ai), PDF, SVG e DXF",
    "feat.a.2": "Editar pontos, suavizar curvas e deslocar linhas",
    "feat.a.3": "Projetos guardados como ficheiros <code>.recorte</code>",
    "feat.a.alt": "A tela do Recorte com as ferramentas de desenho e a lista de camadas.",
    "feat.b.t": "Imprimir e Cortar, com o contorno traçado por si",
    "feat.b.d": "Coloque um ficheiro PDF, Illustrator, PNG ou JPEG e o Criar contorno de corte traça o contorno à distância que escolher. As marcas ficam à volta da arte ou nas margens da página, e ficam vermelhas se saírem da página.",
    "feat.b.1": "Seguir a arte, ou usar uma caixa retangular ou arredondada",
    "feat.b.2": "Recorta as zonas transparentes dentro da imagem",
    "feat.b.3": "Os contornos continuam editáveis, ponto a ponto",
    "feat.b.alt": "Uma folha de Imprimir e Cortar no Recorte: arte com um contorno de corte e quatro marcas de registo à volta.",
    "feat.c.t": "Uma só janela de Saída para todos os trabalhos",
    "feat.c.d": "A pré-visualização mostra a folha com as marcas, a área segura e onde o corte começa. Imprima diretamente, guarde um PDF ou uma imagem para a gráfica, ou salte a impressão quando a folha já estiver impressa.",
    "feat.c.1": "Predefinições de material para velocidade e pressão",
    "feat.c.2": "Desvio da lâmina, sobrecorte e corte de teste",
    "feat.c.3": "Cópias, espelhar para vinil termocolante, guardar HPGL",
    "feat.c.alt": "A janela de Saída em modo Imprimir e Cortar, com a pré-visualização da página impressa e as definições das marcas de registo e da impressão.",
    "feat.d.t": "Mostra-lhe como carregar a máquina",
    "feat.d.d": "Depois de carregar em Cortar, o Recorte desenha a máquina e mostra onde fica a folha, onde começa a lâmina e que botão premir. Se as marcas não forem encontradas, tenta de novo com a mesma folha, sem reimprimir.",
    "feat.d.alt": "O assistente de corte: um desenho da Liyu GF-1261 com a folha impressa carregada e quatro passos numerados para carregar a folha.",

    "more.title": "Também na app",
    "more.1.t": "Sem drivers",
    "more.1.d": "O Recorte encontra a máquina por USB e envia-lhe o trabalho diretamente. Só envia para o ID USB da própria máquina, por isso um trabalho nunca vai parar a uma impressora por engano.",
    "more.2.t": "Familiar para quem usa o SignMaster",
    "more.2.d": "Os mesmos passos, com nomes mais simples. As dicas de ajuda indicam o nome de cada definição no SignMaster.",
    "more.3.t": "Ajuda em todas as definições",
    "more.3.d": "Passe o cursor sobre qualquer definição para ver o que faz, ou clique em ⓘ para uma explicação curta com um desenho.",
    "more.4.t": "Seis predefinições de material",
    "more.4.d": "Vinil normal e espesso, vinil termocolante, flock, cartolina e refletor, como pontos de partida para um corte de teste.",
    "more.5.t": "Quatro idiomas",
    "more.5.d": "Inglês, português, francês e espanhol. O Recorte segue o idioma do seu Mac.",
    "more.6.t": "Diagnóstico incluído",
    "more.6.d": "Uma verificação segura da ligação e um ficheiro de registo que pode enviar ao suporte quando a máquina não responde.",

    "how.eyebrow": "Como funciona",
    "how.title": "Do desenho ao autocolante cortado em quatro passos.",
    "how.1.t": "Ligue a máquina",
    "how.1.d": "Ligue a máquina ao Mac com o cabo USB e ligue-a no interruptor. Sem drivers e sem configurar impressoras.",
    "how.2.t": "Desenhe ou traga o seu desenho",
    "how.2.d": "Desenhe formas e escreva texto na tela, importe linhas de corte ou coloque arte para imprimir.",
    "how.3.t": "Escolha Só cortar ou Imprimir e Cortar",
    "how.3.d": "Só cortar recorta formas em vinil liso. Imprimir e Cortar imprime a sua arte com marcas de registo e depois corta à volta. Carregue em <kbd>⌘P</kbd> quando estiver pronto.",
    "how.4.t": "Carregue a máquina e corte",
    "how.4.d": "O Recorte mostra como carregar o vinil ou a folha impressa e onde colocar a lâmina. Com um material novo, faça primeiro um corte de teste.",
    "how.alt": "A janela Primeiros passos do Recorte, com os quatro passos.",

    "cut.eyebrow": "Máquinas",
    "cut.title": "Que máquinas funcionam com o Recorte?",
    "cut.ok": "Suportada",
    "cut.untested": "Ainda por testar",
    "cut.ask": "A pedido",
    "cut.1.d": "Só cortar e Imprimir e Cortar por USB. Os trabalhos que o Recorte envia são iguais, byte a byte, aos do SignMaster.",
    "cut.2.t": "Outras Liyu da série GF",
    "cut.2.d": "Podem funcionar, mas ninguém as experimentou. Se tiver uma, diga-nos como correu.",
    "cut.3.t": "Outras plotters HPGL",
    "cut.3.d": "O Recorte inclui um transporte por porta série para plotters HPGL. Cada máquina tem ainda de ser verificada com alguém que a tenha.",

    "req.title": "Peça suporte para a sua máquina",
    "req.lead": "Os fabricantes raramente publicam a forma como as máquinas comunicam, por isso cada modelo novo começa com informação de quem tem um. Abra um pedido no GitHub e inclua:",
    "req.1": "A marca e o modelo, e como se liga (USB, porta série ou rede).",
    "req.2": "O software que usa hoje com a máquina, e em que sistema.",
    "req.3": "Um ficheiro de trabalho guardado nesse software (PLT ou HPGL) com uma forma simples, por exemplo um quadrado.",
    "req.4": "Se puder, uma captura USB do envio desse trabalho. O <a href=\"https://github.com/cookiebytespt/Recorte/blob/main/docs/debugging/README.md\">guia de depuração</a> (em inglês) mostra como fazer uma.",
    "req.5": "Se pode experimentar versões de teste na sua máquina.",
    "req.note": "Os pedidos que trazem um ficheiro de trabalho e alguém disponível para testar avançam mais depressa.",
    "req.cta": "Pedir uma máquina no GitHub",
    "req.cta2": "Ou escreva para hello@cookiebytes.pt",

    "sup.eyebrow": "Suporte",
    "sup.title": "Ajuda quando algo não corta bem.",
    "sup.1.t": "Comunicar um problema",
    "sup.1.d": "Na app, escolha <strong>Ajuda ▸ Comunicar um problema…</strong>, ou abra uma issue no GitHub.",
    "sup.1.a": "Abrir uma issue",
    "sup.2.t": "Ler a ajuda",
    "sup.2.d": "Ligação, corte, Imprimir e Cortar, velocidade e pressão, e uma tabela de resolução de problemas. A mesma página abre a partir do menu Ajuda da app.",
    "sup.2.a": "Abrir a página de ajuda",
    "sup.3.t": "Fale connosco",
    "sup.3.d": "O Recorte é feito pela CookieBytes, um pequeno estúdio em Portugal. Escreva-nos em português ou em inglês.",
    "sup.status": "<strong>Em desenvolvimento inicial.</strong> Nem todas as funcionalidades foram ainda experimentadas na máquina. A app também ainda não está notarizada: da primeira vez que a abrir, clique-lhe com o botão direito e escolha <strong>Abrir</strong>.",

    "get.title": "Descarregar o Recorte",
    "get.d": "Duas formas de instalar. Requer macOS 14 ou posterior.",
    "get.brew.tag": "Opção 1",
    "get.brew.t": "Com o Homebrew",
    "get.brew.d": "Cole isto no Terminal. O Homebrew instala o Recorte e pode atualizá-lo mais tarde.",
    "get.copy": "Copiar",
    "get.copied": "Copiado",
    "get.gh.tag": "Opção 2",
    "get.gh.t": "Descarregar do GitHub",
    "get.gh.d": "Obtenha o zip, descomprima-o e mova o Recorte para a pasta Aplicações. Da primeira vez, clique na app com o botão direito e escolha <strong>Abrir</strong>.",
    "get.cta": "Descarregar do GitHub",
    "get.lic": "O código está no GitHub sob a <a href=\"https://github.com/cookiebytespt/Recorte/blob/main/LICENSE\">licença MIT com a Commons Clause</a>: pode usá-lo, estudá-lo e alterá-lo, mas não vendê-lo.",
    "foot.lic": "Licença",

    "nav.help": "Ajuda",
    "help.doc.title": "Ajuda do Recorte — ligar, cortar, Imprimir e Cortar e resolução de problemas",
    "help.doc.desc": "Como usar o Recorte: instalar, ligar a Liyu GF-1261, desenhar e importar, cortar vinil, Imprimir e Cortar, definir velocidade, pressão e lâmina, e resolver os problemas mais comuns.",
    "help.toc": "Nesta página",
    "help.eyebrow": "Ajuda",
    "help.title": "Ajuda do Recorte",
    "help.lead": "Da instalação da app a um corte limpo. A mesma página abre a partir do menu Ajuda da app.",
    "help.more.t": "Ainda com dúvidas?",
    "help.more.d": "Abra uma issue no GitHub ou escreva para <a href=\"mailto:hello@cookiebytes.pt?subject=Recorte\">hello@cookiebytes.pt</a>. Se a máquina não responder, anexe o ficheiro de registo da janela de diagnóstico.",
    "help.more.cutter": "Pedir outra máquina",

    "foot.made": "Feito pela"
  };

  var nodes = [].slice.call(document.querySelectorAll("[data-i18n],[data-i18n-html],[data-i18n-alt]"));
  var meta = document.querySelector('meta[name="description"]');
  var en = { title: document.title, desc: meta ? meta.content : "" };
  var page = document.body.classList.contains("help-page") ? "help." : "";

  // Remember the English that shipped in the HTML so switching back needs no second dictionary.
  nodes.forEach(function (n) {
    if (n.hasAttribute("data-i18n")) n._en = n.textContent;
    if (n.hasAttribute("data-i18n-html")) n._enHtml = n.innerHTML;
    if (n.hasAttribute("data-i18n-alt")) n._enAlt = n.getAttribute("alt");
  });

  function apply(lang) {
    var isPt = lang === "pt";
    nodes.forEach(function (n) {
      var k;
      if ((k = n.getAttribute("data-i18n"))) n.textContent = isPt && pt[k] ? pt[k] : n._en;
      if ((k = n.getAttribute("data-i18n-html"))) n.innerHTML = isPt && pt[k] ? pt[k] : n._enHtml;
      if ((k = n.getAttribute("data-i18n-alt"))) n.setAttribute("alt", isPt && pt[k] ? pt[k] : n._enAlt);
    });
    document.documentElement.lang = isPt ? "pt-PT" : "en";
    document.title = isPt ? pt[page + "doc.title"] : en.title;
    if (meta) meta.content = isPt ? pt[page + "doc.desc"] : en.desc;
    // Whole blocks that exist once per language (the help text).
    [].forEach.call(document.querySelectorAll("[data-only]"), function (n) {
      n.hidden = n.getAttribute("data-only") !== lang;
    });
    [].forEach.call(document.querySelectorAll(".lang button"), function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
  }

  function saved() { try { return localStorage.getItem("recorte-lang"); } catch (e) { return null; } }
  function save(l) { try { localStorage.setItem("recorte-lang", l); } catch (e) {} }

  var q = new URLSearchParams(location.search).get("lang");
  var lang = q === "pt" || q === "en" ? q : saved() || ((navigator.language || "").toLowerCase().indexOf("pt") === 0 ? "pt" : "en");
  if (lang === "pt") apply("pt");

  // Copy buttons (the Homebrew command).
  [].forEach.call(document.querySelectorAll("[data-copy]"), function (b) {
    b.addEventListener("click", function () {
      var text = document.querySelector(b.getAttribute("data-copy")).textContent;
      var done = function () {
        var label = b.textContent;
        b.textContent = document.documentElement.lang === "en" ? b.getAttribute("data-done") : pt["get.copied"];
        setTimeout(function () { b.textContent = label; }, 1600);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
    });
  });

  [].forEach.call(document.querySelectorAll(".lang button"), function (b) {
    b.addEventListener("click", function () {
      var l = b.getAttribute("data-lang");
      apply(l);
      save(l);
    });
  });
})();
