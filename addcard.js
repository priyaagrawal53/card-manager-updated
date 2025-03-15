// console.log("Working again");

// let allCardGlobal=  JSON.parse(localStorage.getItem("cards")) || [];

// document.addEventListener("DOMContentLoaded",()=>{
//     listallcards();
// })
// /*
// function listallcards() {
//     let allCards = JSON.parse(localStorage.getItem("cards")) || [];

//     console.log("LISTING ALL CARDS");
//     console.log("Stored Data:", allCards); // Debugging localStorage content

//     let listContainer = document.querySelector(".cardlist");
//     listContainer.innerHTML = ""; // Clear old list before appending new items

//     allCards.forEach((card) => {
//         console.log(card); // Debugging each card
//         let listItem = document.createElement("li");
//         listItem.textContent = card.number;
//         listContainer.appendChild(listItem);
//     });





// }*/
// async function set(card) {
//     console.log("Event listener working for", card.number);

//     // Update card details in the current document
//     document.querySelector(".number").innerText = card.number;
//     document.querySelector(".exp").innerText = card.exp;
//     document.querySelector(".cvv").innerText = card.cvv;
//     document.querySelector(".cardname").innerText = card.cardname;

//     // Wait for the DOM to update (small delay)
//     //await new Promise(resolve => setTimeout(resolve, 100));

//     // Open index.html AFTER updates are done
    
//     setTimeout(() => {
//         window.open("index.html", "_blank");
//     }, 100);
// }

// function listallcards() {
//     let allCards = JSON.parse(localStorage.getItem("cards")) || [];
//     let listContainer = document.querySelector(".cardlist");
//     listContainer.innerHTML = ""; 

//     allCards.forEach(card => {
//         let listItem = document.createElement("li");
//         listItem.id = `card-${card.number}`; 
//         listItem.textContent = card.number;
      
//         listItem.addEventListener("click", () => set(card));

//         listContainer.appendChild(listItem);
//     });
// }
// /*
// function listallcards() {
//     let allCards = JSON.parse(localStorage.getItem("cards")) || [];
//     let listContainer = document.querySelector(".cardlist");
//     listContainer.innerHTML = ""; 

//     allCards.forEach(card => {
//         let listItem = document.createElement("li");
//         listItem.id = `card-${card.number}`;
//         listItem.textContent = card.number;

//         listItem.addEventListener("click", async () => {
//             console.log("Event listener working for", card.number);

//             // Update the values
//             document.querySelector(".number").innerText = card.number;
//             document.querySelector(".exp").innerText = card.exp;
//             document.querySelector(".cvv").innerText = card.cvv;
//             document.querySelector(".cardname").innerText = card.cardname;

//             // Wait for DOM updates to complete
//             await new Promise(resolve => setTimeout(resolve, 100)); // Small delay to ensure updates

//             // Open index.html after updates
//             window.open("index.html", "_blank");
//         });

//         listContainer.appendChild(listItem);
//     });
// }


// */


// // Function to add a card
// function takevalue() {  
    
//     let number = document.getElementById("cc-number").value;
//     let exp = document.getElementById("cc-exp").value;
//     let cvv = document.getElementById("cc-cvc").value;
//     let cardname = document.getElementById("cardholder").value;

//     if (!number || !exp || !cvv || !cardname) {
//         alert("Please fill all fields!");
//         return;
//     }
    

//     console.log(number, exp, cvv, cardname);

//     // Get stored cards or initialize an empty array
//     console.log(` local storage is : ${localStorage.getItem("cards")}`);
//    // let allCards = JSON.parse(localStorage.getItem("cards")) || [];
//    let allCards = JSON.parse(localStorage.getItem("cards")) || [];

   
//     // Add new card
    
//     allCards.push({ "number":number,"exp": exp,"cvv": cvv, "cardname":cardname });
//     console.log(`"allcards", ${allCards}`)
//     // Save updated array back to `localStorage`
//     localStorage.setItem("cards", JSON.stringify(allCards));
//     //console.log(` local storage is : ${localStorage.getItem("cards")}`);

//     alert("CARD ADDED SUCCESSFULLY");
//     //console.log(allCards);

//    //displayCards(); // Refresh displayed cards
//    // Show(number, exp, cvv, cardname);
//    listallcards();
// }

// // Function to display all saved cards
// function displayCards() {
//     let allCards = JSON.parse(localStorage.getItem("cards")) || [];
//     let container = document.getElementById("card-container");

