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
    padding: ".875rem .5rem .875rem 1.125rem",
    zIndex: 20,
  }),
  menuList: (base) => ({
    ...base,
    overflowY: "auto",
    maxHeight: "10rem",
    padding: 0,
    "&::-webkit-scrollbar": {
      display: "none",
      width: "0",
    },
    scrollbarWidth: "none",
    "&::-webkit-scrollbar-thumb": {
      background: "#dadde1",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-button": {
      height: "0px",
      width: "0px",
      background: "transparent",
    },
  }),
};
