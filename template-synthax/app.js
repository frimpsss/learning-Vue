const {createApp} = Vue

createApp({
    data(){
        return{
            objOfAttr:{
                class: "box", 
                id: "model"
            }, 
            isDisabled: true, 

            displayMsg: true

        }
    }
}).mount("#app")