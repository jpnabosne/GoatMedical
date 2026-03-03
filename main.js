document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. GERENCIAMENTO DO CABEÇALHO (HEADER) ---
    const headerExistente = document.querySelector('header');
    if (headerExistente) {
        headerExistente.remove();
    }

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
                    <li><a href="sobre.html">Sobre Nós</a></li>
                    <li><a href="contato.html" class="btn-contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', menuHTML);

    // --- 2. GERENCIAMENTO DO RODAPÉ (FOOTER) ---
    const footerExistente = document.querySelector('footer');
    if (footerExistente) {
        footerExistente.remove();
    }

    const footerHTML = `
        <footer class="rodape">
            <div class="rodape-conteudo">
                <p>&copy; 2026 Goat Medical - Engenharia Clínica. Todos os direitos reservados.</p>
                
                <div class="contato-info">
                    <span>📧 atendimento.goatmedical@gmail.com</span>
                    <span>📞 (42) 99965-3970</span>
                </div>

                <div class="redes-sociais-footer">
                    <a href="https://www.instagram.com/goat_medical" target="_blank">
                        <span class="icone-rede">📸</span> Instagram
                    </a>
                    <a href="https://www.linkedin.com/company/goat-medical" target="_blank">
                        <span class="icone-rede">💼</span> LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // --- 3. MARCAR LINK ATIVO NO MENU ---
    const paginaAtual = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('.menu-navegacao a');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === paginaAtual || ((paginaAtual === "" || paginaAtual === "/") && href === "index.html")) {
            link.classList.add('ativo');
        }
    });
});
