document.addEventListener("DOMContentLoaded", function () {

  // --- 1. CABEÇALHO COM MENU DE ABAS ---
  const velho = document.querySelector("header");
  if (velho) velho.remove();

  document.body.insertAdjacentHTML("afterbegin", `
    <header class="cabecalho">
      <div class="wrap barra">
        <a class="marca" href="index.html" aria-label="Goat Medical - início">
          <img src="logo.png" alt="Logo Goat Medical">
          <span><b>Goat Medical</b><small>Engenharia Clínica</small></span>
        </a>
        <nav class="abas" id="abas" aria-label="Menu principal">
          <span class="pilula"></span>
          <a href="index.html">Início</a>
          <a href="servicos.html">Serviços</a>
          <a href="equipamentos.html">Equipamentos</a>
          <a href="sobre.html">Sobre Nós</a>
          <a href="contato.html">Contato</a>
        </nav>
        <a class="zap" href="https://wa.me/5542999653970" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </header>`);

  const nav = document.getElementById("abas");
  const pilula = nav.querySelector(".pilula");
  const links = [...nav.querySelectorAll("a")];
  const atual = location.pathname.split("/").pop() || "index.html";
  const ativo = links.find(l => l.getAttribute("href") === atual) || links[0];
  ativo.classList.add("ativo");
  const mover = a => { pilula.style.left = a.offsetLeft + "px"; pilula.style.width = a.offsetWidth + "px"; };
  mover(ativo);
  addEventListener("resize", () => mover(ativo));
  addEventListener("load", () => mover(ativo));
  if (document.fonts) document.fonts.ready.then(() => mover(ativo));
  // a pílula acompanha o mouse/teclado e volta para a aba atual
  links.forEach(l => {
    l.addEventListener("mouseenter", () => mover(l));
    l.addEventListener("focus", () => mover(l));
  });
  nav.addEventListener("mouseleave", () => mover(ativo));
  nav.addEventListener("focusout", () => mover(ativo));
  if (ativo.scrollIntoView) nav.scrollLeft = Math.max(0, ativo.offsetLeft - 20);

  // --- 2. RODAPÉ ---
  const rodapeVelho = document.querySelector("footer.rodape");
  if (rodapeVelho) rodapeVelho.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="rodape">
      <p>&copy; ${new Date().getFullYear()} Goat Medical - Engenharia Clínica. Todos os direitos reservados.</p>
      <div class="info">
        <span>📧 atendimento.goatmedical@gmail.com</span>
        <span>📞 (42) 99965-3970</span>
      </div>
      <div class="redes">
        <a href="https://www.instagram.com/goatmedical" target="_blank" rel="noopener">📸 Instagram</a>
        <a href="https://www.linkedin.com/company/goat-medical" target="_blank" rel="noopener">💼 LinkedIn</a>
      </div>
    </footer>`);

  // --- 3. ABAS DE CONTEÚDO (Início: Preventiva / Corretiva / Calibração) ---
  const botoes = [...document.querySelectorAll(".lista-abas button")];
  const escolher = (b, foco) => {
    botoes.forEach(x => x.setAttribute("aria-selected", x === b));
    document.querySelectorAll(".painel").forEach(p => p.classList.toggle("on", p.id === b.getAttribute("aria-controls")));
    if (foco) b.focus();
  };
  botoes.forEach((b, i) => {
    b.addEventListener("click", () => escolher(b));
    b.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") escolher(botoes[(i + 1) % botoes.length], true);
      if (e.key === "ArrowLeft") escolher(botoes[(i - 1 + botoes.length) % botoes.length], true);
    });
  });

  // --- 4. BUSCA NOS EQUIPAMENTOS ---
  const campo = document.getElementById("busca");
  if (campo) {
    const itens = [...document.querySelectorAll(".eq")];
    const cont = document.getElementById("contagem");
    const vazio = document.querySelector(".vazio");
    const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filtrar = () => {
      const q = norm(campo.value.trim());
      let n = 0;
      itens.forEach(i => { const ok = norm(i.textContent).includes(q); i.style.display = ok ? "" : "none"; if (ok) n++; });
      cont.textContent = n + (n === 1 ? " equipamento" : " equipamentos");
      vazio.style.display = n ? "none" : "block";
    };
    campo.addEventListener("input", filtrar);
    filtrar();
  }

  // --- 5. CONTATO: serviço escolhido na página de serviços ---
  const alvo = document.getElementById("interesse");
  if (alvo) {
    const nomes = {
      calibracao: "Calibração de Termômetros e Termohigrômetros",
      esfigmomanometro: "Esfigmomanômetros",
      laudos: "Laudos Técnicos",
      preventiva: "Manutenção Preventiva",
      corretiva: "Manutenção Corretiva",
      gestao: "Gestão de Parque Tecnológico"
    };
    const s = nomes[new URLSearchParams(location.search).get("servico")];
    if (s) {
      alvo.style.display = "block";
      alvo.textContent = "Serviço de interesse: " + s;
      const zap = document.getElementById("zap-eng");
      zap.href = "https://wa.me/5542999653970?text=" + encodeURIComponent("Olá! Gostaria de um orçamento de: " + s);
    }
  }
});
