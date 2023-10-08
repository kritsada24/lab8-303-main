import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'jordan', img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e18eb4d9-f03f-4fd5-893e-a56c76aeafc1/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-jordan-1-mid-FKKgKz.png', price: 990 },
    { name: 'adidass ', img: 'https://hoopsbyjudy.com/wp-content/uploads/2019/02/adidas-%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-Superstar-768x539.jpg', price: 890 },
    { name: ' timberland ', img: 'https://tse4.explicit.bing.net/th?id=OIP.H68b9Krt4mluNizP49BEGgHaHa&pid=Api&P=0&h=180', price: 590 },
    { name: 'puma ', img: 'https://cf.shopee.co.th/file/41eea2e2b5a10845f20c9bc26e58903a', price: 450 },
    { name: ' nikedunk', img: 'https://d2cva83hdk3bwc.cloudfront.net/nike-dunk-low-light-smoke-grey--w--1.jpg', price: 690 },
    { name: ' nikedunk ', img: 'https://tse3.mm.bing.net/th?id=OIP.lhajsFQAs7pDVd4YPYAvVQHaFS&pid=Api&P=0&h=180', price: 890 },
    { name: ' cross ', img: 'https://tse4.mm.bing.net/th?id=OIP.TFsiCPTssk4TXq5p9qo4HwHaEw&pid=Api&P=0&h=180', price: 450 },
    { name: ' cross ', img: 'https://tse4.mm.bing.net/th?id=OIP.CjYPc4hhsTnn-khUERZiQwHaHa&pid=Api&P=0&h=180', price: 450 },
   
  ])
    
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
