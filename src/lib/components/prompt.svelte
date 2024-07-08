<script lang="ts">
	let currentMessage = '';
	import sendMessage from '$lib/utils/send.js';
	import {messages} from '$lib/store.js';
	import type {Message} from '$lib/store.js';
let active:boolean =true
	async function send(){
	if(currentMessage!=='') {
		active = false;
		let date = new Date().toLocaleString();
		let message: Message = { text: currentMessage, sender: 'user', timestamp: date };
		messages.update((messages) => [...messages, message]);
		try {
			let ans = await sendMessage(currentMessage);

			console.log(ans.data);
			currentMessage = '';
			messages.update((messages) => [...messages, { text: ans.data, sender: 'server', timestamp: date }]);
			active = true;
		} catch (error) {
			console.log(error);
		}
	}

	}

</script>
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
	<button class="input-group-shim">+</button>
	<textarea
		bind:value={currentMessage}
		class="bg-transparent border-0 ring-0"
		name="prompt"
		id="prompt"
		placeholder="Write a message..."
		rows="1"
	/>
	<button class="variant-filled-primary" on:click={send} disabled="{!active}">Send</button>
</div>