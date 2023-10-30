const btnEl = {
    btn: document.querySelector('#btn')
}

btnEl.btn.addEventListener('click', () => { 
    alert="Delete!"
})

products.forEach(productItem => { 
    productsListEl.innerHTML += `
    <li class="productsList_item">
        <h2>${productItem.name}</h2>
        <h3>${productItem.price}</h3>
        <button id="btn">Delete</button>
    </li>
    `
})