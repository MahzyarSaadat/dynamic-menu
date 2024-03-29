const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "dinner",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
];

const cardContainer = document.querySelector(".card-container");

const categoryList = document.querySelector(".cat-list");

window.addEventListener("DOMContentLoaded", (e) => {
  showAll(menu);
  //dynamic way for creating buttons and filter
  const category = menu.reduce(
    (value, item) => {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["all"]
  );

  const categoryButton = category
    .map((item) => {
      return `
        <li id="${item}" data-cat="${item}">${item}</li>
        `;
    })
    .join("");

  categoryList.innerHTML = categoryButton;
  const listCategory = document.querySelectorAll("li");

  listCategory.forEach((item) => {
    item.addEventListener("click", (e) => {
      const datasetArray = e.currentTarget.dataset.cat;
      const categoryArray = menu.filter((item) => {
        if (item.category === datasetArray) {
          return item;
        }
      });

      if (datasetArray === "all") {
        showAll(menu);
      } else {
        showAll(categoryArray);
      }
    });
  });
});

function showAll(list) {
  let displayMenuList = list.map((element) => {
    return `
            <article class="item-card" key="${element.id}">
                <div class="img-container">
                    <img src="${element.img}">
                </div>
        
                <div class="card-context">
                    <div class="card-header">
                        <h2 id="item-name">${element.title}</h2>
                        <span id="price">$ ${element.price}</span>
                    </div>
                    <div class="paragraph">
                        <p id="item-init">
                            ${element.desc}
                        </p>
                    </div>
                </div>
            </article>
            `;
  });

  displayMenuList = displayMenuList.join("");

  cardContainer.innerHTML = displayMenuList;
}

// listCategory.item(1).addEventListener("click", (e) => {
//   let displayBreakfast = menu.map((element) => {
//     if (element.category === "breakfast") {
//       return `
//             <article class="item-card" key="${element.id}">
//                 <div class="img-container">
//                     <img src="${element.img}">
//                 </div>

//                 <div class="card-context">
//                     <div class="card-header">
//                         <h2 id="item-name">${element.title}</h2>
//                         <span id="price">$ ${element.price}</span>
//                     </div>
//                     <div class="paragraph">
//                         <p id="item-init">
//                             ${element.desc}
//                         </p>
//                     </div>
//                 </div>
//             </article>
//             `;
//     }
//   });
//   displayBreakfast = displayBreakfast.join("");

//   cardContainer.innerHTML = displayBreakfast;
// });

// listCategory.item(2).addEventListener("click", (e) => {
//   let displayLuanch = menu.map((element) => {
//     if (element.category === "lunch") {
//       return `
//               <article class="item-card" key="${element.id}">
//                   <div class="img-container">
//                       <img src="${element.img}">
//                   </div>

//                   <div class="card-context">
//                       <div class="card-header">
//                           <h2 id="item-name">${element.title}</h2>
//                           <span id="price">$ ${element.price}</span>
//                       </div>
//                       <div class="paragraph">
//                           <p id="item-init">
//                               ${element.desc}
//                           </p>
//                       </div>
//                   </div>
//               </article>
//               `;
//     }
//   });
//   displayLuanch = displayLuanch.join("");

//   cardContainer.innerHTML = displayLuanch;
// });

// listCategory.item(3).addEventListener("click", (e) => {
//   let displayShake = menu.map((element) => {
//     if (element.category === "shakes") {
//       return `
//                 <article class="item-card" key="${element.id}">
//                     <div class="img-container">
//                         <img src="${element.img}">
//                     </div>

//                     <div class="card-context">
//                         <div class="card-header">
//                             <h2 id="item-name">${element.title}</h2>
//                             <span id="price">$ ${element.price}</span>
//                         </div>
//                         <div class="paragraph">
//                             <p id="item-init">
//                                 ${element.desc}
//                             </p>
//                         </div>
//                     </div>
//                 </article>
//                 `;
//     }
//   });
//   displayShake = displayShake.join("");

//   cardContainer.innerHTML = displayShake;
// });

// listCategory.item(0).addEventListener("click", (e) => {
//   showAll(menu);
// });

//=========================================================================
// **** It's shorter way to get the buttons
//=========================================================================
// listCategory.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     const datasetArray = e.currentTarget.dataset.cat;
//     const categoryArray = menu.filter((item) => {
//       if (item.category === datasetArray) {
//         return item;
//       }
//     });

//     if (datasetArray === "all") {
//       showAll(menu);
//     } else {
//       showAll(categoryArray);
//     }

//   });
// });
