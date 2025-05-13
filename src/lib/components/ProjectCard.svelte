<script lang="ts">
    const {title, description, images, links}: {title: string, description: string, images: [string], links: [{text: string, url: string}]} = $props()
</script>
<card class="card">
    <carousel class="carousel">
        {#each images as image}
        <div class="caruousel-item">
            <img src={image}/>
        </div>
        {/each}
    </carousel>
    <h2 class="card-title">{title}</h2>
    <div class="card-body prose">
        {description}
    </div>
    <div class="card-actions">
        {#each links as link}
            <a class="btn" href={link.url}>{link.text}</a>
        {/each}
    </div>
    
</card>