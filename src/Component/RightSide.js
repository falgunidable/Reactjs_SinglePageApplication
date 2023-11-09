import { useState, useEffect } from "react";
import DisplaySongDashboard from "./DisplaySongDashboard";

const RightSide = () => {
  const songValues = {
    songname: "",
    songurl: "",
    songsource: "",
    songimg: "",
  };

  const [data, setData] = useState(songValues);

  const storeData = () => {
    var existingData = JSON.parse(localStorage.getItem("SongData"));

    if (!Array.isArray(existingData)) {
      // If existingData is not an array, initialize a new array
      existingData = [];
    }

    // Add the new set of data to the array
    existingData.push(data);

    // Store the updated array in local storage
    localStorage.setItem("SongData", JSON.stringify(existingData));
    console.log("Data stored in local storage:", data);
    setData(songValues);
  };

  const handleChange = (e) => {
    if (e.target.name === "songimg") {
      // Handle file input separately
      setData({
        ...data,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      // Handle other input fields
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between">
        <h5 className="mt-2">Songs</h5>
        <button
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#addsong"
        >
          Add Songs
        </button>
      </div>
      <hr className="mt-5" />
      <DisplaySongDashboard />

      {/* Modal */}
      <div
        className="modal fade"
        id="addsong"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Song
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="songname" className="form-label">
                  Song Name
                </label>
                <input
                  type="text"
                  placeholder="Song Name"
                  value={data.songname}
                  className="form-control"
                  id="songname"
                  name="songname"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="songlink" className="form-label">
                  Song Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="songurl"
                  placeholder="Url"
                  value={data.songurl}
                  name="songurl"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="songsource" className="form-label">
                  Song Source
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="songsource"
                  name="songsource"
                  placeholder="Song Source"
                  value={data.songsource}
                  onChange={handleChange}
                />
              </div>
              <input
                type="file"
                id="songimg"
                name="songimg"
                className="d-none"
                onChange={handleChange}
              />
              <label
                htmlFor="songimg"
                className="btn bg-light border border-1 mt-2"
              >
                <i className="bi bi-download"></i> Click to Upload Profile
                Thumbnail
              </label>
              <p className="text-muted fs-6 mt-4">
                Image has to be of aspect ratio 1:1 with a size of 3000 pixels x
                3000 pixels
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={storeData}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
