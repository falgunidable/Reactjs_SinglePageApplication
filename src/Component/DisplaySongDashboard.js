import { useState, useEffect } from "react";

const DisplaySongDashboard = () => {
  const [tableData, setTableData] = useState([]);

  const removeStorage = (index) => {
    // Create a copy of the current tableData array
    const updatedData = [...tableData];

    // Remove the item at the specified index
    updatedData.splice(index, 1);

    // Update state and local storage with the modified array
    setTableData(updatedData);
    localStorage.setItem("SongData", JSON.stringify(updatedData));
  };

  useEffect(() => {
    // Retrieve data from local storage or wherever you store it
    const storedData = JSON.parse(localStorage.getItem("SongData"));

    if (storedData && Array.isArray(storedData)) {
      setTableData(storedData);
    }
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <table className="table table-hover table-responsive">
      <thead>
        <tr className="text-center">
          <th scope="col" className="col-md-3">
            SONG NAME
          </th>
          <th scope="col">SOURCE</th>
          <th scope="col">ADDED ON</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="align-center">
              <img src={item.songimg} alt="Song Thumbnail" width={72} />{" "}
              {item.songname}
            </td>
            <td className="align-middle">{item.songsource}</td>
            <td className="align-middle">@mdo</td>
            <td className="align-middle">
              <i className="bi bi-play-circle-fill text-warning"></i>
            </td>
            <td className="align-middle">
              <i
                className="bi bi-trash"
                style={{ cursor: "pointer" }}
                onClick={() => removeStorage(index)}
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplaySongDashboard;
