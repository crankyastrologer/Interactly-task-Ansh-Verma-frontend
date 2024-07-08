<script lang="ts">
	import User from '$lib/components/user_msg.svelte';
	import Ai from '$lib/components/ai_msg.svelte';
	import Prompt from '$lib/components/prompt.svelte';
	import type { Message } from '$lib/store';
	import { messages } from '$lib/store';
	import { onMount, tick } from 'svelte';
	let elemChat: HTMLElement;
	let allMessages: Message[] = [];
	async function scrollToBottom() {
		await tick();
		if (elemChat) {
			elemChat.scrollTop = elemChat.scrollHeight;
		}
	}

	messages.subscribe((value) => {
		allMessages = value;
		scrollToBottom();
	});

	onMount(() => {
		scrollToBottom();
	});
</script>

<div class="h-screen flex flex-col">
	<div class="flex-grow overflow-y-auto" bind:this={elemChat}>
		<div class="bg-surface-500/30 p-4 min-h-full flex flex-col">
			{#each allMessages as message (message)}
				<div class="m-1">
					{#if message.sender === 'user'}
						<User {message} />
					{:else}
						<Ai {message} />
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<div class="bg-surface-500/30 p-4 w-full">
		<Prompt />
	</div>
</div>
