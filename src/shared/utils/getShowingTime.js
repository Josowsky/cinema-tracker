export const getShowingTime = dateTime => {
  const date = new Date(dateTime);

  return date.toLocaleTimeString("pl", { hour: "2-digit", minute: "2-digit" });
};
