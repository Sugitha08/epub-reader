import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";

export default function SelectField({
  option,
  value,
  onChange,
  icon,
  iconPosition,
  sx,
  size,
  selectsx,
}) {
  return (
    <div>
      <FormControl size={size} sx={sx}>
        <Select
          native
          value={value}
          onChange={onChange}
          startAdornment={
            icon && (
              <InputAdornment position={iconPosition}>{icon}</InputAdornment>
            )
          }
          sx={{
            "& .MuiSelect-icon": {
              color: "red", // Change to any color you want
            },
          }}
        >
          {option.map((data) => (
            <option key={data.id} value={data.value}>
              {data.label}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
