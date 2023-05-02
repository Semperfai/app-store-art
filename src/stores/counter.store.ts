import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Eduardo',
    age: 20,
    users: []
  }),
  getters: {
    doubleCount: state => state.count * 2,
    doubleAge: state => state.age * 2

  },
  actions: {
    increment() {
      this.count++;
    }
  }
});
