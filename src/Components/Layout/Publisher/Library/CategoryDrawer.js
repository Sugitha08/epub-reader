import React from "react";
import Drawer from "@mui/material/Drawer";

function CategoryDrawer({ catFilter, handleCatFilterDrawerClose }) {
  const list = ["horror", "romance", "triller", "drama", "genre","literature"];
  return (
    <Drawer
      anchor="right"
      open={catFilter}
      onClose={handleCatFilterDrawerClose}
      sx={{ zIndex: "999999"     }}
    >
      <div style={{ padding: "10px 20px" }}>
        {list.map((cat) => (
          <p>{cat}</p>
        ))}
      </div>
    </Drawer>
  );
}

export default CategoryDrawer;
