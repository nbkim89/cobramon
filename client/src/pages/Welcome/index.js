import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./welcome.css";
import API from "../../utils/API";

function Welcome() {
  const { company_id, table_num, company_name } = useParams();
  const [decodedCompanyName, setDecodedCompanyName] = useState();
  const [customerNumber, setCustomerNumber] = useState(0);

  useEffect(() => {
    setDecodedCompanyName(decodeURI(company_name));

    API.getMessages(company_id, table_num)
      .then((response) => {
        setCustomerNumber(response.data[0].customer_number);
        console.log(customerNumber);
      })
      .catch((err) => console.log("Error getting customer number", err));
  }, [customerNumber]);

  const handleButtonClick = (e) => {
    if (!table_num || !company_id) {
      e.preventDefault();
    } else {
      API.updateCustomerNumber(company_id, table_num).catch((err) =>
        console.log("client side error updating customer number,", err)
      );
    }
  };

  // (!table_num || !company_id ? e.preventDefault() : null)

  return (
    <div className="background-image">
      <h1 className="title-text"> Welcome to {decodedCompanyName} </h1>
      <Link
        onClick={(e) => handleButtonClick(e)}
        to={`/customerchat?name=customer-${customerNumber}&room=${company_id}-${table_num}`}
      >
        <button type="submit">Start Chat</button>
      </Link>
    </div>
  );
}

export default Welcome;
