export const commonSelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "white",
    borderColor: state.isFocused ? "#3470FF" : "#ccc",
    boxShadow: state.isFocused ? "0 0 0 1px #3470FF" : "none",
    "&:hover": {
      borderColor: "#3470FF",
    },
    borderRadius: "14px",
    padding: "2px 4px",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#3470FF"
      : state.isFocused
      ? "#eeeeff"
      : "white",
    color: state.isSelected ? "white" : "#121417",
    padding: "10px",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#8a8a8a",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "10px",
    zIndex: 20,
  }),
  singleValue: (base) => ({
    ...base,
    color: "#121417",
  }),
};
