import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./welcome.css";

function Welcome() {
  const { company_id, table_num, company_name } = useParams();
  const [decodedCompanyName, setDecodedCompanyName] = useState()

  useEffect(() => {
    setDecodedCompanyName(decodeURI(company_name))
  }, []);

  return (
    <div className="background-image">
      <h1 className="title-text"> Welcome to {decodedCompanyName} </h1>
      <Link onClick={e => (!table_num || !company_id) ? e.preventDefault() : null} to={`/customerchat?name=customer&room=${company_id}-${table_num}`}>
        <button type="submit"
        >Start Chat</button>
      </Link>
    </div>
  );
}

export default Welcome;
