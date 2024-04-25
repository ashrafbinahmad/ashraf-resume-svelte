<script>
	import { onMount } from 'svelte';
	export let bgColor = 'black';
	export let logoes = [];
	let className;
	export { className as class };
	// export
	let thisElement;
	let marqueeContent;
	onMount(() => {
		const marqueeElementsDisplayed = getComputedStyle(thisElement).getPropertyValue(
			'--marquee-elements-displayed'
		);

		thisElement.style.setProperty('--marquee-elements', marqueeContent.children.length);
		thisElement.style.setProperty('--marquee-bg-color', bgColor);

		for (let i = 0; i < marqueeElementsDisplayed; i++) {
			marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
		}
	});
</script>

<div bind:this={thisElement} class="component grid _justify-center {className}">
	<div class="marquee">
		<ul class="marquee-content grid gap-4" bind:this={marqueeContent}>
			{#each logoes as logo}
				<li class="px-5 py-2 rounded-lg bg-[#fffffff8]  w-5 _grayscale hover:grayscale-0 brightness-70 hover:brightness-100 "><img class="max-h-10" src={logo.src} alt={logo.alt} /></li>
			{/each}
		</ul>
	</div>
</div>

<style lang="postcss">
	/* @import url('https://fonts.googleapis.com/css?family=Montserrat'); */

	.component {
		font-family: 'Montserrat', sans-serif;
		/* background-color: #eee; */
		color: #111;
		width: 100%;
	}

	.component {
		--marquee-width: 100%;
		--marquee-elements-displayed: 5;
		--marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
		--marquee-animation-duration: calc(var(--marquee-elements) * 3s);
		--marquee-bg-color: #111;
	}

	.marquee {
		width: var(--marquee-width);
		height: var(--marquee-height);
		background-color: var(--marquee-bg-color);
		color: #eee;
		overflow: hidden;
		position: relative;
	}
	.marquee:before,
	.marquee:after {
		position: absolute;
		top: 0;
		width: 20rem;
		height: 100%;
		content: '';
		z-index: 1;
		pointer-events: none;
	}
	.marquee:before {
		left: 0;
		background: linear-gradient(to right, var(--marquee-bg-color) 0%, transparent 100%);
	}
	.marquee:after {
		right: 0;
		background: linear-gradient(to left, var(--marquee-bg-color) 0%, transparent 100%);
	}
	.marquee-content {
		list-style: none;
		height: 100%;
		display: flex;
		animation: scrolling var(--marquee-animation-duration) linear infinite;
	}
	.marquee-content:hover {
  animation-play-state: paused;
}
	@keyframes scrolling {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements)));
		}
	}
	.marquee-content li {
		display: flex;
		justify-content: center;
		align-items: center;
		/* text-align: center; */
		flex-shrink: 0;
		width: var(--marquee-element-width);
		max-height: 100%;
		font-size: calc(var(--marquee-height) * 3 / 4); /* 5rem; */
		white-space: nowrap;
	}

	/* .marquee-content li img {
		width: 100%;
		border: 2px solid #eee;
	} */

	@media (max-width: 600px) {
		.component {
			font-size: 12px;
		}
		.component {
			--marquee-width: 100vw;
			--marquee-height: 6vh;
			--marquee-elements-displayed: 3;
		}
		.marquee:before,
		.marquee:after {
			width: 5rem;
		}
	}
</style>
