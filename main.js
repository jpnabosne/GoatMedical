document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Cria o HTML do cabeçalho com as classes EXATAS do seu CSS
    const menuHTML = `
        <header class="cabecalho">
            <div class="logo-container">
                <div>
                    <h1 class="nome-empresa" style="font-size: 1.5em; margin:0;">Goat Medical</h1>
                    <span class="subtitulo" style="font-size: 0.8em;">Engenharia Clínica</span>
                </div>
            </div>

            <nav class="menu-navegacao">
                <ul>
                    <li><a href="index.html">Início</a></li>
                    <li><a href="servicos.html">Serviços</a></li>
                    <li><a href="equipamentos.html">Equipamentos</a></li>
                    <li><a href="contato.html" class="btn-contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    `;

    // 2. Injeta esse HTML no topo da página (dentro do body)
    document.body.insertAdjacentHTML('afterbegin', menuHTML);

    // 3. Marca o link da página atual como "ativo" (azul)
    const paginaAtual = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('.menu-navegacao a');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === paginaAtual || (paginaAtual === "" && href === "index.html")) {
            link.classList.add('ativo');
        }
    });
});
