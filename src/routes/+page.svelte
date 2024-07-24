<script>
	import Header from './header.svelte';
	import Skills from './skills.svelte';
	import profile from '../profile';

	import { scrollY, projectSection, mainRoot, showingAllCertificates } from '../store.js';
	import { onMount } from 'svelte';
	import ProjectsHead from './projectsHead.svelte';
	import Project from './project.svelte';
	import Education from './education.svelte';
	import Button from './button.svelte';
	import Certificates from './certificates.svelte';
	import Footer from './footer.svelte';
	import Portfolio from './portfolio.svelte';

	// let mainRoot;
	let containerWidth;
	let scrolled = 0;
	let projectSectionPassed = false;

	function handleScroll() {
		scrollY.set($mainRoot.scrollTop);
		// console.log($projectSection.getBoundingClientRect().top);
		const projectSectionTop = $projectSection.getBoundingClientRect().top;
		if (projectSectionTop < 0) {
			projectSectionPassed = true;
		} else {
			projectSectionPassed = false;
			showingAllCertificates.set(false);
		}
	}

	onMount(() => {
		$mainRoot.addEventListener('scroll', handleScroll);
	});

	// $: console.log($scrollY / 10000);
	// $: console.log($scrollY);
	$: console.log(projectSectionPassed);
</script>

<!-- {@debug y} -->

<main
	class="_sm:snap-y overflow-y-scroll overflow-x-hidden h-screen scroll-smooth
	{projectSectionPassed ? '_sm:snap-mandatory' : '_sm:snap-proximity'}"
	bind:this={$mainRoot}
	bind:clientWidth={containerWidth}
	on:scroll={({ target }) => (scrolled = target.scrollTop)}
>
	<Header />
	<Skills />
	<Portfolio />
	<ProjectsHead />
	<section bind:this={$projectSection} class="bg-color-1 min-h-screen">
		{#each profile.projects as project}
			<Project
				projectName={project.projectName}
				projectType={project.projectType}
				projectTechStack={project.projectTechStack}
				projectDetails={project.projectDetails}
			/>
		{/each}
	</section>

	<Education />
	<Certificates />
	<Footer />
</main>

<style>
	*::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	*::-webkit-scrollbar-track {
		background: #b89e8f;
	}

	/* Handle */
	*::-webkit-scrollbar-thumb {
		background: #3c0123;
	}

	/* Handle on hover */
	*::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>
