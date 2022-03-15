import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ChatRoomsList from "./components/ChatRoomsList";
// import chatRoom from './components/ChatRoom'
import roomStore from "./roomStore";

const App = () => {
  // can we call use effect in the store?
  useEffect(() => {
    roomStore.fetchRooms();
  }, []);

  return (
    <div className="__main">
      <div className="main__chatbody">
        <center>
          <Routes>
            {/* <Route
              path="/room/:roomSlug"
              element={<ChatRoom rooms={rooms} createMsg={createMsg} />}
            /> */}
            <Route path="/" element={<ChatRoomsList />} />
          </Routes>
        </center>
      </div>
    </div>
  );
};

export default App;
