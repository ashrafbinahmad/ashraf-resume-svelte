<script>
	import PicZaitooncampus from '$lib/images/zaitooncampus.in.webp';
	import profile from '../profile';
	let portfolio = profile.portfolio;
	// import PicZaitooncampus from '$lib/images/zaitooncampus.in.webp';
</script>

<section class=" min-h-[50vh] grid items-center justify-center">
	<div class="container m-auto my-11 mx-auto">
		<h1 class="text-color-3 text-3xl mb-5 text-center">PORTFOLIO</h1>
		<ul class="grid grid-cols-3 gap-2 max-sm:grid-cols-2 max-sm:px-2">
			{#each portfolio as portfolioItem}
				<li class="flex group">
					<a href={portfolioItem.link || '#'} target="_blank" class="  overflow-hidden border-b border-b-color-2">
						<img class="max-h-52 border-2 border-color-1 grayscale group-hover:grayscale-0" src={portfolioItem.img} alt="" />
                        <p class="text-center">{portfolioItem.title}</p>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
