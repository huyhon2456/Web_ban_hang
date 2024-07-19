function redirectToDetail(name, price, imgSrc) {
    const product = { name, price, imgSrc };
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'chitiet.html';
}


