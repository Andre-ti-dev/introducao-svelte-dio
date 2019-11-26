import { writable } from 'svelte/store';

const user = writable({ name: 'André' });

export { user };
