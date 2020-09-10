import Container from "../../components/Container";
import React, {useState, useEffect} from 'react';
import API from "../../utils/API";
import "./tables.css";
import { useAuth } from "../../utils/auth";

function Tables() {
  const { user } = useAuth();
  const [tables, setTables] = useState([]);
  const [selectedTableNum, setSelectedTableNum] = useState(null);

  useEffect(() => {
    API.getUser(user.id)
      .then((res) => {
        setTables(res.data.tables.map(table => (
          <div className="sidebar-item" onClick={() => setSelectedTableNum(table.table_num)}>
            <p className="sidebar-title">Table {table.table_num}</p>
          </div>
        )))
      });
  }, [user]);

  return (
    <Container>
      <h1> Tables PAGE </h1>
      {/* <div>
        {selectedTableNum}
      </div> */}
      <div className="sidebar-container">
        {tables}
      </div>
    {/* <Chat
      TODO: connect sidebar to chat component by passing selectedTablenum(?)
      tableId={selectedTableNum}
    /> */}
    </Container>
  );
}

export default Tables;