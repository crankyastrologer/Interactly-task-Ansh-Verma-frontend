import axios from 'axios';
import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */

import { URL } from '$env/static/private';
interface req {
	data: string;
}
export async function POST({ request }) {
	const text: req = await request.json();
	try {
		const response = await axios.post(URL, {
			question: text.data
		});

		const data = response.data;

		return json(data.response);
	} catch (error) {
		console.error(error);
		return json('error');
	}
}
