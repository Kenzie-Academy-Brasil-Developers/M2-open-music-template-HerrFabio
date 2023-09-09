const htmlElement = document.querySelector('html');
const darkModeButton = document.querySelector('.button_darkMode');

console.log('Clique no botão dark mode');
darkModeButton.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-mode'); // Alternar a classe dark-mode no elemento HTML

    const isDarkMode = htmlElement.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode); // Salvar a preferência no localStorage

    // Atualizar o ícone com base no modo escuro
    const iconElement = darkModeButton.querySelector('i');
    if (isDarkMode) {
        iconElement.classList.remove('fa-moon');
        iconElement.classList.add('fa-sun');
    } else {
        iconElement.classList.remove('fa-sun');
        iconElement.classList.add('fa-moon');
    }
});

// Verifique a preferência do usuário no localStorage e aplique-a ao carregar a página
const storedDarkMode = localStorage.getItem('darkMode');
if (storedDarkMode === 'true') {
    htmlElement.classList.add('dark-mode');
    // Atualizar o ícone com base no modo escuro
    const iconElement = darkModeButton.querySelector('i');
    iconElement.classList.remove('fa-moon');
    iconElement.classList.add('fa-sun');
} else {
    // Certifique-se de que o ícone esteja definido para 'fa-moon' quando o modo escuro não estiver ativado
    const iconElement = darkModeButton.querySelector('i');
    iconElement.classList.remove('fa-sun');
    iconElement.classList.add('fa-moon');
}
