import axios from 'axios'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: null,
    url: 'http://localhost:5239/api/picture',
    reqError: null,
  }),
  actions: {
    async getAll() {
      try {
        const response = await axios.get(this.url);
        this.products = response.data;
        this.reqError = null;
        console.log('Продукты получены!');
      } catch (error) {
        this.products = null;
        console.error('При попытке получить данных произошла ошибка: ' + error.message);
        this.reqError = 'При попытке получить данных произошла ошибка: ' + error.message;
      }
    },
  },
})
