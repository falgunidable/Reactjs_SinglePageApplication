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

  return <></>;
};
