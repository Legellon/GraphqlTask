<script>
  import { _api } from "@iconify/svelte";
  import { push } from 'svelte-spa-router';
  import { user, gotCode } from '../../../store';
  import "../../Layout/authorization.css";
  import Header from "../../Optional/Header.svelte";
  import Icon from "@iconify/svelte";
  import Notification from "../../Optional/Notification.svelte";


    let error = [];
    let show = false

    const cancel = _ => {
        $gotCode = false
        push('/auth/login')
    }

    const sendCode = _ => {
        
    }

    const next = _ => {
        
  }

    const toggle = _ => {
        show = ! show
        document.getElementById('newPassword').type = show ? 'text' : 'password'
    }
</script>

<Header><img class="h-10 opacity-50" src="assets/logo.png" alt="Reconext"></Header>

{#if error.length}
  <div class="notice-block">
  {#each error as item }
    <Notification>{item}</Notification>
  {/each}
</div>
{/if}

<div class="auth-form">
  <form>
    {#if $gotCode}
      <div class="input-form">
        <Icon icon="material-symbols:lock-person-outline" color="gray" width="24" />
        <input type="text" placeholder="Verification code" id="verifyCode" name="Verification code" required bind:value={$user.verifyCode}/>
      </div>
      <div class="input-form">
        <Icon icon="material-symbols:lock-outline" color="gray" width="24" />
        <input placeholder="New password" required bind:value={$user.newPassword} id="newPassword" name="newPassword"/> <!--type={hiddenPassword}-->
        <div on:click={toggle}>
          {#if show}<Icon icon="mdi:eye-off-outline" color="gray" width="25" />
          {:else}<Icon icon="mdi:eye-outline" color="gray" width="25" />{/if}
        </div>
      </div>
      <button type="submit" class="btn"  on:click|preventDefault={ next }>Next</button>
      <button type="button" class="btn" on:click={ cancel }>Cancel</button>
    {:else}
      <div class="input-form">
        <Icon icon="mdi:user-circle-outline" color="gray" width="25" />
        <input type="e-mail" placeholder="Email" required bind:value={$user.username} id="username" name="username"/>
      </div>
      <button type="submit" class="btn"  on:click|preventDefault={ sendCode } disabled={! $user.username}>Next</button>
      <button type="button" class="btn" on:click={ cancel }>Cancel</button>
    {/if}

  </form>
</div>

<style>
</style>
