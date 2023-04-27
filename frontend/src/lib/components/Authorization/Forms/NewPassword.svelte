<script>
  import { _api } from "@iconify/svelte";
  import { push } from "svelte-spa-router";
  import { user } from "../../../store";
  import "../../Layout/authorization.css";
  import Icon from "@iconify/svelte";
  import Header from "../../Optional/Header.svelte";
  import Notification from "../../Optional/Notification.svelte";

  let error = [];
  let show = false;

  const submit = (_) => {
    push("/");
  };

  const toggle = _ => {
        show = !show
        document.getElementById('newPassword').type = show ? 'text' : 'password'
    }

</script>

<Header>Scalgard</Header>

{#if error.length}
  <div class="notice-block">
  {#each error as item }
    <Notification>{item}</Notification>
  {/each}
</div>
{/if}

<div class="auth-form">
  <form>
    <div class="input-form">
      <Icon icon="material-symbols:lock-outline" color="gray" width="24" />
      <input bind:value={$user.newPassword} type="password" placeholder="New password" id="newPassword" name="newPassword" required />
      <div on:click={toggle}>
        {#if show}<Icon icon="mdi:eye-off-outline" color="gray" width="25" />
        {:else}<Icon icon="mdi:eye-outline" color="gray" width="25" />{/if}
      </div>
    </div>
    <button on:click|preventDefault={ submit } type="submit" class="btn btnfeedbackform">Submit</button>
  </form>
</div>

<style>
</style>
