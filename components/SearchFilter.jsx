import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

function SearchFilter() {
  const [min, setMin] = useState(50000);
  const [max, setMax] = useState(500000);
  const [type, setType] = useState("");
  const [distance, setDistance] = useState("");
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleOk = (event, reason) => {
    if (reason !== "backdropClick") {
      if (min && max) {
        setOpen(false);
      }
    }
  };

  return (
    <div className="flex justify-between md:justify-evenly items-center flex-nowrap w-full text-sm py-5 overflow-x-auto overflow-nest">
      <div className="border-[1px] border-text-gray rounded-lg">
        <Button onClick={handleClickOpen} className="text-text-gray text-sm">
          Price
        </Button>
        <Dialog disableEscapeKeyDown open={open} onClose={handleCancel}>
          <DialogTitle>Enter a Budget</DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControl>
                <TextField
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  id="min"
                  label="Min"
                  required
                  type="number"
                  value={min}
                  onChange={(e) => {
                    if (e.target.value < 0) {
                      setMin(0);
                    } else {
                      setMin(e.target.value);
                    }
                  }}
                  className="mr-1"
                  margin="normal"
                />
              </FormControl>
              <FormControl>
                <TextField
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  id="max"
                  label="Max"
                  required
                  type="number"
                  value={max}
                  onChange={(e) => {
                    if (e.target.value < 0) {
                      setMax(0);
                    } else {
                      setMax(e.target.value);
                    }
                  }}
                  margin="normal"
                />
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleOk}>Ok</Button>
          </DialogActions>
        </Dialog>
      </div>
      <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
        <InputLabel id="type-label">Type of house</InputLabel>
        <Select
          labelId="type-label"
          id="type"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          label="Type of house"
          className="rounded-lg text-sm"
        >
          <MenuItem value={"luxury"}>Luxury</MenuItem>
          <MenuItem value={"fancy"}>Fancy</MenuItem>
          <MenuItem value={"managable"}>Managable</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="location-label">Distance</InputLabel>
        <Select
          labelId="distance-label"
          id="distance"
          value={distance}
          onChange={(e) => {
            setDistance(e.target.value);
          }}
          label="Distance"
          className="rounded-lg text-sm"
        >
          <MenuItem value={10}>10mins walk</MenuItem>
          <MenuItem value={20}>20mins walk</MenuItem>
          <MenuItem value={30}>30mins walk</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="location-label">Location</InputLabel>
        <Select
          labelId="location-label"
          id="location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          label="Location"
          className="rounded-lg text-sm"
        >
          <MenuItem value="ekosodin">Ekosodin</MenuItem>
          <MenuItem value="bdpa">BDPA</MenuItem>
          <MenuItem value="newton">Newton</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SearchFilter;
