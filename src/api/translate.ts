const axios = require('axios');

export const translateText = async (text: string): Promise<string> => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('source_language', 'es');
    encodedParams.set('target_language', 'en');
    encodedParams.set('text', text);

    const options = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        data: encodedParams,
    };

    try {
        const response = await axios.request(options);
        return (response.data.data.translatedText);
    } catch (error) {
        console.error(error);
        console.log(process.env.RAPIDAPI_KEY)
        return '';
    }
}