import React from "react";
import css from "./CustomDateInput.module.css";

export const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => {
  const isPlaceholder = !value;

  return (
    <input
      className={`${css.field} ${isPlaceholder ? css.placeholder : css.filled}`}
      onClick={onClick}
      value={value || "Select date range*"}
      readOnly
      ref={ref}
    />
  );
});
