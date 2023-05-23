export default async function fetchMessageSend(
  text,
  phoneNumber,
  IdInstance,
  ApiTokenInstance,
  setText
) {
  try {
    let response = await fetch(
      `https://api.green-api.com/waInstance${IdInstance}/SendMessage/${ApiTokenInstance}`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId: `${phoneNumber}@c.us`,
          message: text,
        }),
      }
    );
    let result = await response.json();
    console.log(result);
    setText("");
  } catch (err) {
    console.log(`Error`, err);
    setText("Что то пошло не так");
  }
}
