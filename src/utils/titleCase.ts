const titleCase = (str: string | undefined): string => {
  return str!
    .replaceAll("-", " ")
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default titleCase;
