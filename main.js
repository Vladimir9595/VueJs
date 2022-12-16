const product = 'T-Shirt'

const app = Vue.createApp({
  data() {
    return {
      product: 'T-Shirt',
      brand: 'Gekkode',
      //   image: './assets/images/t-shirt-bleu.png',
      //   inStock: true,
      inventory: 11,
      details: ['60% coton', '30% laine', '10% polyester'],
      variants: [
        {
          id: 2234,
          color: '#0000FF',
          image: './assets/images/t-shirt-bleu.png',
          quantity: 20,
        },
        {
          id: 2235,
          color: '#FF0000',
          image: './assets/images/t-shirt-rouge.png',
          quantity: 0,
        },
      ],
      selectedVariant: 0,
      cart: 0,
    }
  },
  methods: {
    addToCart() {
      if (this.cart >= this.inventory) {
        this.inStock = false
      } else {
        this.cart += 1
      }
    },
    updateImage(variantImage) {
      this.image = variantImage
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
  },
})
