const productTypeSelectElement = document.getElementById("type-select");
const productNameElement = document.getElementById("product-name");
const productCountElement = document.getElementById("product-count");
const addProductButton =document.getElementsByClassName("add-product")[0];
const clearListButton =document.getElementsByClassName("clear-list")[0];
const productItemContainer = document.querySelector(".product-item");

function addProduct(){
    
    const ProductList = {
        type: productTypeSelectElement.value,
        name: productNameElement.value,
        count: Number(productCountElement.value),
    };
   
    if(ProductList.type == ' ' || ProductList.name == ' ' || ProductList.count <=0 || ProductList.count == NaN)
    {
        alert ('Wrong input, Try again!');
    }else{
        const newTag = document.createElement("span");
        newTag.textContent = `Тип продукта: ${ProductList.type} Название продукта: ${ProductList.name} количество: ${ProductList.count}`;
        productItemContainer.append(newTag);
    }
}


function clearProductList(){
    ProductList = [];
    productItemContainer.innerHTML = "";
}



addProductButton.addEventListener('click', addProduct);
clearListButton.addEventListener('click', clearProductList);

