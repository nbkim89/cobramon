import React, { useState, useEffect } from "react";
import Chat from "../components/Chat/Chat";
import queryString from "query-string";

function CustomerChat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);
  }, []);

  return <Chat name={name} room={room} />;
}

export default CustomerChat;
