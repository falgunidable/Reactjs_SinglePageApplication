import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const SongDash = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-2 min-vh-100 border-end border-2 border-light p-0 d-flex flex-column">
          <LeftSide />
          <div
            className="p-2 text-center mb-4 mt-auto"
            style={{ cursor: "pointer" }}
          >
            <i class="bi bi-box-arrow-right"></i> Logout
          </div>
        </div>
        <div className="col">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default SongDash;
