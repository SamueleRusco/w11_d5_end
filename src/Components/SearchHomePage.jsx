import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Row } from "react-bootstrap";

const SearchPageHome = (propsQuery) => {
  const [albumHome, setAlbumHome] = useState();

  const url =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
    propsQuery.propsQuery;

  const fetchSearch = async () => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      setAlbumHome(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSearch();
  }, []);

  return (
    <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
      {albumHome &&
        albumHome.map((e, i) => {
          if (i < 4) {
            return (
              <div key={e.id}>
                <div className="col text-center">
                  {/* <a href="/album_page.html?id=${songInfo.album.id}"> mettici link to */}
                  <Link to={`/album/${e.id}`}>
                    <img className="img-fluid" src={e.artist.picture} alt="1" />
                  </Link>
                  {/* <img className="img-fluid" src={e.artist.picture} alt="1" /> */}
                  {/* </a> */}
                  <div>
                    <p className="text-white">{e.artist.name}</p>
                    <p className="text-white">{e.title}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </Row>
  );
};

export default SearchPageHome;
