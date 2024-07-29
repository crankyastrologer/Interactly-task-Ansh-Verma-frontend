<script lang="ts">
  import type { Message } from '$lib/store';
  export let message: Message;

  const lines = message.text.split('\n');
</script>

<div class="flex flex-col items-start space-y-2 min-w-ls">
  <div class="card p-4 rounded-tr-none space-y-2 variant-soft-primary max-w-2xl">
    <header class="flex justify-between items-center">
      <p class="font-bold">Ai</p>
    </header>
    {#each lines as line}
      <p>{line}</p>
    {/each}
  </div>
</div>