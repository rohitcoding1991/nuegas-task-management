import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 1,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#546FFF",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#ffffff",
          opacity: 1,
          border: "1px solid #F5F5F7",
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#F5F5F7",
        border: "6px solid #F5F5F7",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 20,
        height: 20,
        "&.active": {
          backgroundColor: "#546FFF",
          boxShadow: "0px 1px 3px 0px #546FFF33",
        },
      },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#ffffff",
      opacity: 1,
      border: "1px solid #F5F5F7",
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

export default function ToggleButton({ label, isActive }) {
    return (
        <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} checked={isActive} />}
            label={<span className="PlusJakartaSans600 !text-sm !text-[--Secondary-500] !px-8 ">{label}</span>}
        />
    );
}
