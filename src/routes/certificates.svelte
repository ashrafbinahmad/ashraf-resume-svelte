<script>
	import PicCert1 from '$lib/images/certificates/1.webp';
	import PicCert4 from '$lib/images/certificates/4.webp';
	import PicCert5 from '$lib/images/certificates/5.webp';
	import PicCert6 from '$lib/images/certificates/6.webp';
	import PicCert7 from '$lib/images/certificates/7.webp';
	import PicCert8 from '$lib/images/certificates/8.webp';
	import PicCert10 from '$lib/images/certificates/10.webp';
	import PicCert11 from '$lib/images/certificates/11.webp';
	import PicCert12 from '$lib/images/certificates/12.webp';
	import PicCert13 from '$lib/images/certificates/13.webp';
	import PicCert14 from '$lib/images/certificates/14.webp';
	import PicCert15 from '$lib/images/certificates/15.webp';
	import { blur, fade, fly, scale } from 'svelte/transition';
	import { AngleDownOutline } from 'flowbite-svelte-icons';
	import { showingAllCertificates } from '../store';

	let images = [
		{ src: PicCert1, alt: 'Image 1' },
		{ src: PicCert4, alt: 'Image 2' },
		{ src: PicCert5, alt: 'Image 2' },
		{ src: PicCert6, alt: 'Image 2' },
		{ src: PicCert7, alt: 'Image 2' },
		{ src: PicCert8, alt: 'Image 2' },
		{ src: PicCert10, alt: 'Image 2' },
		{ src: PicCert11, alt: 'Image 2' },
		{ src: PicCert12, alt: 'Image 2' },
		{ src: PicCert13, alt: 'Image 2' },
		{ src: PicCert14, alt: 'Image 2' },
		{ src: PicCert15, alt: 'Image 2' }
		// { src: 'image3.jpg', alt: 'Image 3' }
		// Add more images as needed
	];

	let isDisplayOpen = false;
	let displayImage = { src: '', alt: '' };

	function handleCertificateClick() {
		displayImage = { src, alt };
		isDisplayOpen = true;
	}
	function handleKeyDown(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			handleCertificateClick();
		}
	}
</script>

<section
	id="Certificates"
	class="min-h-[70vh] w-screen relative overflow-hidden z-20 top-0 transition-all bg-color-4"
>
	<div class="container m-auto p-10">
		<h3 class="text-[39px] text-center text-white">Awards & Certifications</h3>
		<div
			class="image-list flex flex-wrap justify-center gap-3 py-5 overflow-hidden transition-all {$showingAllCertificates
				? 'max-h-none'
				: 'max-h-[450px] show-black'}"
		>
			{#each images as { src, alt }, i}
				<button
					on:keydown={handleKeyDown}
					on:click={() => {
						displayImage = { src, alt };
						isDisplayOpen = true;
					}}
					class="max-sm:object-cover max-sm:w-[calc(50vw-4rem)] max-sm:h-[calc(5rem)] overflow-hidden"
				>
					<img
						class="w-auto max-h-[200px] object-cover opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer
						max-sm:max-w-[calc(50vw-4rem)] max-sm:max-h-none"
						{src}
						{alt}
					/>
				</button>
				<div class="bg-white h-full w-auto grow"></div>
			{/each}
		</div>
		<button
			class="text-white absolute z-20 left-1/2 -translate-x-1/2"
			on:click={() => showingAllCertificates.set(!$showingAllCertificates)}
			on:keydown={(event) => {
				if (event.key === 'Enter' || event.key === 'Escape') {
					showingAllCertificates.set(!$showingAllCertificates);
				}
			}}
		>
			<!-- {#if $showingAllCertificates} -->
			<div class=" transition-transform {$showingAllCertificates ? "rotate-0" : "rotate-180"}"><i class="mi mi-chevron-up text-2xl "></i></div>
			<!-- {:else} -->
			<!-- <i class="mi mi-chevron-down"></i> -->
			<!-- {/if} -->
			<!-- {$showingAllCertificates ? 'Show less' : <i class="mi mi-chevron-down"><span class="u-sr-only">Chevron down</span></i>} -->
		</button>
		{#if isDisplayOpen}
			<button
				on:click={() => {
					displayImage = { src: '', alt: '' };
					isDisplayOpen = false;
				}}
				class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 transition-all"
				transition:fade
			>
				<img
					transition:scale
					class="display fixed max-w-[calc(100vw_-_2rem)] max-h-[calc(100vh_-_2rem)] z-70 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
							"
					src={displayImage.src}
					alt={displayImage.alt}
				/>
			</button>
		{/if}
	</div>
</section>

<style lang="postcss">
	.image-list.show-black::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		user-select: none;
		pointer-events: none;
		background: linear-gradient(transparent, theme(colors.color.4));
	}
</style>
