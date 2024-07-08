import axios from 'axios';
import { json } from '@sveltejs/kit';

export default async function sendMessage(message: string) {
	try {
		const response = await axios.post('/api/send', {
			data: message
		});
		const data = await response.data;
		console.log(data);
		return { data: data };
	} catch (error) {
		console.error(error);
		return { error };
	}
}
