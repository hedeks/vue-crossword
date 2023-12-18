import { defineStore } from "pinia";
export const crosswordStore = defineStore("crosswordStore", {
  state: () => ({
    crossword_list: [],
    isfirstFetchReady: false,
  }),

  actions: {
    fetchCrossword_listFromDB() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.crossword_list = [
            {
              header: "5 x 5",
              text: "Маленький, быстрый кроссворд по случайным темам",
              imgPath: "./src/assets/crosswordFiveXFive.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "small",
            },
            {
              header: "9 x 7",
              text: "Кроссворд побольше, связанный с математикой",
              imgPath: "./src/assets/crosswordNineXSeven.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "auto",
            },
            {
              header: "5 x 5",
              text: "Маленький, быстрый кроссворд по случайным темам",
              imgPath: "./src/assets/crosswordFiveXFive.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "small",
            },
            {
              header: "9 x 7",
              text: "Кроссворд побольше, связанный с математикой",
              imgPath: "./src/assets/crosswordNineXSeven.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "auto",
            },
            {
              header: "5 x 5",
              text: "Маленький, быстрый кроссворд по случайным темам",
              imgPath: "./src/assets/crosswordFiveXFive.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "small",
            },
            {
              header: "9 x 7",
              text: "Кроссворд побольше, связанный с математикой",
              imgPath: "./src/assets/crosswordNineXSeven.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "auto",
            },
            {
              header: "5 x 5",
              text: "Маленький, быстрый кроссворд по случайным темам",
              imgPath: "./src/assets/crosswordFiveXFive.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "small",
            },
            {
              header: "9 x 7",
              text: "Кроссворд побольше, связанный с математикой",
              imgPath: "./src/assets/crosswordNineXSeven.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "auto",
            },
            {
              header: "5 x 5",
              text: "Маленький, быстрый кроссворд по случайным темам",
              imgPath: "./src/assets/crosswordFiveXFive.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "small",
            },
            {
              header: "9 x 7",
              text: "Кроссворд побольше, связанный с математикой",
              imgPath: "./src/assets/crosswordNineXSeven.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "auto",
            },
            {
              header: "5 x 5",
              text: "Маленький, быстрый кроссворд по случайным темам",
              imgPath: "./src/assets/crosswordFiveXFive.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "small",
            },
            {
              header: "9 x 7",
              text: "Кроссворд побольше, связанный с математикой",
              imgPath: "./src/assets/crosswordNineXSeven.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "auto",
            },
            {
              header: "5 x 5",
              text: "Маленький, быстрый кроссворд по случайным темам",
              imgPath: "./src/assets/crosswordFiveXFive.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "small",
            },
            {
              header: "9 x 7",
              text: "Кроссворд побольше, связанный с математикой",
              imgPath: "./src/assets/crosswordNineXSeven.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "auto",
            },
            {
              header: "5 x 5",
              text: "Маленький, быстрый кроссворд по случайным темам",
              imgPath: "./src/assets/crosswordFiveXFive.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "small",
            },
            {
              header: "9 x 7",
              text: "Кроссворд побольше, связанный с математикой",
              imgPath: "./src/assets/crosswordNineXSeven.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "auto",
            },
            {
              header: "5 x 5",
              text: "Маленький, быстрый кроссворд по случайным темам",
              imgPath: "./src/assets/crosswordFiveXFive.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "small",
            },
            {
              header: "9 x 7",
              text: "Кроссворд побольше, связанный с математикой",
              imgPath: "./src/assets/crosswordNineXSeven.png",
              buttonSlot: "Решить",
              buttonLink: "#",
              imgSize: "auto",
            },
          ];
          resolve()
        }, 1000);
      }).finally(() => {
        this.isfirstFetchReady = true;
      });
    },
    // fetchProductsFromDB() {
    //   fetch('https://dummyjson.com/products')
    // .then((res) => res.json())
    // .then((json) => {
    //   this.products = json.products;
    //   console.log(this.products);
    // });
    // },

    // addtoCart(product){
    //   this.cart.push(product);
    // },

    // removeFromCart(id) {
    //   this.cart = this.cart.filter((item) => item.id !== id)
    // }
  },
});
