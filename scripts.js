const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');
const content = document.getElementById('content');

// Alternar a exibição do menu lateral
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

// Função para carregar uma página HTML no conteúdo principal
function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error loading page');
            }
            return response.text();
        })
        .then(html => {
            content.innerHTML = html;
        })
        .catch(error => {
            content.innerHTML = `<p>Error loading content: ${error.message}</p>`;
        });
}
