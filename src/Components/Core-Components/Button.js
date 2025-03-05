import React, { Children } from "react";
import Button from "@mui/material/Button";

function CustomButton({
  variant,
  type,
  onClick,
  size,
  sx = {},
  children,
  className,
  ...rest
}) {
  return (
    <>
      <Button
        variant={variant || "contained"}
        className={`${className} btn`}
        type={type || "button"}
        onClick={onClick}
        size={size || "medium"}
        sx={{
          fontWeight: "bold",
          fontSize: "15px",
          "&:hover": {
            backgroundColor: "#6f658f",
            color: "#FFFFFF",
          },
          ...sx,
          backgroundColor: sx.backgroundColor || "#4B4363",
          color: sx.color || "#FFFFFF",
        }}
        {...rest}
      >
        {children}
      </Button>
    </>
  );
}

export default CustomButton;
