<template>
    <!-- <div class="igk-cancaseditor-app fit no-overflow">editor...</div> -->
    <div class="igk-cancas-editor-app fit overflow"></div>
</template>

<script lang="js" setup> 
import {CancasEditor} from '@/lib/CancasEditor';  
if (undefined == igk.env.flags.cancasapp){
    igk.env.flags.cancasapp = true;
    igk.ready(function(){  
        $igk('.igk-cancas-editor-app').each_all(function(){this.init()});
    });
}
</script>