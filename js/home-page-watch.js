async function fetchWatchesData() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/ateleznikov/watches/main/watches.json');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

async function displayWatches() {
  const watchContainer = document.getElementById('watchContainer');
  let watchCount = 0;

  try {
    const watches = await fetchWatchesData();
    const shuffledWatches = watches.sort(() => 0.5 - Math.random());
    const selectedWatches = shuffledWatches.slice(0, 3);

    selectedWatches.forEach((watch) => {
      const watchCard = document.createElement('div');
      watchCard.classList.add('col');
      watchCard.classList.add('d-flex');
      watchCard.classList.add('justify-content-center');
      watchCard.classList.add('align-items-center');
      watchCard.classList.add('flex-column');
      watchCard.classList.add('watchCard');
      watchCard.classList.add('m-2');
      watchCard.innerHTML = `
        <h2>${watch.name}</h2>
        <p>${watch.brand}</p>
        <img src="${watch.image}" alt="${watch.name}" style="max-width: 200px; max-height: 200px; object-fit: cover; ">
        <p class = "pt-2">${watch.price}</p>
        <a href="#" class="btn btn-light addtocart mb-2" id="addtocart">Add to Cart</a>
      `;

      watchCard.addEventListener('mouseenter', () => {
        watchCard.classList.add('hovered');
      });

      watchCard.addEventListener('mouseleave', () => {
        watchCard.classList.remove('hovered');
      });

      const addtocart = watchCard.querySelector('.addtocart');
      addtocart.addEventListener("click", addToCart);

      watchContainer.appendChild(watchCard);

      watchCount++;
      if (watchCount % 3 === 0) {
        const w100 = document.createElement('div');
        w100.classList.add('w-100');
        watchContainer.appendChild(w100);
      }
    });
  } catch (error) {
    console.error('Error displaying watches:', error);
  }
}

document.addEventListener('DOMContentLoaded', displayWatches);

function addToCart() {
  var total = localStorage.getItem('checkout');
  total++;
  localStorage.setItem('checkout', total);
  document.querySelector('#checkout').innerHTML = total;
}