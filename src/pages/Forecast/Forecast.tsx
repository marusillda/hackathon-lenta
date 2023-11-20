import Layout from "../../components/Layout/Layout";
import ForecastTemplateRow from "../../components/ForecastTemplateRow/ForecastTemplateRow";
import ControlRow from "../../components/ControlRow/ControlRow";
import TableComponent from "../../components/Table/TableComponent";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useEffect, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {setCredentials} from "../../features/Auth/AuthSlice";

const Forecast = () => {
    const reduxFilter = useAppSelector((state) => state.filterFormReducer);
    const navigate = useNavigate();
    const staticColumnNames = [
        "TK",
        "Группа",
        "Категория",
        "Подкатегория",
        "Товар",
    ];

    const {isLoggedIn} = useAppSelector((state) => state.authReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isLoggedIn === false) {
            navigate("/signin");
        }
    }, [isLoggedIn]);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            dispatch(setCredentials({token}));
        }
    }, []);

    const columns = useMemo(() => {
        const dateColumns = new Array(reduxFilter.forecastDays)
            .fill("")
            .map((_v, i) => {
                const date = new Date();
                date.setDate(date.getDate() + i + 1);
                return `${date.getDate()}.${date.getMonth() + 1}`;
            });

        return staticColumnNames.concat(dateColumns);
    }, [reduxFilter]);

    return (
        <Layout>
            <ForecastTemplateRow/>
            <ControlRow/>
            <TableComponent
                tableColumns={columns}
                tableRows={reduxFilter.filteredProductsForecast}
                staticColumnsNumber={staticColumnNames.length}
            />
        </Layout>
    );
};

export default Forecast;
