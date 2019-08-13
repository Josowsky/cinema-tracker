import React from "react";

class MovieTheaters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBeingLoaded: false,
      error: null,
      movieTheaters: [
        {
          id: 1,
          name: "Helios Poznań",
          imageUrl:
            "http://www.zera2architekci.pl/wp-content/uploads/2015/09/sukcesja_01.jpg"
        },
        {
          id: 2,
          name: "Cinema City Plaza",
          imageUrl: "http://www.torun-plaza.pl/images/sklepy/Cinemacity.jpg"
        },
        {
          id: 3,
          name: "Cinema City Kinepolis",
          imageUrl:
            "http://ocdn.eu/images/zumi/NWI7MDA_/b1166bab476002821dbed5f5192b1b55.jpeg"
        }
      ]
    };
  }

  render() {
    const { movieTheaters } = this.state;

    return (
      <div className="movie-theaters">
        {movieTheaters.map(movieTheater => {
          const { id, imageUrl, name } = movieTheater;

          return (
            <div key={id} className="movie-theaters__box">
              <div
                className="movie-theaters__box-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
              <div className="movie-theaters__box-name d-flex justify-content-center align-items-center">
                {name}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export { MovieTheaters };
