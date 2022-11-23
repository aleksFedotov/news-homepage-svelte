import { writable } from 'svelte/store';

const ModalStore = writable({
  isOpen: false,
});

export default ModalStore;
