import { defineStore } from "pinia";


export const useProductsStore = defineStore('products',{
    state: () => {
        return {
            products:[],
            cart:[],
            categories:[],
            productInfo:{},
            filter:'',
            likedProducts:[]
        }
    },
    getters:{
        getProducts(state) {
            return state.products
        },
        getCart(state) {
            return state.cart
        },
        cartSum(state) {
            return state.cart.reduce((acc,val) => {
                return acc + val.price
            },0)
        },
       getLiked() {
            return localStorage.getItem('likedProducts')
        }
    },
    actions:{
        async fetchProducts() {
            try {
                fetch('https://fakestoreapi.com/products')  
            .then(res=>res.json())
            .then(json=>this.products = json)
            }catch(erorr) {
                console.log(erorr)
            }
        },
        async addToCart(id) {
            try {
                fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json => this.cart.push(json))
            .then(localStorage.setItem('cart',JSON.stringify(this.cart)))
            } catch(eror) {
                console.log(eror)
            }
            
        },
        async getCategories() {
            try {
                fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>this.categories = json)
            } catch(err) {
                console.log(err)
            }
        },
        async filterCategory(category) {
            try {
                fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>this.products = json)
            } catch(err) {
                console.log(err)
            }
        },
        async getOneProduct(id) {
            try {
                fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json => this.productInfo = json)
            } catch(eror) {
                console.log(eror)
            }
        },
        async deleteFromCart(id) {
            try {
                fetch(`https://fakestoreapi.com/products/${id}`,{
                    method:'DELETE'
                })
                .then(res => res.json)
                .then(json => this.cart.splice(json,1))
            }catch(err) {
                console.log(err)
            }
        },
        filteredProduct() {
            return this.products.filter(item => item.title.includes(this.filter))
        },
        likedProd(item) {
            return this.likedProducts.includes(item)
        },
    }
})