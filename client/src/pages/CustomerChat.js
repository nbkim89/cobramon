import React, { useState, useEffect } from "react";
import Chat from "../components/Chat/Chat";
import queryString from "query-string";

function CustomerChat({ location }) {
  const [room, setRoom] = useState("");
  useEffect(() => {
    const { room } = queryString.parse(location.search);
    setRoom(room);
  }, []);

  return <Chat name="customer" room={room} />;
}

export default CustomerChat;
