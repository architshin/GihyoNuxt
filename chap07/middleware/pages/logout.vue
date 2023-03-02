<script setup lang="ts">
const loginUserCookie = useCookie("loginUser");
loginUserCookie.value = null;
const loginTokenCookie = useCookie("loginToken");
loginTokenCookie.value = null;
await navigateTo("/login");
</script>
