<script>
  import Header from "../Optional/Header.svelte";
  import Login from "./Forms/Login.svelte";
  import ResetPassword from "./Forms/ResetPassword.svelte";
  import { location } from "svelte-spa-router";
</script>

<Header>Scalgard</Header>
{#if $location == "/auth/login/" || $location == "/auth/login" || $location == "/auth" || $location == "/auth/"}
  <Login />
{:else if $location == "/auth/reset-password/" || $location == "/auth/reset-password"}
  <ResetPassword />
{/if}

<style>
</style>
