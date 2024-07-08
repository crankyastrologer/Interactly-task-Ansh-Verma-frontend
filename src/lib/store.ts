import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
export interface Message {
	text: string;
	sender: 'user' | 'server';
	timestamp?: string;
}

export const messages: Writable<Message[]> = writable<Message[]>([]);
