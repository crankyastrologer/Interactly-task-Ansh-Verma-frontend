<script lang="ts">
	 import type{Message} from '$lib/store';
	export let message:Message

</script>



<div class="flex flex-col items-start space-y-2 min-w-ls">
	<div class="card p-4 rounded-tr-none space-y-2 variant-soft-primary min-w-3xl">
		<header class="flex justify-between items-center ">
			<p class="font-bold">Ai</p>

		</header>
		<p>{message.text}</p>
	</div>

</div>