import React from "react";
import { useFormik } from "formik";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { locations } from "./locations";
import { useNavigate } from "react-router-dom";

function Form() {
  const { setFieldValue, handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      startDate: "",
      endDate: "",
      setupDate: "",
      destination: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const navigate = useNavigate();
  const routeChange = (e) => {
    setTimeout(() => {
      e.preventDefault();
      navigate("/congratulation", { replace: true });
    }, 200);
  };
  let distanceInNum = Number(values.destination.match(/\d+/));

  let fare =
    distanceInNum * 2 > 30 ? 1500 + (distanceInNum * 2 - 30) * 50 : 1500;
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        display={"flex"}
        container
        justifyContent={"space-between"}
        columnSpacing={5}
        rowSpacing={5}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item md={6} xs={12}>
            <DateTimePicker
              // inputFormat="DD/MM/YYYY hh:mm A"
              label="Event start date and time"
              disablePast
              value={values.startDate}
              onChange={(value) =>
                setFieldValue("startDate", dayjs(value).format())
              }
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <DateTimePicker
              // inputFormat="DD/MM/YYYY hh:mm A"
              label="Event end date and time"
              disablePast
              value={values.endDate}
              onChange={(value) =>
                setFieldValue("endDate", dayjs(value).format())
              }
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <DateTimePicker
              // inputFormat="DD/MM/YYYY hh:mm A"
              label="Setup date and time"
              disablePast
              value={values.setupDate}
              onChange={(value) =>
                setFieldValue("setupDate", dayjs(value).format())
              }
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </Grid>
        </LocalizationProvider>
        <Grid item md={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel id="destination">Destination</InputLabel>
            <Select
              label="Destination"
              name="destination"
              onChange={handleChange}
              value={values.destination}
            >
              {locations.map((location) => (
                <MenuItem key={location.Id} value={location.Distance}>
                  {location.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            label="Total Distance"
            value={values.destination}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField fullWidth label="Total Fare" value={fare} />
        </Grid>
      </Grid>
      <Box display={"flex"} justifyContent="center" sx={{ mt: 5 }}>
        <Button
          type="submit"
          onClick={routeChange}
          variant="outlined"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default Form;
