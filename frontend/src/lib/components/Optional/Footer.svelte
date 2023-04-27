<script>
  import { fade } from "svelte/transition";
</script>

<footer class="footer" transition:fade={{ duration: 250 }}>
  <hr />
  <span> Copyright © 2023 Scalgard. All Rights Reserved. </span>
</footer>

<style>
  @tailwind components;
  @tailwind utilities;
  @layer components {
    .footer {
      @apply mb-3;
    }
    .footer hr {
      @apply my-6 border-gray-200;
    }
    .footer span {
      @apply block text-sm text-gray-500 text-center text-gray-400;
    }
  }
</style>
