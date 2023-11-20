import {Logo} from "../../ui/logo/logo";
import {Box} from "@mui/material";
import FilterForm from "../../features/FilterForm/FilterForm";

const Sidebar = () => {
  return (
    <Box
      component={"aside"}
      display={"flex"}
      flexDirection={"column"}
      width={308}
      bgcolor={"background.paper"}
    >
      <Box p={8}><Logo/></Box>
      <FilterForm/>
    </Box>
  );
};

export default Sidebar;
