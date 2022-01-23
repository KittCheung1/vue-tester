<script setup>
import { currentUser } from "../api/users"
import { CATEGORIES_URL } from "../api/index"
import { onMounted, reactive } from "vue";

const categories = reactive([]);

async function loadQuizCategories() {
  const response = await fetch("https://opentdb.com/api_category.php");
  const data = await response.json();
  data.trivia_categories.forEach(category => {
    categories.push(category);
  });;
};

onMounted(() => {
  loadQuizCategories();
});





</script>

<template>
  <main class="container mx-auto px-4">
    <h1 class="mb-3 text-2xl">Trivia Game</h1>
    <h2>Display the questions</h2>
    <h1>{{ currentUser }}</h1>
    <form v-show="true">
      <div>
        <label for="selectDiff">Difficulty</label>
        <select >
          <option selected>Any Difficulty></option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
      <div>
        <label>Number of Questions:</label>
        <input type="number" placeholder="10" />
      </div>

      <div>
        <label>Category</label>
        <select >
          <option selected>Any Categories</option>
          <option v-for="category in categories" :name="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div>
        <label>Type</label>
        <select >
          <option selected>Any Type</option>
          <option>Multiple Choice</option>
          <option>True / False</option>
        </select>
      </div>

      <!-- <fieldset class="mb-3">
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
      </fieldset>-->

      <!-- <button type="submit" class="bg-indigo-500 text-white p-3 rounded">Register</button>
      <button v-show="true">press me</button>-->
    </form>
  </main>
</template>




<style>
select {
  border-style: solid;
  border-color: black;
  border-width: 1px;
}
</style>