export default function takeMessage(
  phoneNumber,
  IdInstance,
  ApiTokenInstance,
  setLetters
) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    chatId: `${phoneNumber}@c.us`,
    count: 100,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    `https://api.green-api.com/waInstance${IdInstance}/getChatHistory/${ApiTokenInstance}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => setLetters(result.reverse()))
    .catch((error) => console.log("error", error));
}
