const { createApp } = Vue 

createApp({
    data(){
        return{
            message: 'Hello Vue js World!', 
            count: 0
        }
    }
}).mount("#app")