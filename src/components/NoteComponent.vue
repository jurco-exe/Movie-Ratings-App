<template>
	<div v-for="card in cardList" :key="card.id" class="col-xl-3 col-sm-6 mb-4">
		<div class="card text-white p-3 rounded-0">
			<h3>{{ card.name }}</h3>
			<p>{{ card.class }}</p>
			<h6>{{ card.description }}</h6>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import { Card } from '../types/card';

	export default defineComponent({
		name: 'HelloWorld',
		props: {
			cardList: {
				required: true,
				type: Array as PropType<Card[]>
			}
		}
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.card {
		background: transparent;
		border: 1px solid #00ff95;
		transition: all 0.3s;
		&:hover {
			cursor: pointer;
			transform: translateY(-5px);
		}
	}
</style>
