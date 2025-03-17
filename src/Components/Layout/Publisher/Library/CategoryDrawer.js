import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Get_Cat_Request } from "../../../../Redux/Action/PublisherAction/CategoryAction";

function CategoryDrawer({ catFilter, handleCatFilterDrawerClose }) {
  const { Category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get_Cat_Request());
  }, []);
  return (
    <Drawer
      anchor="right"
      open={catFilter}
      onClose={handleCatFilterDrawerClose}
      sx={{ zIndex: "999999" }}
    >
      <div style={{ padding: "10px 20px" }}>
        <h4 style={{fontSize:"20px"}}>Filter By Genre</h4>
        {Category?.map((cat) => (
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={cat.category_name}
            />
          </FormGroup>
        ))}
        {/* {list.map((cat) => (
          <p>{cat}</p>
        ))} */}
      </div>
    </Drawer>
  );
}

export default CategoryDrawer;
