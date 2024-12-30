<template>
    <div :class="controller_name"> 
        <CancasEditor></CancasEditor>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import CancasEditor from '@/components/CancasEditor.vue'
 
const controller_name = computed (()=>{
    return "fit"
});

 igk.ready(function(){ 

 });
</script>
<style scoped>
header{
    flex-direction: column;
}
header .logo:hover{
    filter: drop-shadow(2px 2px 6px orangered)
}
</style>

