import { useState, useEffect } from "react";

const FetchData = () => {
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
    <>
      <p>{JSON.stringify(data.values[3].key)}</p>
    </>
  );
};

export default FetchData;
