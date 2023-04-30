<template>
	<div class="container">
		<div class="hero-section">
			<input type="text" placeholder="Search Movie..." />
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, computed } from 'vue';
	import { fetchMovies } from '../data/api_data';

	export default defineComponent({
		name: 'MovieSearch',
		setup() {
			const click = ref();

			return {
				click
			};
		}
	});
</script>
