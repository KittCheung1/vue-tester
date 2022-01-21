<script setup>
import { ref } from "vue";
import { reactive } from "vue";
import { apiUserRegister } from "../api/users";

const username = ref("");
const password = ref("");
const users = reactive([]); 

const onSubmit = async ()=>{
  const [error,newUser] = await apiUserRegister(username.value);
//   console.log("ERR", error);
//   console.log("user" , user);
}
</script>


<template>
  <main class="container mx-auto px-4">
    <h1 class="mb-3 text-2xl">Login to get started</h1>
    
    <form @submit.prevent="onSubmit">
      <fieldset class="mb-3">
        <label for="username" aria-label="Username" class="block"
          >Username</label
        >
        <input
          type="text"
          id="username"
          placeholder="E.g., john.doe@email.com"
          class="border border-slate-300"
          v-model="username"
        />
      </fieldset>

      <fieldset class="mb-3">
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
      </fieldset>

      <button type="submit" class="bg-indigo-500 text-white p-3 rounded">
        Register
      </button>
    </form>

  </main>
</template>