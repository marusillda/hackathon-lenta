import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Sidebar from "../Sidebar/Sidebar";
import {ReactNode} from "react";
import {Box} from "@mui/material";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({children}: ILayoutProps) => {
  return (
    <Box display={"flex"}>
      <Sidebar/>
      <Box display={"flex"} flexDirection={"column"} minWidth={1612}>
        <Header>
          <Navigation/>
          <ProfileInfo/>
        </Header>
        <Box component={"main"} py={8} pl={6} pr={8}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
