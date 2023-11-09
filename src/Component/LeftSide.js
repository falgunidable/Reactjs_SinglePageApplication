const LeftSide = () => {
  return (
    <>
      <h1 className="mt-5 text-center">Logo</h1>
      <ul className="nav nav-pills flex-column mt-5">
        <li
          className="nav-item fs-6 p-2"
          style={{
            backgroundColor: "#E6F7FF",
            borderRight: "4px solid #1890FF",
          }}
        >
          <i className="bi bi-columns-gap"></i>
          <span className="ms-2" style={{ color: "#1890FF" }}>
            {" "}
            Songs
          </span>
        </li>
      </ul>
    </>
  );
};

export default LeftSide;
