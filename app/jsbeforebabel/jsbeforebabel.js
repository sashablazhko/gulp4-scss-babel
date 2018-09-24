$(document).ready(() => {
  svg4everybody({});

  // $('.cont').slick();

  let vm = new Vue({
    el: '.target',
    data: {
      cart: [{ price: 1000, cnt: 2 }, { price: 800, cnt: 3 }],
    },
    computed: {
      cartTotal() {
        return this.cart.reduce((acc, cur) => acc + cur.price * cur.cnt, 0);
      },
    },
  });
});

console.log('end!!');
