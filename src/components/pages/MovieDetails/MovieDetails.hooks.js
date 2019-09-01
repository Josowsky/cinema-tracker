export const useMovieFetch = () => ({
  isFetching: false,
  data: {
    genre: "Sci-Fi",
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71y%2BE9MaURL._SY606_.jpg",
    banner:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/07/22/707733-jason-momoa-amber-heard-aquaman.jpg",
    duration: "2 godz. 29 min.",
    rating: 6.9,
    name: "Aquaman",
    description:
      "Arthur Curry niechętnie stara się przejąć władzę w podwodnym królestwie Atlantydy, żeby zapobiec wojnie z ludźmi żyjącymi na powierzchni.",
    showings: [
      {
        date: "21.08",
        seances: [
          {
            dateTime: {
              date: "2019-08-21 13:00:00.000000"
            },
            cinema: {
              name: "Helios Poznań"
            },
            subtitles: false,
            dimensionality: "2D",
            dubbing: true,
            url: "https://google.com"
          },
          {
            dateTime: {
              date: "2019-08-21 20:00:00.000000"
            },
            cinema: {
              name: "Helios Poznań"
            },
            subtitles: true,
            dimensionality: "3D",
            dubbing: false,
            url: "https://google.com"
          }
        ]
      },
      {
        date: "22.08",
        seances: [
          {
            dateTime: {
              date: "2019-08-21 20:00:00.000000"
            },
            cinema: {
              name: "Helios Poznań"
            },
            subtitles: true,
            dimensionality: "2D",
            dubbing: false,
            url: "https://google.com"
          },
          {
            dateTime: {
              date: "2019-08-21 20:00:00.000000"
            },
            cinema: {
              name: "Helios Poznań"
            },
            subtitles: true,
            dimensionality: "2D",
            dubbing: false,
            url: "https://google.com"
          },
          {
            dateTime: {
              date: "2019-08-21 21:30:00.000000"
            },
            cinema: {
              name: "Helios Poznań"
            },
            subtitles: false,
            dimensionality: "3D",
            dubbing: true,
            url: "https://google.com"
          }
        ]
      },
      {
        date: "23.08",
        seances: [
          {
            dateTime: {
              date: "2019-08-21 20:00:00.000000"
            },
            cinema: {
              name: "Helios Poznań"
            },
            subtitles: true,
            dimensionality: "3D",
            dubbing: false,
            url: "https://google.com"
          }
        ]
      }
    ]
  },
  error: null
});

export const useMovieFilters = (movieData, filters) => {
  const filteredShowings = movieData.showings.map(showing => {
    const { seances } = showing;

    const filteredSeances = seances
      .map(seance => {
        const { subtitles, dubbing, dimensionality } = seance;

        if (filters.screenType === "2D" && dimensionality !== "2D") return null;
        if (filters.screenType === "3D" && dimensionality !== "3D") return null;
        if (filters.dialoguesType === "subtitles" && !subtitles) return null;
        if (filters.dialoguesType === "dubbing" && !dubbing) return null;

        return seance;
      })
      .filter(showing => Boolean(showing));

    if (Boolean(filteredSeances))
      return {
        ...showing,
        seances: filteredSeances
      };

    return null;
  });

  return {
    ...movieData,
    showings: filteredShowings.filter(showing => Boolean(showing))
  };
};
