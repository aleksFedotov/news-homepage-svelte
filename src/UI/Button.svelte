<button>
   <slot/> 
</button>

<style>
    button {
        width: 18.5rem;
        height: 4.8rem;
        font-family: inherit;
        color: var(--color-off-white);
        background-color: var(--color-soft-red);
        cursor: pointer;
        border: none;
        outline: none;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.4rem;
        transition: transform 0.3s ease;
        letter-spacing: 4.38px;
    }

    button:hover {
        background-color: var(--color-very-dark-blue);
    }

    button:active {
        transform: scale(0.97);
    }
</style>