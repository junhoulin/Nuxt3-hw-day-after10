export default defineNuxtRouteMiddleware( async(to, from) => {
  const token = useCookie("auth");
  if (!token.value) return navigateTo("/login");

  try {
    const checkAuth = await $fetch("https://nuxr3.zeabur.app/api/v1/user/check",{
      method: 'GET',
      headers: {
        Authorization: token.value,
      }
    })
    console.log(checkAuth.status);
  } catch (error) {
    console.log(error);
    return navigateTo("/login");
  }
})
