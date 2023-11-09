import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const SongDash = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-2 min-vh-100 border-end border-2 border-light p-0">
          <LeftSide />
        </div>
        <div className="col">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default SongDash;
