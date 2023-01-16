const {createApp} = Vue

Vue.createApp({
    data(){
        return{
            result:'',
            numbers: [1,2,3,4,5,6,7,8,9,0],
            operations: ['+','-','*','/'],
        }
    },

    methods:{
        input: function(char){
            this.result = this.result.toString(); // фиксится баг eval()
            this.result += char;
        },

        reset: function(){
            this.result = '';
        },

        calc: function(){
            this.result = eval(this.result);
        }
    }
}).mount('#app') 