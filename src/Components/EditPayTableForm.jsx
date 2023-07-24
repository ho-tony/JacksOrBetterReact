import React from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FLUSH, FHOUSE } from "../backend/constants";

const EditPayTableForm = ({editResult, resultCoinMap}) => {
  return (
    <div>
    <FormControl sx={{m: 1, minWidth: 100 }} size="small" variant="standard">
      <InputLabel  id="label">Full House</InputLabel>
      <Select value = {resultCoinMap.get(FHOUSE)[0]} onChange={(e) => editResult(FHOUSE, e)} label= "Full House" id="full house id">
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>
      </FormControl>

      <FormControl sx={{m: 1, minWidth: 100 }} size="small" variant="standard">
      <InputLabel id = "Flush">Flush</InputLabel>
      <Select value = {resultCoinMap.get(FLUSH)[0]} onChange={(e) => editResult(FLUSH, e)} label="Flush" id="flush id">
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
    </FormControl>
    </div>
  );
};

export default EditPayTableForm;
