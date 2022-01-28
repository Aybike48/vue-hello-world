<template>

    <div>
        <p>lamba durumu {{status}}</p> 
        <hr>
        <button @click="openLamb">lambayı aç</button> 
        <About></About>
        
    </div>
    
</template>
<script>
import About from "./about.vue";
    export default {
        data : function(){
            return{
                status : "kapalı",
               
            }
        },
        methods : {
            openLamb(){
                this.status="açık"
            }
        },
        components:{
            About
        }
    }
</script>