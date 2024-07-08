<script lang="ts">
	 import type{Message} from '$lib/store';
	export let message:Message

</script>

<div class="flex flex-col items-end space-y-2">
	<div class="card p-4 variant-soft rounded-tl-none space-y-2">
		<header class="flex justify-between items-center">
			<p class="font-bold">you</p>

		</header>
		<p>{message.text}</p>
	</div>
</div>
