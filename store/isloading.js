import { defineStore } from 'pinia'
export const useLoadingStore = defineStore({
  id: 'loading',
  state: () => ({
    isLoading: true,
  }),
  actions: {
    setLoading(value) {
      this.isLoading = value
    },
  },
})