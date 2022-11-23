<script>

    import Button from "../../UI/Button.svelte"
    let innerWidth = 1440
    const newNews = [
        {
            header: 'Hydrogen VS Electric Cars',
            text: 'Will hydrogen-fueled cars ever catch up to EVs?'
        },
        {
            header: 'The Downsides of AI Artistry',
            text: 'What are the possible adverse effects of on-demand AI image generation?'
        },
        {
            header: 'Is VC Funding Drying Up?',
            text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
        },
    ]
    $: isMobile = innerWidth < 600

  
</script>

<svelte:window bind:innerWidth/>
<section>

    <div class="{isMobile ? 'mobile_image' :'desktop_image'}"/>
    <h1>The Bright Future of Web 3.0?</h1>
    <div class="text">
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        <Button>read more</Button>
    </div>
    <div class="new_news_wrapper">
        <h2>New</h2>

        {#each newNews as news, index }
        <div class="news">
            <h4>{news.header}</h4>
            <p>{news.text}</p>
        </div>
        {/each}
       
       
        

    </div>
</section>


<style>
    section {
        display: grid;
        grid-template-columns: 1fr 1fr  minmax(min-content, 350px);
        grid-template-rows: 300px 1fr;
        grid-template-areas: "image image new" "header text new";
        gap: 3rem;
        
    }

    .mobile_image{
        grid-area: image;
        background-image: url('/images/image-web-3-mobile.jpg');
    }

    .desktop_image {
        grid-area: image;
        background-image: url('/images/image-web-3-desktop.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
    
    .text {
        grid-area: text;
        display: flex;
        flex-direction: column;
        gap: 3rem;

    }

    .text p {
        font-size: 1.5rem;
        line-height: 2.6rem;
        color: var(--color-dark-graish-blue);
    }

    h1 {
        grid-area: header;
        font-size: 5.6rem;
        color: var(--color-very-dark-blue);
    }

    .new_news_wrapper {
        grid-area: new;
        background-color: var(--color-very-dark-blue);
        padding: 3.2rem 2.4rem;
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
    }

    h2 {
        font-size: 4rem;
        line-height: 4rem;
        color: var(--color-soft-orange);
    }
    .new_news_wrapper div:not(:last-of-type){
        border-bottom:1px solid #979797;
        
    }

    .news h4 {
        font-size: 2rem;
        line-height: 2.4rem;
        color: var(--color-off-white);
        cursor: pointer;
        margin-bottom: 0.8rem;
    }

    .news p {
        font-size: 1.5rem;
        line-height: 2.6rem;
        color: var(--color-graish-blue);
        margin-bottom: 3rem;
        
    }

    .news h4:hover {
        color: var(--color-soft-orange);
    }

    @media(max-width:1000px) {
        section {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 300px min-content 1fr;
            grid-template-areas: "image image" " header text" "new new";
        }

        .desktop_image {
            background-size: cover;
        }

        h1 {
            font-size: 4rem;
        }
    }

    @media(max-width:600px) {
        section {
            grid-template-columns: 1fr;
            grid-template-rows: 300px repeat(3, min-content);
            grid-template-areas: "image" "header" "text " "new";
        }

        .desktop_image {
            background-size: cover;
        }

        .news h4 {
            font-size: 2rem;
            line-height: 2.4rem;
        }

        .new_news_wrapper {
            margin-top: 3.4rem;
        }
    }

</style>

