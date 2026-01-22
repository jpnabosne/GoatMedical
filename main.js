// main.js

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. O HTML do seu Menu (Você só mexe aqui agora!)
    const menuHTML = `
        <header class="cabecalho">
            <div class="logo">
                <h1>Goat Medical</h1> 
                </div>
            <nav>
                <ul class="nav-menu">
                    <li><a href="index.html">Início</a></li>
                    <li><a href="servicos.html">Serviços</a></li>
                    <li><a href="equipamentos.html">Equipamentos</a></li>
                    <li><a href="contato.html" class="btn-contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    `;

    // 2. Injeta o menu no topo do site
    document.body.insertAdjacentHTML('afterbegin', menuHTML);

    // 3. Lógica para deixar o link "Ativo" (Azul) automaticamente
    const paginaAtual = window.location.pathname.split("/").pop(); // Pega "index.html"
    const links = document.querySelectorAll('.nav-menu a');

    links.forEach(link => {
        // Se o link for igual a pagina atual, adiciona a classe
        if (link.getAttribute('href') === paginaAtual) {
            link.classList.add('ativo');
        }
        // Caso especial: Se estiver na raiz (sem nome de arquivo), marca o index
        if (paginaAtual === "" && link.getAttribute('href') === "index.html") {
            link.classList.add('ativo');
        }
    });
});
