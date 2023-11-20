import calendar from "../../app/images/calendar.svg";
import store from "../../app/images/store.svg";
import user from "../../app/images/user.svg";
import arrowDown from "../../app/images/down.svg";
import phone from "../../app/images/phone.svg";
import settings from "../../app/images/settings.svg";
import logout from "../../app/images/logout.svg";
import styles from "./ProfileInfo.module.css";
import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../services/GetUserService";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../features/UserInfo/UserInfo";
import { useNavigate } from "react-router-dom";
import { exitFromProfile } from "../../features/Auth/AuthSlice";

const ProfileInfo = () => {
  const [isDropDownMenuOpened, setIsDropDownMenuOpened] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useGetUserQuery("");

  useEffect(() => {
    dispatch(getUserInfo(data));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  const onClick = () => {
    setIsDropDownMenuOpened(!isDropDownMenuOpened);
  };

  const clickExitHandler = () => {
    localStorage.removeItem("accessToken");
    navigate("/signin");
    dispatch(exitFromProfile(false));
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <img className={styles.image} src={calendar} alt="календарь" />
        <p className={styles.text}>{data?.current_date}</p>
      </div>
      <div className={styles.infoWrapper}>
        <img className={styles.image} src={store} alt="магазин" />
        <p className={styles.text}>{data?.store_ids}</p>
      </div>
      <button className={styles.button} type="button" onClick={onClick}>
        <div className={styles.infoWrapper}>
          <img className={styles.image} src={user} alt="личный кабинет" />
          <p
            className={styles.text}
          >{`${data?.first_name} ${data?.last_name}`}</p>
          <img
            className={
              isDropDownMenuOpened ? styles.turnedImage : styles.arrowImage
            }
            src={arrowDown}
            alt="стрелка вниз"
          />
        </div>
      </button>
      {isDropDownMenuOpened && (
        <div className={styles.dropDownMenuContainer}>
          <div className={styles.dropDownMenuInfoWrapper}>
            <img
              className={styles.dropDownMenuImage}
              src={phone}
              alt="телефон"
            />
            <p className={styles.text}>Помощь</p>
          </div>
          <div className={styles.dropDownMenuInfoWrapper}>
            <img
              className={styles.dropDownMenuImage}
              src={settings}
              alt="настройки"
            />
            <p className={styles.text}>Настройки</p>
          </div>
          <div
            className={styles.dropDownMenuInfoWrapper}
            onClick={clickExitHandler}
          >
            <img
              className={styles.dropDownMenuImage}
              src={logout}
              alt="выход"
            />
            <p className={styles.text}>Выход</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
