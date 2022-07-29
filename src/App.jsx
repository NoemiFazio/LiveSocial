import { useState, useEffect } from "react";
import AddMessage from "./components/AddMessage";
import AddFriend from "./components/AddFriend";
import FriendCardList from "./components/FriendCardList";
import MessageCardList from "./components/MessageCardList";
import Navbar from "./components/Navbar/Navbar";
import ModalLogin from "./components/ModalLogin/ModalLogin";
import "./App.css";

function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [isRenderedFriendList, setRenderedFriendList] = useState(false);
  const [filteredList, setFilteredList] = useState("");
  const [isLogin, setLogin] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setLogin(false);
    }
  }, []);

  return (
    <div className="App">
      {isLogin ? (
        <ModalLogin onHandleClick={setLogin} />
      ) : (
        <>
          <Navbar />
          <div className="mainContent">
            <div className="App__friends">
              <h3>Lista degli amici</h3>
              <AddFriend
                isRenderedFriendList={isRenderedFriendList}
                onAddFriendButton={setRenderedFriendList}
              />
              <FriendCardList />
            </div>
            <div className="App_messages">
              <AddMessage
                isRenderedList={isRenderedList}
                onAddButton={setRenderedList}
              />
              <input
                type="text"
                onChange={(event) => setFilteredList(event.target.value)}
                className="Search"
                placeholder="Cerca messaggio per utente..."
              />
              <MessageCardList
                isRenderedList={isRenderedList}
                setRenderedList={setRenderedList}
                filteredList={filteredList}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
