<script lang="ts">
	import Layout from '$lib/components/layout.svelte';
	import { type Message, messages } from '$lib/store';
	import {onMount} from 'svelte';
	onMount(()=>{
		let currentMessage = "Hello This is an LLM with context of all of my work you can ask any question here"
		let message: Message = { text: currentMessage, sender: 'server', timestamp: "date" };
			messages.update((messages) => [...messages, message]);
	})
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<Layout />
