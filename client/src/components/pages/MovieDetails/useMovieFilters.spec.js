import { useMovieFilters } from "./useMovieFilters";

const movieData = {
  id: 1,
  showings: [
    {
      date: "21.08",
      seances: [
        {
          subtitles: false,
          dimensionality: "2D",
          dubbing: true
        },
        {
          subtitles: true,
          dimensionality: "3D",
          dubbing: false
        }
      ]
    },
    {
      date: "22.08",
      seances: [
        {
          subtitles: true,
          dimensionality: "2D",
          dubbing: false
        },
        {
          subtitles: true,
          dimensionality: "3D",
          dubbing: false
        }
      ]
    }
  ]
};

describe("useMovieFilters", () => {
  it("handles seances filters correctly", () => {
    const filters = { dialoguesType: "subtitles", screenType: "2D" };
    const filteredMovie = useMovieFilters(movieData, filters);

    expect(filteredMovie.showings[0].seances.length).toEqual(0);
    expect(filteredMovie.showings[1].seances.length).toEqual(1);

    const filters2 = { dialoguesType: "dubbing" };
    const filteredMovie2 = useMovieFilters(movieData, filters2);

    expect(filteredMovie2.showings[0].seances.length).toEqual(1);
    expect(filteredMovie2.showings[1].seances.length).toEqual(0);
  });
});
