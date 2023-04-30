<template>
	<div class="container">
		<div class="hero-section">
			<h1 class="text-center my-5 header">{{ $route.params.id }}</h1>
			<div class="row my-5">
				<div class="col">
					<p><strong>Class:</strong> {{ $route.params.class }}</p>
					<p><strong>Description:</strong> {{ $route.params.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'SubjectView',
		components: {},
		setup() {
			return {};
		}
	});
</script>
