import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import trendingUp from "../../app/images/trendingup.svg";
import chart from "../../app/images/chart.svg";
import scale from "../../app/images/scales.svg";

const Navigation = () => {
  return (
    <ul className={styles.linksList}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.active : styles.pending
        }
      >
        <li className={styles.linkItem}>
          <img className={styles.image} src={trendingUp} alt="стрелка-тренд" />
          <p className={styles.text}>Прогноз спроса</p>
        </li>
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          isActive ? styles.active : styles.pending
        }
      >
        <li className={styles.linkItem}>
          <img className={styles.image} src={chart} alt="диаграмма" />
          <p className={styles.text}>Статистика</p>
        </li>
      </NavLink>
      <NavLink
        to="/comparison"
        className={({ isActive }) =>
          isActive ? styles.active : styles.pending
        }
      >
        <li className={styles.linkItem}>
          <img className={styles.image} src={scale} alt="весы" />
          <p className={styles.text}>Сравнение</p>
        </li>
      </NavLink>
    </ul>
  );
};

export default Navigation;
