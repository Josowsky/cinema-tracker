export const useMoviesFetch = () => ({
  isFetching: false,
  data: [
    {
      genre: "Drama",
      id: 1,
      image: "https://sphoto.nasza-klasa.pl/8891700/3/main/f716f0214c.jpeg",
      rating: 5.4,
      name: "Olden The Movie",
      showings: [
        {
          dataTime: {
            date: "2019-08-09 13:00:00.000000"
          }
        },
        {
          dataTime: {
            date: "2019-08-09 15:00:00.000000"
          }
        },
        {
          dataTime: {
            date: "2019-08-09 20:30:00.000000"
          }
        }
      ]
    }
  ],
  error: null
});
