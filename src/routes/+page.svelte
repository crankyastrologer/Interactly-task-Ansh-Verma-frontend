<script lang="ts">
	import Layout from '$lib/components/layout.svelte';
	import { type Message, messages } from '$lib/store';
	import {onMount} from 'svelte';
	onMount(()=>{
		let currentMessage = "Hello This is an LLM to answer your queries ask away!"
		let message: Message = { text: currentMessage, sender: 'server', timestamp: "date" };
			messages.update((messages) => [...messages, message]);
	})
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<Layout />
