export default async function fetchCalls(acc, setVisible, setAccount) {
  try {
    let response = await fetch(
      `https://api.green-api.com/waInstance${acc.idInstance}/getStateInstance/${acc.apiTokenInstance}`,
      {
        method: "GET",
      }
    );
    let result = await response.json();

    // setState(result.results);
    if (result.stateInstance === "authorized") {
      setVisible(false);
    }
  } catch (err) {
    setAccount({
      idInstance: "Что то пошло не так",
      apiTokenInstance: "Повторите",
    });
  }
}
