export const CustomSelectStyles = {
  singleValue: (base) => ({
    ...base,
    justifyContent: "flex-start",
    display: "flex",
    width: "100%",
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "#f7f7f7",
    border: "none",
    borderRadius: "12px",
    padding: "4px 4px",
    outline: "none",
    boxShadow: "none",
    minHeight: "44px",
  }),
  option: (base, state) => ({
    ...base,
    height: "30px",
    color: state.isSelected ? "#101828" : "#8d929a",
    backgroundColor:
      state.isSelected || state.isFocused ? "transparent" : "transparent",
    padding: "14px 18px",
    lineHeight: "1.25",
    textAlign: "left",
    fontFamily: "'Manrope', sans-serif",
    ":active": {
      backgroundColor: "transparent",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#101828",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "10px",
    zIndex: 20,
  }),
};
