<script>
  import Icon from "@iconify/svelte";
  import "../../Layout/authorization.css"
  import { _api } from "@iconify/svelte";
  import { user } from "../../../store.js";
  import { push } from "svelte-spa-router";
  import Notification from "../../Optional/Notification.svelte";
  let error = [];
  let show = false;

  const logIn = (_) => {
    push("/")
  };

  const toggle = _ => {
        show = ! show
        document.getElementById('password').type = show ? 'text' : 'password'
    }

</script>

{#if error.length}
  <div class="notice-block">
  {#each error as item }
    <Notification>{item}</Notification>
  {/each}
</div>
{/if}



<div class="auth-form">
  <div class="text-center text-2xl font-light mb-6">TitanX</div>
  <form>
    <div class="input-form">
      <Icon icon="mdi:user-circle-outline" color="gray" width="25" />
      <input type="text" placeholder="Username" required bind:value={$user.username} id="username" name="username">
    </div>
    <div class="input-form">
      <Icon icon="material-symbols:lock-outline" color="gray" width="24" />
      <input type="password" id="password" name="password" placeholder="Password" required bind:value={$user.password}/> <!--type={hiddenPassword}-->
      <div on:click={toggle}>
        {#if show}<Icon icon="mdi:eye-off-outline" color="gray" width="25" />
        {:else}<Icon icon="mdi:eye-outline" color="gray" width="25" />{/if}
      </div>
    </div>
    <button type="submit" class="btn btnfeedbackform" on:click|preventDefault={ logIn }>Sign in</button>
    <a href="/#/auth/reset-password">Forgot password?</a>
  </form>
</div>

<style>
</style>
