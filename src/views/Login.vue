<template>
    <main class="container mx-auto px-4">
        <h1 class="mb-3 text-2xl">Login to get started</h1>
        <form>
            <fieldset class="mb-3">
            <label for="username" aria-label="Username" class="block">Username</label>
            <input type="text" id="username" placeholder="E.g., john.doe@email.com" class="border border-slate-300" />
            </fieldset>

            <fieldset class="mb-3">
            <label for="password" aria-label="password" class="block">password </label>
            <input type="password" id="password" placeholder="*****" class="border border-slate-300" />
            </fieldset>

            <button type="submit" class="bg-indigo-500 text-white p-3 rounded">Register</button>
        </form>
    </main>
</template>