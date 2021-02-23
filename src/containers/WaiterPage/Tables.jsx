import React from "react";
import { useState } from "react";
import "./WaiterPage.scss";
import Popup from "../../components/Popup/Popup";

function Tables() {
  const [tables] = useState([
    { name: "table1" },
    { name: "table2" },
    { name: "table3" },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [menu] = useState([
    { name: "pasta" },
    { name: "salad" },
    { name: "tacos" },
  ]);
  const [order, setOrder] = useState([]);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  function addToOrder(item) {
    setOrder([item, ...order]);
  }

  function submitOrder(table, order) {
    console.log(table, order);
    setOrder([]);
  }

  return (
    <>
      <h2>Tables</h2>
      <ul>
        {tables.map((table) => {
          return (
            <li key={table.name}>
              <div class="table-icon" id={table.name} onClick={togglePopup}>
                {table.name}
              </div>
              {showPopup ? (
                <Popup
                  table={table.name}
                  menu={menu}
                  order={order}
                  closePopup={togglePopup.bind(this)}
                  addToOrder={addToOrder.bind(this)}
                  submitOrder={submitOrder.bind(this)}
                />
              ) : null}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Tables;
