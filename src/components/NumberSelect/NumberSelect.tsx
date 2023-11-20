import {Box, Button, useTheme} from "@mui/material";

interface INumberSelect {
  value: number,
  setValue: Function,
  min?: number,
  max?: number
}

const NumberSelect = ({value, setValue, min = 1, max = 14}: INumberSelect) => {
  const {palette: {text}} = useTheme();
  const handleDecrement = () => setValue(value - 1);
  const handleIncrement = () => setValue(value + 1);
  return (
    <Box
      display={"flex"}
      height={44}
      mt={2}
    >
      <Button
        onClick={handleDecrement}
        disabled={value === min}
        sx={{
          width: 54,
          height: 44,
          p: "10px",
          minWidth: "unset",
          border: "1px solid #D5D5D6",
          backgroundColor: "background.paper",
          borderRadius: "8px 0px 0px 8px"
        }}
      >
        <Box fontSize={28} fontWeight={"normal"}
             sx={{color: value === min ? text.disabled : text.primary}}>-</Box>
      </Button>
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        borderTop={"1px solid #D5D5D6"}
        borderBottom={"1px solid #D5D5D6"}
        bgcolor={"white"}
      >
        {value}
      </Box>
      <Button
        onClick={handleIncrement}
        disabled={value === max}
        sx={{
          width: 54,
          height: 44,
          p: "10px",
          minWidth: "unset",
          border: '1px solid #D5D5D6',
          backgroundColor: "background.paper",
          borderRadius: "0px 8px 8px 0px"
        }}
      >
        <Box fontSize={28} fontWeight={"normal"} sx={{color: value === max ? text.disabled : text.primary}}>+</Box>
      </Button>
    </Box>
  );
};

export default NumberSelect;
