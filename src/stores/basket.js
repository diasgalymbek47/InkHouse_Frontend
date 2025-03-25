import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', {
  state: () => ({
    products: [],
    totalSum: 0,
  }),
  actions: {
    calculateTotalSum() {
      this.totalSum = this.products.reduce((t, p) => t + p.price, 0);
    },
  },
})
