export default defineNuxtPlugin((nuxtApp)=>{
  nuxtApp.vueApp.directive('lowercase',{
    mounted(el,binding) {
      el.textContent = binding.value.toLowerCase();
    }
  });
  nuxtApp.vueApp.directive('uppercase',{
    mounted(el,binding) {
      el.textContent = binding.value.toUpperCase();
    }
  });

})
