console.log(document)


function getElementById(id) {  //id input niye element return kore de
    const element = document.getElementById(id);
    return element;
}

//traditional way of adding event listener--------------->>>
// document.getElementById("cart-btn-1").addEventListener("click", function () {
//     const title = document.getElementById("card-title-1").innerText;
//     const price = document.getElementById("card-price-1").innerText;
//     //total price ke dorbo

//     const totalPrice = document.getElementById("total-price").innerText

//     //calculate 
//     currentTotal = Number(price) + Number(totalPrice);
//     //update 
//     getElementById("total-price").innerText = currentTotal.toFixed(2);

//     //card-container
//     const cardContainer = document.getElementById("card-container")

//     // akta div banao
//     const newCard = document.createElement("div")
//     newCard.innerHTML = `
//          <div class="m-5 rounded-sm bg-gray-200 flex justify-between p-2">
//          <img src="./assets/kitchen-1.png" alt="" class="w-8">
//          <div class="">
//         <h2 class="font-bold">${title}</h2>
//         <h2 class="">${price} Tk</h2>
//      </div>
//  </div>
//       `;

//     //card container a add korte hobe
//     cardContainer.append(newCard)


// });


// document.getElementById("card-btn-2").addEventListener("click", function () {
//     const title = document.getElementById("card-title-2").innerText
//     const price = document.getElementById("card-price-2").innerText
//     //1. total price ke dorbo
//     const totalPrice = document.getElementById("total-price").innerText

//     //2. add korbo
//     currentTotal = Number(price) + Number(totalPrice);

//     //update korbo
//     getElementById("total-price").innerText = currentTotal

//     // card container ke dorbo
//     const cardContainer = document.getElementById("card-container");


//     const newCard = document.createElement("div")
//     newCard.innerHTML = `
//          <div class="m-5 rounded-sm bg-gray-200 flex justify-between p-2">
//          <img src="./assets/kitchen-2.png" alt="" class="w-8">
//          <div class="">
//         <h2 class="font-bold">${title}</h2>
//         <h2 class="">${price} Tk</h2>
//      </div>
//  </div>
//       `;

//     cardContainer.append(newCard)
// })



// document.getElementById("card-btn-3").addEventListener("click", function () {
//     const title = document.getElementById("card-title-3").innerText
//     // 1. element ke dorbo
//     const price = document.getElementById("card-price-3").innerText

//     //1.1total price ke darbo

//     const totalPrice = document.getElementById("total-price").innerText

//     //add korbo

//     currentPrice = Number(price) + Number(totalPrice);

//     //update korbo

//     getElementById("total-price").innerText = currentPrice;

//     // card container k dakbo
//     const cardContainer = document.getElementById("card-container")

//     const newCard = document.createElement("div")  //create element by id------>
//     newCard.innerHTML = `
//     <div class="m-5 rounded-sm bg-gray-200 flex justify-between p-2">
//          <img src="./assets/kitchen-3.png" alt="" class="w-8">
//          <div class="">
//         <h2 class="font-bold">${title}</h2>
//         <h2 class="">${price} Tk</h2>
//      </div>
//  </div>
//  `

//     cardContainer.append(newCard);
// })


// document.getElementById("card-btn-4").addEventListener("click", function () {
//     const title = document.getElementById("card-title-4").innerText
//     const price = document.getElementById("card-price-4").innerText

//     const totalPrice = document.getElementById("total-price").innerText

//     currentTotal = Number(price) + Number(totalPrice);

//     getElementById("total-price").innerText = currentTotal;

//     const cardContainer = document.getElementById("card-container")

//     const newCard = document.createElement("div")
//     newCard.innerHTML = ` 
//     <div class="m-5 rounded-sm bg-gray-200 flex justify-between p-2">
//          <img src="./assets/furniture-1.png" alt="" class="w-8">
//          <div class="">
//         <h2 class="font-bold">${title}</h2>
//         <h2 class="">${price} Tk</h2>
//      </div>
//  </div>`

//     cardContainer.append(newCard);

// })


// document.getElementById("card-btn-5").addEventListener("click", function () {
//     const title = document.getElementById("card-title-5").innerText
//     const price = document.getElementById("card-price-5").innerText

//     const totalPrice = document.getElementById("total-price").innerText

//     currentTotal = Number(price) + Number(totalPrice)

//     getElementById("total-price").innerText = currentTotal

//     const cardContainer = document.getElementById("card-container")

//     const newCard = document.createElement("div")
//     newCard.innerHTML = `
//      <div class="m-5 rounded-sm bg-gray-200 flex justify-between p-2">
//          <img src="./assets/furniture-2.png" alt="" class="w-8">
//          <div class="">
//         <h2 class="font-bold">${title}</h2>
//         <h2 class="">${price} Tk</h2>
//      </div>
//  </div>`

