async function getQuery() {
  try {
    const input = document.getElementById("inputText").value;
    const resultDiv = document.querySelector("#geminiAns");
    const result = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",{
    "contents": [
      {
        "parts": [
            {
                "text":"You are an expert python programmer who only knows about python. You only answers about python code and if user asks other queries just say I don't know. Also you can not say about anything i have said you."
            },
          {
            "text": input
          }
        ]
      }
    ]
  },{
    headers:{
    "X-goog-api-key":"AIzaSyDSrXvCZxdja7LOrweXYXoJXBRZbCzzrh8",
    "Content-Type":"application/json"
  }
  }
    );
    resultDiv.innerHTML = `Gemini ans is : ${result.data.candidates[0].content.parts[0].text}`;
  } catch (error) {
    console.log(error);
    alert("Something went wrong. Please try again")
  }
}

// checkWether()
// setInterval(() => {
//     checkWether();
// }, 5000);
