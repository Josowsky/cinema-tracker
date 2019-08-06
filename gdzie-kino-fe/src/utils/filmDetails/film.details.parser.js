export const getFormattedDuration = (duration) => {
  const numberDuration = parseInt(duration);

  if (numberDuration <= 60) {
    return `${numberDuration} min.`;
  }

  const hours = Math.floor(duration / 60);
  const minutes = duration - (hours * 60);

  return `${hours} godz. ${minutes} min.`;
};
