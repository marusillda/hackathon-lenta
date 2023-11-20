import {Box, Typography} from "@mui/material";
import stairsUp from '../../app/images/stairs-up.svg';
import stairsDown from '../../app/images/stairs-down.svg';

interface IForecastCardProps {
  growDirection: boolean,
  from: Date,
  to: Date,
  title: string,
  cardTitle: string
}

const ForecastCard = ({growDirection, title, from, to, cardTitle}: IForecastCardProps) => {
  const formatDate = (date: Date) => date.toLocaleDateString("ru-RU", {day: "numeric", month: "long"});
  return (
    <Box
      width={367}
      borderRadius={4}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      minHeight={176}
      px={7}
      py={5}
      sx={{
        boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.08);",
        backgroundImage: `url(${growDirection ? stairsUp : stairsDown})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "226px 50%"
      }}
    >
      <Box>
        <Typography
          component="h3"
          fontSize={16}
          fontWeight={"bold"}
          lineHeight={"125%"}
          letterSpacing={"0.16px"}
        >
          {cardTitle}
        </Typography>
        <Typography
          component="p"
          fontSize={14}
          fontWeight={"regular"}
          lineHeight={"125%"}
          letterSpacing={"0.14px"}
        >
          с {formatDate(from)} по {formatDate(to)}
        </Typography>
      </Box>
      <Box>
        <Typography
          component="h2"
          fontSize={24}
          fontWeight={"bold"}
          lineHeight={"130%"}
          letterSpacing={"0.24px"}>
          {title}
        </Typography>
        <Typography
          component="p"
          fontSize={14}
          fontWeight={"regular"}
          lineHeight={"125%"}
          letterSpacing={"0.14px"}>
          Проверьте прогноз по товару в своем ТК
        </Typography>
      </Box>
    </Box>
  );
}

export default ForecastCard;
