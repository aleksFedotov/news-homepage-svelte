<script>
    import ModalStore from "../../store/modalStore";
    import {scale, slide} from "svelte/transition"


    const clickHandler = () => {
        ModalStore.update((currentState) => {
            currentState = {...currentState, isOpen: false}
            return currentState
        })
    }
</script>

<div class="mobile_menu" transition:slide>
    <div class="close_icon_wrapper" on:click={clickHandler} on:keydown={()=>{}} >
        <svg transition:scale width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
    </div>

    <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
    </ul>
</div>

<style>
  .mobile_menu {
    max-width: 25.6rem;
    width: 100%;
    height: 100%;
    background-color: var(--color-off-white);
    margin-left: auto;
  
    padding: 2.8rem 2rem 2rem 2rem;
  }

  .close_icon_wrapper {
    
    cursor: pointer;
    text-align: end;
    margin-bottom: 8.6rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  li {
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: var(--color-very-dark-blue);
  }
</style>