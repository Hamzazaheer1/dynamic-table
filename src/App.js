import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const DUMMY_DATA = [
    { Name: "Hamza", Age: 21 },
    { Name: "Haris", Age: 20 },
    { Name: "Danailyal", Age: 21 },
  ];

  const [dummyData, setDummyData] = useState(DUMMY_DATA);

  const removeItem = (item) => {
    setDummyData((current) =>
      current.filter((dummyData) => {
        return dummyData !== item;
      })
    );
  };

  return (
    <div className="App">
      <form>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((mydata) => (
              <tr>
                <td>{mydata.Name}</td>
                <td>{mydata.Age}</td>
                <td>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      {
                        removeItem(mydata);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