//     container.innerHTML = ""; // Clear previous content

//     allCards.forEach((card)=>{
//         let cardElement= document.getElementById("div");
//         cardElement.innerHTML+=`
//             <li> ${card.number}</li>
//         `
//     }
//     )


    
//     /*allCards.forEach((card, index) => {
//         let cardElement = document.createElement("div");
//         cardElement.classList.add("card");

//         cardElement.innerHTML = `
//             <div class="card front-face">
//               <header>
//                 <span class="logo">
//                   <img src="logo.png" alt="" />
//                   <h5>Master Card</h5>
//                 </span>
//                 <img src="chip.png" alt="" class="chip" />
//               </header>

//               <div class="card-details">
//                 <div class="name-number">
//                   <h6>Card Number</h6>
//                   <h5 class="number">${card.number}</h5>
//                   <h5 class="name">${card.cardname}</h5>
//                 </div>

//                 <div class="valid-date">
//                   <h6>Valid Thru</h6>
//                   <h5 class="date">${card.exp}</h5>
//                 </div>
//               </div>
//             </div>

//             <div class="card back-face">
//               <h6>For customer service call +977 4343 3433 or email at mastercard@gmail.com</h6>
//               <span class="magnetic-strip"></span>
//               <div class="signature"><i>${card.cvv}</i></div>
//               <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
//               <button onclick="deleteCard(${index})">Delete</button>
//             </div>
//         `;

//         container.appendChild(cardElement);
//     });*/
// }

// // Function to delete a specific card
// function deleteCard(index) {
//     let allCards = JSON.parse(localStorage.getItem("cards")) || [];
//     allCards.splice(index, 1); // Remove the selected card
//     localStorage.setItem("cards", JSON.stringify(allCards));

//     alert("Card deleted successfully!");
//     displayCards(); // Refresh displayed cards
// }

// // Run displayCards when page loads
// window.onload = displayCards;
console.log("Working again");

let allCardGlobal = JSON.parse(localStorage.getItem("cards")) || [];

document.addEventListener("DOMContentLoaded", () => {
    listallcards();
});

async function set(card) {
    console.log("Event listener working for", card.number);

    document.querySelector(".number").innerText = card.number;
    document.querySelector(".exp").innerText = card.exp;
    document.querySelector(".cvv").innerText = card.cvv;
    document.querySelector(".cardname").innerText = card.cardname;

    setTimeout(() => {
        window.open("index.html", "_blank");
    }, 100);
}

function listallcards() {
    let allCards = JSON.parse(localStorage.getItem("cards")) || [];
    let listContainer = document.querySelector(".cardlist");
    listContainer.innerHTML = "";

    allCards.forEach(card => {
        let newdiv= document.createElement("div");
        newdiv.class= "card";
        newdiv.className="card";

        let listItem = document.createElement("li");
       
        listItem.id = `card-${card.number}`;
        listItem.textContent = card.number;

        newdiv.addEventListener("click", () => set(card));
        newdiv.addEventListener("click", () => {
            window.open("index.html")
        });
        newdiv.appendChild(listItem);

        listContainer.appendChild(newdiv);
    });
}

function takevalue() {
    let number = document.getElementById("cc-number").value;
    let exp = document.getElementById("cc-exp").value;
    let cvv = document.getElementById("cc-cvc").value;
    let cardname = document.getElementById("cardholder").value;

    if (!number || !exp || !cvv || !cardname) {
        alert("Please fill all fields!");
        return;
    }

    let allCards = JSON.parse(localStorage.getItem("cards")) || [];
    allCards.push({ "number": number, "exp": exp, "cvv": cvv, "cardname": cardname });
    localStorage.setItem("cards", JSON.stringify(allCards));

    alert("CARD ADDED SUCCESSFULLY");
    listallcards();
}

function displayCards() {
    let allCards = JSON.parse(localStorage.getItem("cards")) || [];
    let container = document.getElementById("card-container");
    container.innerHTML = "";

    allCards.forEach((card) => {
        let cardElement = document.getElementById("div");
        cardElement.innerHTML += `<li> ${card.number}</li>`;
    });
}

function deleteCard(index) {
    let allCards = JSON.parse(localStorage.getItem("cards")) || [];
    allCards.splice(index, 1);
    localStorage.setItem("cards", JSON.stringify(allCards));

    alert("Card deleted successfully!");
    displayCards();
}

window.onload = displayCards;
