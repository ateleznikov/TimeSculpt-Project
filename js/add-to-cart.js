var addtocart = document.getElementById('addtocart');
addtocart.addEventListener("click", addToCart);

function addToCart() {
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
}