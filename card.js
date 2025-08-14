const addproduct = () => {
    const productField = document.getElementById('product_name');
    const quantityField = document.getElementById('product_quantity');
    const  product = productField.value ;
    const quentity = quantityField.value;
    productField.value='';
    quantityField.value='';

    console.log(product,quentity);
    displayProduct(product,quentity);

}

const displayProduct = (product,quentity) =>{
    const ul = document.getElementById('product_contenar');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quentity}`;
    ul.appendChild(li);
}