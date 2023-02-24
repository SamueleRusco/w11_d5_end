const FooterBar = () => {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <div className="row">
                <a href="#">
                  <img src="./Shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="./Previous.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="./Play.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="./Next.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="./Repeat.png" alt="shuffle" />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