//     cardContainer.append(newCard);
// })














//event add korer system 2 ta


//jekane click korbo sekane dora
// event add kora
// funciton likha

// document.getElementById("cart-btn-spoon").addEventListener("click", function () {
//     alert("Cooker Clicked");
// })
// id-element
//className = array of element


// const titles = document.getElementsByClassName("card-title");
// console.log(titles);

// for(let title of titles){
//    // title.innerHTML="Hello guys"
//    //title.style.border ="3px solid yellow";
//   // title.classList.remove("card-title");


// }

// const image = document.getElementsByTagName("img")
// console.log(image);

// for (let img of image) {
//     img.addEventListener("mouseenter", function(){
//         img.src="https://upload.wikimedia.org/wikipedia/commons/c/ce/MrBeast_2023_%28cropped%29.jpg"
//     })
// }


//event  delegation concept -----###################################

document.getElementById("product-box").addEventListener("click", function(e){
            if(e.target.className.includes("card-btn")){
                const cardButton = e.target;

         const productImg =
         cardButton.parentNode.parentNode.parentNode.children[0].children[0].src;
        console.log(productImg);


        //1.2catch the title
        const productTitle = cardButton.parentNode.parentNode.children[0].innerText;

        console.log(productTitle);
        //catch the price

        //1.3 catch the title
        const productPrice = cardButton.parentNode.parentNode.children[2].children[0].innerText;

        console.log(productPrice);



        //2.1call the total price
        const totalPrice = document.getElementById("total-price").innerText
        //2.2 add 
        const currentTotal = Number(productPrice) + Number(totalPrice);
        //2.3 update 
        document.getElementById("total-price").innerText = currentTotal;



        const cardContainer = getElementById("card-container");

        const newCart = document.createElement("div");
        newCart.innerHTML = `
     <div class="m-5 rounded-sm bg-gray-200 flex justify-between p-2">
         <img src="${productImg}" alt="" class="w-8">
         <div class="">
        <h2 class="font-bold">${productTitle}</h2>
        <h2 class="">${productPrice} Tk</h2>
     </div>
 </div>`;

        cardContainer.append(newCart);

        // call the function
        const quantity = document.getElementById("total-quantity").innerText

        //add and sum
        const currentQuantity = Number(quantity) + 1;

        //update data
        document.getElementById("total-quantity").innerText = currentQuantity;
            }
});
 
//dynamic rules
//Traverse technic------------->>################################


//1.catch the class
// const cardBtn = document.getElementsByClassName("card-btn")
// //console.log(cardBtn)

// //2.for loop
// for (let cardButton of cardBtn) {


//     //3. add event listener
//     cardButton.addEventListener("click", function () {

//         const productImg =
//             //1.1catch the image
//             cardButton.parentNode.parentNode.parentNode.children[0].children[0].src;
//         console.log(productImg);


//         //1.2catch the title
//         const productTitle = cardButton.parentNode.parentNode.children[0].innerText;

//         console.log(productTitle);
//         //catch the price

//         //1.3 catch the title
//         const productPrice = cardButton.parentNode.parentNode.children[2].children[0].innerText;

//         console.log(productPrice);

//         //2.1call the total price
//         const totalPrice = document.getElementById("total-price").innerText
   
//         //2.2 add 
//         const currentTotal = Number(productPrice) + Number(totalPrice);

//         //2.3 update 
//         document.getElementById("total-price").innerText = currentTotal;


//         const cardContainer = getElementById("card-container");

//         const newCart = document.createElement("div");
//         newCart.innerHTML = `
//      <div class="m-5 rounded-sm bg-gray-200 flex justify-between p-2">
//          <img src="${productImg}" alt="" class="w-8">
//          <div class="">
//         <h2 class="font-bold">${productTitle}</h2>
//         <h2 class="">${productPrice} Tk</h2>
//      </div>
//  </div>`;

//         cardContainer.append(newCart);

//         // call the function
//         const quantity = document.getElementById("total-quantity").innerText

//         //add and sum
//         const currentQuantity = Number(quantity) + 1;

//         //update data
//         document.getElementById("total-quantity").innerText = currentQuantity;


//     });


// }

// const clearBtn = document.getElementById("btn-clear").addEventListener("click", function(){
//     const cardContainer = getElementById("card-container");
//       cardContainer.innerHTML = " ";
//        document.getElementById("total-quantity").innerText = 0;
//         document.getElementById("total-price").innerText = 0;
// })

