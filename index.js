// const image = document.getElementById("Product images");
// const name = document.getElementById("Product name");
// const price = document.getElementById("Product price");
// const describe = document.getElementById("Description")
// const img = document.getElementById("img")

// fetch("https://fakestoreapi.com/products")
// .then((response) =>{
//     response.json()
// })

// .then((data) =>{
//     console.log(data);
//     image.src = data(0).image
//     name.textContent = data(0).description
// })
//apikey
let root = document.getElementById("put");
    let data = () => {
     //  fetch my api
        url = "https://fakestoreapi.com/products";
        fetch(url).then((response) => {
        
            return response.json();
        }).then(data => {
        
           data.forEach(element => {
            
               root.innerHTML += '<div class="card-container" ><div class="img"><img src="' + element.image
                   + '" alt=""></div><div class="name">' + element.title + '</div><div class="price"><strong>$' + element.price + '</strong></div><div class="description">' + element.description.slice(0,100)+'...</div><div class="btn-group"><button class="primary">Add to Cart</button> <button>Read More</button></div></div ></div>';
           });
        }).catch(err => {
        
        })
    }
data()