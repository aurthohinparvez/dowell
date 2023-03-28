const fetchProductData = () => {
  fetch(`https://100096.pythonanywhere.com/product_list/`)
    .then((res) => res.json())
    .then((data) => {
      const productListDiv = document.getElementById("product-btn");
      let html = "";
     
      const showData = data.product_list;
      if (showData.length > 0) {
        for (const product of showData) {         
        
          html += `
            <li>${product}</li>
          `;
        }   
      }
      productListDiv.innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
}

window.onload = () => {
  fetchProductData();
}
