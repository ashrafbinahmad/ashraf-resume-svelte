<script>
	import profile from '../profile';
	import LogoMarquee from './logoMarquee.svelte';
	let skillCategories = profile.skillCategories;
</script>

<section id="Skills" class="bg-color-4 min-h-screen grid snap-start snap-always">
	<div class="px-2 container _max-w-[70rem] m-auto py-5 heading text-white">
		<h3 class="sm:text-[3rem] text-[2rem]  border-b border-color-2">Skills</h3>
		<ul class="grid grid-cols-1 h-[40rem] justify-between mt-4">
			{#each skillCategories as skillCategory}
				<li class="sm:grid grid-cols-[auto_1fr] sm:text-[40px] text-[20px] text-color-1">
					<h5 class="max-sm:opacity-20">{skillCategory.groupName}</h5>
					<div>
						<LogoMarquee class='mt-1' bgColor={'#2D112A'} logoes={skillCategory.skills} />
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
