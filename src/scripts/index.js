import { products, categories } from "./productsData.js";

function createCard(product) {
    const card = document.createElement('li');
    const infoDiv = document.createElement('div');

    const img = document.createElement('img');
    img.src = product.img;
    card.appendChild(img);

    const bandAndYear = document.createElement('p');
    bandAndYear.textContent = `${product.band} - ${product.year}`;
    infoDiv.appendChild(bandAndYear);

    const albumTitle = document.createElement('h2');
    albumTitle.textContent = product.title;
    infoDiv.appendChild(albumTitle);

    const priceAndButton = document.createElement('span');
    const price = document.createElement('p');
    price.textContent = `Preço: R$ ${product.price.toFixed(2)}`;
    const byuButton = document.createElement('button');
    byuButton.textContent = 'Comprar';
    priceAndButton.appendChild(price);
    priceAndButton.appendChild(byuButton);
    infoDiv.classList.add('container_info');
    infoDiv.appendChild(priceAndButton);
    card.appendChild(infoDiv);

    return card
}


function renderCards(arr) {
    const containerRenderCard = document.getElementById('containerRenderCard');
    const containerCards = document.getElementById('containerCards');

    containerCards.innerHTML = '';
    
    arr.forEach(product => {
        const card = createCard(product);
        card.classList.add('card_product');
        containerRenderCard.appendChild(card);
        containerCards.appendChild(card);
    });
}


renderCards(products);

function renderButton(arr) {
    const containerButton = document.getElementById('containerButton');

    arr.forEach(item => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = item;
        button.classList.add('button_gender')
        li.appendChild(button);
        containerButton.appendChild(li);
    });
}

renderButton(categories);

function addEventListenersToButtons() {
    const buttons = document.querySelectorAll('.button_gender');
    const input = document.getElementById('priceInput'); // Adicionei essa linha para coletar o input
    const priceParagrath = document.getElementById('priceParagrath');

    let filteredProducts = products; // Variável para armazenar o array filtrado
    let categoryIndex = 0; // Variável para armazenar o índice do botão clicado
    let inputValue = input.value; // Variável para armazenar o valor do input
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const categoryText = button.innerText;
        categoryIndex = categories.findIndex(category => category === categoryText); // Atualiza o índice do botão clicado
  
        if (categoryText === "Todos") {
          filteredProducts = products.filter(product => product.price <= parseFloat(inputValue));
        } else {
          filteredProducts = products.filter(product => product.category === categoryIndex && product.price <= parseFloat(inputValue));
        }
  
        renderCards(filteredProducts);
      });
    });
  
    input.addEventListener('input', () => {
      inputValue = input.value; // Atualiza o valor do input
  
      if (categoryIndex === 0) {
        filteredProducts = products.filter(product => product.price <= parseFloat(inputValue));
      } else {
        filteredProducts = products.filter(product => product.category === categoryIndex && product.price <= parseFloat(inputValue));
      }
  
      renderCards(filteredProducts);

      priceParagrath.textContent = `Até R$ ${inputValue}`;

    });
  }

  addEventListenersToButtons();

