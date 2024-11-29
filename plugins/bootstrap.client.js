import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";


export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      offcanvas: (element, optoins) => new bootstrap.Offcanvas(element, optoins),
      modal: (element, optoins) => new bootstrap.Modal(element, optoins),
    },
  };
});
