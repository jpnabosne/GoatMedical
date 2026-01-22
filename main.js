document.addEventListener("DOMContentLoaded", function() {
    
    // Remove cabeçalho duplicado se existir
    const headerExistente = document.querySelector('header');
    if (headerExistente) {
        headerExistente.remove();
    }

    // Cria o HTML
    const menuHTML = `
        <header class="cabecalho">
            <div class="logo-container">
                <img src="logo.png" alt="Logo Goat Medical" class="logo-icone-img">
                
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                    <span class="nome-empresa" style="line-height: 1;">Goat Medical</span>
                    <span style="color: #ccc;">|</span> 
                    <span class="subtitulo" style="margin: 0; line-height: 1;">Engenharia Clínica</span>
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

    document.body.insertAdjacentHTML('afterbegin', menuHTML);

    // Marca o link ativo
    const paginaAtual = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('.menu-navegacao a');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === paginaAtual || ((paginaAtual === "" || paginaAtual === "/") && href === "index.html")) {
            link.classList.add('ativo');
        }
    });
});
