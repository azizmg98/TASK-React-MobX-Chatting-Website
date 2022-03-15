import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ChatRoomsList from "./components/ChatRoomsList";
import ChatRoom from './components/ChatRoom'
import roomStore from "./roomStore";
import { observer } from "mobx-react";

const App = () => {

  // can we call use effect in the store?
  useEffect(() => {
    roomStore.fetchRooms();
  }, []);

  // moved from ChatRoomList since we're also gonna use it in ChatRoom
  const rooms = roomStore.rooms

  return (
    <div className="__main">
      <div className="main__chatbody">
        <center>
          <Routes>
            <Route
              path="/room/:roomSlug"
              element={<ChatRoom rooms={rooms}/>}
            />
            <Route path="/" element={<ChatRoomsList rooms={rooms} />} />
          </Routes>
        </center>
      </div>
    </div>
  );
};

export default observer(App);
