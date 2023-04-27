<script>
  import { fade } from "svelte/transition";
</script>

<header class="header" transition:fade={{ duration: 250 }}>
  <div>
    <h3>
      <slot />
    </h3>
  </div>
</header>

<style>
  @tailwind components;
  @tailwind utilities;
  @layer components {
    .header {
      @apply bg-white shadow;
    }
    .header div {
      @apply mx-auto max-w-7xl py-6 px-4;
    }
    .header h3 {
      @apply text-2xl font-bold tracking-tight text-gray-900 text-center;
    }
  }
</style>
