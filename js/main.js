//get only unique categories - HARDST ONE
//Iterate over categories return buttons
//make sure to select buttons when they are available

// items

const menu = [
  {
    id: 1,
    title: "panqueques",
    category: "breakfast",
    price: 15.99,
    img: "./img/Panqueques.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed ipsum repudiandae, ex quo dignissimos fugit reprehenderit nemo. In, eveniet.",
  },
  {
    id: 2,
    title: "ravioles",
    category: "lunch",
    price: 13.99,
    img: "./img/Ravioles.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed ipsum repudiandae, ex quo dignissimos fugit reprehenderit nemo. In, eveniet.",
  },
  {
    id: 3,
    title: "milanesa",
    category: "dinner",
    price: 13.99,
    img: "./img/Milanesa.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed ipsum repudiandae, ex quo dignissimos fugit reprehenderit nemo. In, eveniet.",
  },
  {
    id: 4,
    title: "lemon pie",
    category: "breakfast",
    price: 13.99,
    img: "./img/Lemon_pie.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed ipsum repudiandae, ex quo dignissimos fugit reprehenderit nemo. In, eveniet.",
  },
  {
    id: 5,
    title: "sundae",
    category: "desert",
    price: 13.99,
    img: "./img/Sundae.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed ipsum repudiandae, ex quo dignissimos fugit reprehenderit nemo. In, eveniet.",
  },
  {
    id: 6,
    title: "cafe",
    category: "breakfast",
    price: 13.99,
    img: "./img/Café.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed ipsum repudiandae, ex quo dignissimos fugit reprehenderit nemo. In, eveniet.",
  },
  {
    id: 7,
    title: "tarta de verdura",
    category: "lunch",
    price: 13.99,
    img: "./img/Tarta.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed ipsum repudiandae, ex quo dignissimos fugit reprehenderit nemo. In, eveniet.",
  },
  {
    id: 8,
    title: "caipirinia",
    category: "drinks",
    price: 13.99,
    img: "./img/Caipirina.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed ipsum repudiandae, ex quo dignissimos fugit reprehenderit nemo. In, eveniet.",
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
  });

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    //console.log(item);

    return `<article class="menu-item">
        <img src=${item.img} class="photo" alt= ${item.title}/>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons () {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  // filter items

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        //console.log(menuItem.category);
        if (menuItem.category == category) {
          return menuItem;
        }
      });
      //console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}