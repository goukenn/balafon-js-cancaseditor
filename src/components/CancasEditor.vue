<template>
    <!-- <div class="igk-cancaseditor-app fit no-overflow">editor...</div> -->
    <div class="igk-cancas-editor-app fit overflow"></div>
</template>

<script lang="js" setup>  
import { useI18n } from 'vue-i18n'
const {messages, locale} = useI18n();
 
if (import.meta.hot && igk.env.flags.cancasapp){
    const _env = igk.winui.cancasEditor.env; 
    let observer = new MutationObserver(()=>{ 
        $igk('.igk-cancas-editor-app').each_all(function(){ 
            this.init(); 
        });
        observer.disconnect();
    });
    observer.observe(document.body, { attributes: false, childList: true, subtree: true });  
} 
if (undefined == igk.env.flags.cancasapp){
    igk.env.flags.cancasapp = true; 
    igk.ready(function(){  
        // load resources base on locale. 
        const { R } = igk.winui.cancasEditor;
        const c_value = messages.value[locale.value];
        if (c_value){
            Object.entries(c_value).map(([i, v])=> R[i]= v || i);
        } 
        $igk('.igk-cancas-editor-app').each_all(function(){ 
            this.init(); 
        });  
    });
}  
</script>