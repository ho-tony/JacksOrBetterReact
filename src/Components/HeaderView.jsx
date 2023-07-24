import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

const HeaderView = ({ handlePayTable, play, playRef }) => {
  return (
    <Grid sx={{ bgcolor: "green", minHeight: 50 }} item xs={12}>
    <Button onClick={handlePayTable} tabIndex variant="contained">
      Edit Pay Table
    </Button>
    <Button onClick={play} ref={playRef} tabIndex variant="contained">
      Play
    </Button>
    <Button tabIndex variant="contained">
      Practice Mode
    </Button>
    <Button tabIndex variant="contained">
      Simulation Mode
    </Button>
  </Grid>
  )
};
export default HeaderView;
