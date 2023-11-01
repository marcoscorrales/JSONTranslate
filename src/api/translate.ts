const axios = require('axios');
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showError = () => {
    toast.error('Something went wrong', {
      position: 'top-center',
      autoClose: 3000, // Duración de la notificación en milisegundos
    });
  };

export const translateText = async (text: string, languageSource: string, languageTarget: string): Promise<string> => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('source_language', languageSource.toLocaleLowerCase());
    encodedParams.set('target_language', languageTarget.toLocaleLowerCase());
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
        console.log(response)
        return (response.data.data.translatedText);
    } catch (error) {
        showError();
        return '';
    }
}