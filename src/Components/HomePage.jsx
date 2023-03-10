import SearchPageHome from "./SearchHomePage";

const HomePage = () => {
  return (
    <>
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row">
          <div className="col-10">
            <div id="searchResults" style={{ display: "none" }}>
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="rock">
              <h2>Rock Classic</h2>
              <div id="rockSection">
                <SearchPageHome propsQuery="rockclassic" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <div className="" id="popSection">
                <SearchPageHome propsQuery="POP" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="hiphop">
              <h2>HipHop</h2>
              <div id="hipHopSection">
                <SearchPageHome propsQuery="hiphop" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
