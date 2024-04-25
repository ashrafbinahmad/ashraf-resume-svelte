<script>
	import profile from '../profile';
</script>

<section
	class="_bg-color-1 min-h-[25vh] w-screen relative overflow-hidden z-20 top-0 transition-all bg-color-4 text-white pt-10
          "
	id="education"
>
	<h3 class="text-[39px] text-center">Education</h3>
	<div class="bg-color-2 w-full h-2 mt-5 opacity-50"></div>
	<div class="overflow-x-auto">
		<div class="container ml-5 grid grid-cols-4 max-sm:w-[50rem] overflow-x-auto">
			{#each profile.education as edu}
				<div class="education">
					<div class="w-4 h-4 rounded-full bg-color-2 -mt-3 opacity-50"></div>
					<div class="mt-5">
						<h5 class="text-color-2">{edu.year}</h5>
						<h5 class="text-[15px]">{edu.degree} <br /> {edu.institution}</h5>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
