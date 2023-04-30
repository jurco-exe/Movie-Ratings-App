<template>
	<div class="container">
		<div class="hero-section">
			<h1 class="text-center my-5 header">Predmety</h1>
			<div class="row my-5">
				<CardComponent :cardList="cardList" @card-clicked="handleCardClick" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, onMounted } from 'vue';
	import CardComponent from '../components/CardComponent.vue';
	import { Card } from '../types/card';
	import { db } from '@/firebase';
	import { collection, doc, getDocs } from 'firebase/firestore';
	import { useRouter } from 'vue-router';

	export default defineComponent({
		name: 'SubjectsComponent',
		components: {
			CardComponent
		},
		props: {
			// cardList: []
		},
		setup() {
			const cardList = ref<Card[]>([]);

			onMounted(async () => {
				const querySnapshot = await getDocs(collection(db, 'card'));
				let fbCards: Card[] = [];
				querySnapshot.forEach((doc) => {
					const card = {
						id: doc.id,
						name: doc.data().name,
						class: doc.data().class,
						description: doc.data().description
					};
					fbCards.push(card);
				});
				cardList.value = fbCards;
			});

			const handleCardClick = (card: Card) => {
				const router = useRouter();
				router.push({
					name: 'SubjectView',
					params: {
						name: card.name,
						class: card.class,
						description: card.description
					}
				});
			};

			return {
				cardList,
				handleCardClick
			};
		}
	});
</script>
