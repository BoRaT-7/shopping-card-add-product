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

const getstorshoppingcard = () =>{
    let card = {};
    const storecard = localStorage.getItem('card');
    if(storecard){
        card = JSON.parse(storecard);
    }
    return card;
}
const saveproducttolocalstore = (product,quentity) => {
       const card =getstorshoppingcard();
       card[product] = quentity;
       const cardStringified = JSON.stringify(card);
       localStorage.setItem('card', cardStringified)

}

const displayProductfromlocalstorg =()=>{
     const savecard = getstorshoppingcard();
      console.log(savecard);
      for(const product in savecard ){
        const quantity = savecard[product];
        console.log(product,quantity);
        displayProduct(product,quantity);
      }
}