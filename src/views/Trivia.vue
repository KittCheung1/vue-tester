<script >

</script>

<template>
    <main class="container mx-auto px-4">
        <h1 class="mb-3 text-2xl">Trivia Game</h1>
        <h2>Display the questions</h2>

        <form >
          <label>Difficulty</label>
          <select id="select">  
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
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
            <button v-show="true">press me</button> -->
        </form>
    </main>
</template>




<style>
#select{
  margin-left: 20px;
  border-style: solid;
  border-color: black;
  border-width: 1px;
}

</style>