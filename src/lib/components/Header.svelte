<script>
  const socialLinks = [
    { href: 'YOUR_LINKEDIN_URL', label: 'LinkedIn', icon: 'L' }, // Replace L with an actual SVG or icon component
    { href: 'YOUR_GITHUB_URL', label: 'GitHub', icon: 'G' },
    { href: 'YOUR_INSTAGRAM_URL', label: 'Instagram', icon: 'I' },
  ];
</script>

<header class="navbar">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-xl normal-case">Axel Demborg</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      {#each socialLinks as link}
        <li>
          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} class="btn btn-ghost btn-sm">
            {link.icon}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</header>