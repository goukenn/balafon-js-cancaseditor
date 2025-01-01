import { createI18n } from 'vue-i18n'

async function loadLocaleMessages(lang) {
    // using fetch to retrieve json entry data -  
    return (await import(`@/lib/cancalib/assets/Lang/res.${lang}.json`)).default;   
}

const _locale_option = {
    fallbackLocale:"en",
    locale:"en", 
    legacy: false,
    messages :{
        fr:{
            hello:'Bonjour'
        },
        en:{
            hello:'hello'
        }
    }
};

await (async function(_locale_option, langs){
    langs.forEach(async function(lang){
        let m = (await import(`@/lib/cancalib/assets/Lang/res.${lang}.json`)).default;   
        let c = _locale_option.messages[lang] || {};
        _locale_option.messages[lang] = {...c,...m}; 
    })
})(_locale_option, ['fr','en']);  
const i18n = createI18n(_locale_option); 
export{ i18n }