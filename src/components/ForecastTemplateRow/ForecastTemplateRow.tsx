import {Box} from "@mui/material";
import Templates from "../Templates/Templates";
import ForecastCard from "../ForecastCard/ForecastCard";

const ForecastTemplateRow = () => {
  const from = new Date();
  const to = new Date();

  from.setDate(from.getDate() + 1);
  to.setDate(to.getDate() + 15);
  return (
    <Box
      display={"flex"}
      gap={7}
    >
      <Templates/>
      <ForecastCard
        title={"Морсы"}
        from={from}
        to={to}
        growDirection={true}
        cardTitle={"Ожидается повышение спроса"}
      />

      <ForecastCard
        title={"Булка с маком"}
        from={from}
        to={to}
        growDirection={false}
        cardTitle={"Ожидается понижение спроса"}/>
    </Box>
  );
};

export default ForecastTemplateRow;
