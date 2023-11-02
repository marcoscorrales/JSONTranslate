const axios = require("axios");
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showError = (textError: string) => {
  toast.error(textError, {
    position: "top-center",
    autoClose: 3000,
  });
};

function isValidJSON(textJson: string) {
  try {
    JSON.parse(textJson);
    return true;
  } catch (error) {
    return false;
  }
}
const requestLimitPerMinute = 5; // Requests limit per minute
const requestQueue: number[] = []; // Stores timestamps of requests

// Function to check if a request is allowed
function isRequestAllowed() {
  const now = Date.now();

  // Remove old timestamps
  while (requestQueue.length > 0 && now - requestQueue[0] > 60 * 1000) {
    requestQueue.shift();
  }

  // Check if the request limit is exceeded
  if (requestQueue.length >= requestLimitPerMinute) {
    return false; // Limit reached
  }

  // Record the timestamp of the request
  requestQueue.push(now);

  return true; // The request is allowed
}

export const translateText = async (
  text: string,
  languageSource: string,
  languageTarget: string
): Promise<string> => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("source_language", languageSource.toLocaleLowerCase());
  encodedParams.set("target_language", languageTarget.toLocaleLowerCase());
  encodedParams.set("text", text);

  if (!isValidJSON(text)) {
    showError("The text is not valid JSON");
    return "";
  }

  if (!isRequestAllowed()) {
    showError("Request limit per minute reached");
    return "";
  }

  const options = {
    method: "POST",
    url: "https://text-translator2.p.rapidapi.com/translate",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return response.data.data.translatedText;
  } catch (error) {
    showError("Something went wrong");
    return "";
  }
};
