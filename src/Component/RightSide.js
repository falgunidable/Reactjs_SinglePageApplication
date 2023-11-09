import Icon from "../images/india.png";

const RightSide = () => {
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
      <table class="table table-hover table-responsive">
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
          <tr className="text-center">
            <td className="align-center">
              <img src={Icon} width={72} /> Song Name
            </td>
            <td className="align-middle">Otto</td>
            <td className="align-middle">@mdo</td>
            <td className="align-middle">
              <i className="bi bi-play-circle-fill text-warning"></i>
            </td>
            <td className="align-middle">
              <i className="bi bi-trash"></i>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Modal */}
      <div
        class="modal fade"
        id="addsong"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Song
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="songname" class="form-label">
                  Song Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="songname"
                  placeholder="Song Name"
                />
              </div>
              <div class="mb-3">
                <label for="songlink" class="form-label">
                  Song Link
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="songlink"
                  placeholder="Url"
                />
              </div>
              <div class="mb-3">
                <label for="songsource" class="form-label">
                  Song Source
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="songsource"
                  placeholder="Song Source"
                />
              </div>
              <button className="btn bg-light border border-1 mt-2">
                <i class="bi bi-download"></i> Click to Upload Profile Thumbnail
              </button>
              <p className="text-muted fs-6 mt-4">
                Image has to be of aspect ratio 1:1 with a size of 3000 pixels x
                3000 pixels
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
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
