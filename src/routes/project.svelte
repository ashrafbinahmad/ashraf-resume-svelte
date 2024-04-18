<script>
	export let projectName;
	export let projectType;
	export let projectTechStack;
	export let projectDetails;
</script>

<div class="container max-w-[80rem] m-auto grid grid-cols-[1fr_4fr] gap-6 h-full min-h-96  snap-start relative ">
	<div class="left h-full my-auto min-w-[200px] grid gap-1 justify-center content-center">
		<h4 class="text-[55px] leading-[40px]">{projectName}</h4>
		<h5 class="text-[18px] text-color-2">{projectType}</h5>
		<h6 class="text-[15px] font-sans italic font-bold">{projectTechStack}</h6>
	</div>
	<div class="right grid content-center font-sans text-[17px]">{@html projectDetails}</div>
</div>
