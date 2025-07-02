export const capitalize = (type) => {
  if (!type) return "";
  return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
};

export const formattedMileage = (mileage) => {
  return mileage.toLocaleString("uk-UA");
};
