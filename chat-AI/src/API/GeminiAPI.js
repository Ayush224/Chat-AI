import axios from "axios";
import key from './key'


async function getAnswer(prompt){

    const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}` ,
        method: "post",
        data: {
          contents: [{ parts: [{ text: prompt }] }],
        },
      });
    // console.log(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
    return response["data"]["candidates"][0]["content"]["parts"][0]["text"];
}

export default getAnswer;