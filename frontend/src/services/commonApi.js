import axios from 'axios';

export const commonApi = async (httprequest, url, reqBody) => {
  const reqConfig = {
    method: httprequest,
    url,
    data: reqBody,
    headers: { "Content-Type": "application/json" },
  };

  try {
    const result = await axios(reqConfig);
    return result; // Return the result directly on success
  } catch (err) {
    console.error("API Error:", err.message); // Log the error message for debugging
    throw err; // Rethrow the error for higher-level handling
  }
};
