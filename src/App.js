import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setData(result);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {/* {data.map((item) => ( */}
      <p>{JSON.stringify(data.values[3].value)}</p>
      {/* ))} */}
    </div>
  );
}

export default App;
