const titleCase = (str: string): string => {
  return str
    .replaceAll("-", " ")
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default titleCase;
