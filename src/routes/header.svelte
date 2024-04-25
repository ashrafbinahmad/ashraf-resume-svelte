<script>
	import layer0 from '$lib/images/layer-0.png';
	import layer1 from '$lib/images/layer-1.png';
	import layer2 from '$lib/images/layer-2.png';
	import PicProfile from '$lib/images/profile photo.webp';
	import PicParallaxFlat from '$lib/images/parallax flat.png';
	import profileData from '../profile.js';
	import { typewriter } from '$lib/transitions.js';
	import { onMount } from 'svelte';
	import { scrollY } from '../store.js';

	let isVisible = false;
	onMount(() => {
		isVisible = true;
	});
	let headerSection;
	let showMenu = false;
	function toggleMenu() {
		showMenu = !showMenu;
	}
	let menuItems = ['About', 'Skills', 'Projects', 'Contact'];
	let parallaxLayers = [
		{
			image: layer0,
			translate: '4',
			scale: 1
		},
		{
			image: layer1,
			translate: '2',
			scale: 1
		},
		{
			image: layer2,
			translate: '1',
			scale: 1
		}
		// {
		// 	image: layer3,
		// 	translate: ''
		// },
	];
</script>

<section
	class="bg-color-1 min-h-screen w-screen relative snap-start overflow-hidden z-20 top-0 transition-all"
	bind:this={headerSection}
>
	<nav
		class="container m-auto text-xl flex justify-between items-center h-[5rem] relative overflow-hidden
max-sm:block max-sm:z-50 max-sm:h-full"
	>
		<div class="left text-2xl p-3 max-sm:text-lg">Ash/</div>
		<button class="absolute right-1 top-0 z-50  p-3 rotate-90 {showMenu ? 'text-white' : 'text-black' }" on:click={toggleMenu}>|||</button>
		<div
			class="right h-full max-sm:bg-black max-sm:text-white transition-all max-sm:fixed max-sm:right-0 overflow-hidden top-0 {showMenu
				? 'max-sm:w-full'
				: 'max-sm:w-0'}"
		>
			<menu
				class="flex gap-2 h-full
	max-sm:grid max-sm:w-full max-sm:justify-end max-sm:content-center
	"
			>
				{#each menuItems as item}
					<a href="#{item}" on:click={toggleMenu}>
						<li
							class="inline-block px-4 py-2 cursor-pointer relative z-20 transition-all max-sm:block"
						>
							{item}
						</li>
					</a>
				{/each}
			</menu>
		</div>
	</nav>
	<div class="mt-[2rem] w-screen text-center _relative z-10 p-3">
		<img class="h-[172px] m-auto rounded-full max-sm:h-[100px]" src={PicProfile} alt="" />
		<h1 class="text-[3.5rem] max-sm:text-[2rem]">Muhammed Ashraf</h1>
		{#if isVisible}
			<h2 class="text-lg text-color-3 max-sm:text-[1rem]" transition:typewriter>
				FULL-STACK DEVELOPER
			</h2>
			<p
				class="text-sm font-sans m-auto max-w-[38rem] max-sm:text-[14px]"
				transition:typewriter={{}}
			>
				{profileData.about}
			</p>
		{:else}
			<h2 class="text-lg text-color-3">|</h2>
		{/if}
	</div>
	<div class="z-0">
		{#each parallaxLayers as layer}
			<img
				class="scale-125 absolute bottom-0 w-full max-sm:scale-100 max-sm:w-[300%] max-sm:max-w-none max-sm:opacity-90"
				style="transform: 
					translate(0,{(-$scrollY * layer.translate) / 13 / (parallaxLayers.length - 1)}px) 
					scale({$scrollY / 5000 + 1 * layer.scale}); "
				src={layer.image}
				alt="parallax layer"
			/>
		{/each}
	</div>
	<!-- <img class="absolute bottom-0 w-full" src={PicParallaxFlat} alt="" /> -->
</section>
<slot />

<style lang="postcss">
	/* main {
		scroll-snap-type: y proximity;
		overflow-y: scroll;
		
	} */
	section {
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
	menu li {
		overflow: hidden;
		border-radius: 5px;
		border: solid 1px transparent;
		&:hover {
			border: solid 1px theme('colors.color.2');
		}
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 200%;
			height: 300%;
			z-index: -1;
			transition: all 1s;
			width: 0;
			background: theme('colors.color.2');
			transform: rotate(-45deg) translate(-20%, -50%);
		}
		&:hover::before {
			width: 200%;
		}
	}
</style>
