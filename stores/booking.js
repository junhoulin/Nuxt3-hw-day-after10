// 建立名稱為 useBookingStore 的 store 

export const useBookingStore = defineStore('booking',()=>{
  // 訂單資訊的格式
  const bookingResult = ref({});

  const addBookingResult = (data) => {
    bookingResult.value = data;
  }

  return {
    bookingResult,
    addBookingResult
  };
});
