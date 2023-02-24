import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";

const SearchPage = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchResult);

  const url =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
    searchQuery.searchTerm;

  useEffect(() => {
    fetchSearch();
  }, [searchQuery.searchTerm]);

  const fetchSearch = async () => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      dispatch({
        type: "RICERCA_ALBUM",
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   const fetchSearch = () => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) =>
  //         dispatch({
  //           type: "RICERCA_ALBUM",
  //           payload: data.data,
  //         })
  //       );
  //   };

  return (
    <Container>
      <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {searchQuery.allAlbum[0] &&
          searchQuery.allAlbum[0].map((e) => (
            <Col>
              <div class="col text-center" id={e.id}>
                {/* <a href="/album_page.html?id=${songInfo.album.id}"> mettici link to */}
                <img class="img-fluid" src={e.artist.picture} alt="1" />
                {/* </a> */}
                <p>
                  <p className="text-white">{e.artist.name}</p>
                  <p className="text-white">{e.title}</p>
                </p>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default SearchPage;
