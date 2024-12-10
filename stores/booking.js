export const useBookingStore = defineStore("booking",() => {
  const roomdata = ref("1231231231")

  const getdata = async (id) => {
    const response = await $fetch(`/rooms/${id}`, {
      baseURL: "https://nuxr3.zeabur.app/api/v1",
    });
    roomdata.value = response.result;
  }

  return {
    roomdata,
    getdata ,
  }
})
