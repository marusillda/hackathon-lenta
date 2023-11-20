import Layout from "../../components/Layout/Layout";
import StatisticTemplateRow from "../../components/StatisticTemplateRow/StatisticTemplateRow";
import ControlRow from "../../components/ControlRow/ControlRow";
import TableComponent from "../../components/Table/TableComponent";
import {useAppSelector} from "../../hooks/redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Statistics = () => {
    const staticColumnNames = [
        "TK",
        "Группа",
        "Категория",
        "Подкатегория",
        "Товар",
        "Eд. Изм.",
        "Фактические продажи",
        "Прогноз (кол-во)",
        `Разница факт/прогноз (ед. изм.)`,
        "Разница факт/прогноз (руб)",
        "Кач-во прогноза",
    ];
    const navigate = useNavigate();
    const {isLoggedIn} = useAppSelector((state) => state.authReducer);
    const reduxFilter = useAppSelector((state) => state.filterFormReducer);
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/signin");
        }
    }, [isLoggedIn]);

    return (
        <Layout>
            <StatisticTemplateRow/>
            <ControlRow/>
            <TableComponent
                tableRows={reduxFilter.filteredProductsStatistics}
                tableColumns={staticColumnNames}
                staticColumnsNumber={10}
            />
        </Layout>
    );
};

export default Statistics;
