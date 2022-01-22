<script setup>
import { ref } from "vue";
import { reactive } from "vue";
import { BASE_USER_URL } from "../api";
import { apiUserLoginRegister } from "../api/users";

const username = ref("");
const displayError = ref("");

// const password = ref("");
// const users = reactive([]); 

const onRegisterClick = async () => {
  const [error, user] = await apiUserLoginRegister("register",username.value);
  if (error !== null) {
    displayError.value = error;
  } else console.log("You Passed!");
}



const onLoginClick = async() => {
  const [error, user] = await apiUserLoginRegister("login",username.value);
  if (error !== null) {
    displayError.value = error;
  } else console.log("You Passed!");
}
// const apiURL = BASE_USER_URL;
// const username2 = 'dewaldes'
// users = async function(){
//  await fetch(`${apiURL}/trivia?username=${username2}`)
//       .then(response => response.json())
//       .then(results => {
//           // results will be an array of users that match the username of dewaldes.
//       })
//       .catch(error => {
//       })
//   console.log(results)
// }

</script>


<template>
  <main class="container mx-auto px-4">
    <h1 class="mb-3 text-2xl">Login to get started</h1>

    <form >
      <fieldset class="mb-3">
        <label for="username" aria-label="Username" class="block">Username</label>
        <input
          type="text"
          id="username"
          placeholder="E.g., john.doe@email.com"
          class="border border-slate-300"
          v-model="username"
        />
      </fieldset>

      <!-- <fieldset class="mb-3">
        <label for="password" aria-label="password" class="block"
          >password
        </label>
        <input
          type="password"
          id="password"
          placeholder="*****"
          class="border border-slate-300"
          v-model="password"
        />
      </fieldset>-->
      <div class="grid gap-2 grid-cols-2">
        <button @click="onRegisterClick" type="button" class="bg-indigo-500 text-white p-3 rounded">Register</button>
        <button @click="onLoginClick" type="button" class="bg-yellow-500 text-white p-3 rounded">Login</button>
      </div>
    </form>
  </main>
</template>