import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import { MainScreen } from "./components/MainScreen";
import Context from "./components/Context";
import reducer from "./components/reducer";
import chooseReducer from "./components/chooseReducer";
import { Modal } from "./components/Modal";
import fetchCalls from "./checkAutorized";
function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [item, chooseItem] = useReducer(chooseReducer, 0);
  const [visible, setVisible] = useState(true);
  const [account, setAccount] = useState({
    idInstance: "",
    apiTokenInstance: "",
  });
  useEffect(() => {
    console.log(account);
  });

  return (
    <Context.Provider value={{ state, dispatch, item, chooseItem, account }}>
      <div className="App">
        <Modal visible={visible} setVisible={setVisible}>
          <div className="modalInputs">
            <h4 className="modalItems">Введите данные</h4>
            <input
              className="modalItems modalInput"
              value={account.idInstance}
              placeholder="idInstance"
              onChange={(e) =>
                setAccount((prev) => {
                  return { ...prev, idInstance: e.target.value };
                })
              }
            />
            <input
              className="modalItems modalInput"
              placeholder="apiTokenInstance"
              value={account.apiTokenInstance}
              onChange={(e) =>
                setAccount((prev) => {
                  return { ...prev, apiTokenInstance: e.target.value };
                })
              }
            />
            <button
              className="modalItems"
              onClick={() => fetchCalls(account, setVisible, setAccount)}
            >
              Проверить
            </button>
          </div>
        </Modal>
        <MainScreen />
      </div>
    </Context.Provider>
  );
}

export default App;
