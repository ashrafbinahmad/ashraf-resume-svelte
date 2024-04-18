<script>
	import Button from './button.svelte';
	import PicZaitooncampus from '$lib/images/zaitooncampus.in.webp';
	import PicEcart from '$lib/images/e-cart.webp';
	import { projectSection } from '../store';
	import { onMount } from 'svelte';

	let thisSection;
	let thisSectionScrollTop = 0;

</script>

<section
	bind:this={$projectSection}
	id="Projects"
	class="min-h-screen grid grid-cols-2 gap-3 snap-start relative bg-color-1"
>
	<div class="left-headings my-auto ml-5 grid gap-3">
		<h3 class="text-[77px] leading-[77px]">Projects</h3>
		<p class="text-[21px]">Sibaq.in / E-Cart / Zaitooncampus.in / ...</p>
		<div class="buttons text-[23px]">
			<Button class="">Contact Me</Button> <br />
			<Button class="">Hire Me</Button>
		</div>
	</div>
	<div class="right-images">
		<div class="images relative bg-black top-[35vh] mr-16">
			dsaf
			<img
				class="absolute translate-y-[calc(-50%-2rem)] opacity-60 translate-x-5 shadow-lg shadow-color-2 rounded border _rotate-3 hover:rotate-6 transition-all"
				src={PicEcart}
				alt=""
			/>
			<img
				class="absolute -translate-y-1/2 shadow-lg shadow-color-2 rounded border hover:rotate-2 transition-all"
				src={PicZaitooncampus}
				alt=""
			/>
		</div>
	</div>
	<div class="absolute bottom-0 text-center w-screen pb-8">Scroll to show some of my project</div>
</section>
