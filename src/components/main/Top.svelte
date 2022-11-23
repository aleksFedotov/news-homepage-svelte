<script></script>

<div class="top_wrapper">
    <div class="article">
        <img src="./images/image-retro-pcs.jpg" alt="retro">
        <div class="content">
            <h3>01</h3>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
        </div>
    </div>
    <div class="article">
        <img src="./images/image-top-laptops.jpg" alt="retro">
        <div class="content">
            <h3>02</h3>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best picks for various needs and budgets.</p>
        </div>
    </div>
    <div class="article">
        <img src="./images/image-gaming-growth.jpg" alt="retro">
        <div class="content">
            <h3>03</h3>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
    </div>
</div>

<style>
    .top_wrapper {
        display: flex;
        gap: 3rem;
        margin-top: 7rem;
        
       
    }

    .article {
        display: flex;
        gap:2.4rem;
        max-width: 35rem;
        align-items: center;
    }

    img {
        width: 10rem;
        height: 12.7rem;
    }

    h3 {
        font-size: 3.2rem;
        line-height: 3.2rem;
        color: var(--color-graish-blue);
        margin-bottom: 1.2rem;
    }

    h4 {
        font-size: 1.8rem;
        line-height: 2.4rem;
        color: var(--color-very-dark-blue);
        margin-bottom: 0.8rem;
        cursor: pointer;
    }

    h4:hover {
        color: var(--color-soft-red);
    }

    p {
        font-size: 1.5rem;
        line-height: 2.6rem;
    }

    @media (max-width: 600px) {
        .top_wrapper {
            flex-direction: column;
        }
    }
</style>