<script>
  import Header from '$lib/components/Header.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import projectsData from '$lib/data/posts.json';

  // The data is already an array, so you can use it directly
  const projects = projectsData;

</script>

<svelte:head>
  <title>Axel Demborg - Portfolio</title>
  <meta name="description" content="Portfolio of Axel Demborg's projects." />
</svelte:head>

<Header />

<main class="container mx-auto p-4 sm:p-6 md:p-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {#each projects as project (project.title)}
      <ProjectCard title={project.title} description={project.intro} images={project.images} links={project.links}/>
    {/each}
  </div>
</main>