import {ReactNode} from "react";
import styles from "./Header.module.css";

export interface IHeaderProps {
  children: ReactNode;
}

const Header = ({children}: IHeaderProps) => {
  return (<div className={styles.container}>{children}</div>);
};

export default Header;
