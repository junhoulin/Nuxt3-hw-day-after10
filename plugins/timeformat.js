import dayjs from 'dayjs';

export default defineNuxtPlugin((nuxtApp)=>{
  nuxtApp.vueApp.directive('timeformat',{
    mounted(el,binding) {
      const date = binding.value;
      const formate = "YYYY-MM-DD hh:mm:ss";
      el.textContent = dayjs(date).format(formate);
    }
  });
})

