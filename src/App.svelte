<script>
	import Header from "./components/header/Header.svelte"; 
	import Main from "./components/main/Main.svelte";
  	import Modal from "./UI/Modal.svelte";
	import ModalStore from "../src/store/modalStore"
	import MobileMenu from "./components/mobile-menu/MobileMenu.svelte";

	import {onDestroy} from "svelte"
	
	let isModalOpen = false


	
	const unsub = ModalStore.subscribe((data) => {
		isModalOpen = data.isOpen
	})

	onDestroy(() => {
	unsub()
	})
</script>


{#if isModalOpen}

<Modal>
	<MobileMenu/>
</Modal>
{/if}
<Header/>
<Main/>

