import Chart from "../../components/Chart/Chart";
import Layout from "../../components/Layout/Layout";
import ComparisonTemplateRow from "../../components/ComparisonTemplateRow/ComparisonTemplateRow";
import {useAppSelector} from "../../hooks/redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Box} from "@mui/material";

const Comparison = () => {
    const {isLoggedIn} = useAppSelector((state) => state.authReducer);
    const reduxFilter = useAppSelector((state) => state.filterFormReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/signin");
        }
    }, [isLoggedIn]);

    return (
        <Layout>
            <ComparisonTemplateRow/>
            <Box display={"flex"} flexWrap={"wrap"} pt={15} gap={7}>
                {
                    reduxFilter.filteredProducts.map(p => (
                        <Chart
                            key={p.pr_sku_id}
                            title={p.pr_sku_id}
                            labels={reduxFilter.stores}
                            forecastData={reduxFilter.filteredProductsStatistics.filter(ps => ps[4] === p.pr_sku_id).map(ps => parseInt(ps[6]))}
                            salesData={reduxFilter.filteredProductsStatistics.filter(ps => ps[4] === p.pr_sku_id).map(ps => parseInt(ps[7]))}
                            forecastQuality={reduxFilter.filteredProductsStatistics.filter(ps => ps[4] === p.pr_sku_id).map(ps => parseInt(ps[10]))}
                        />
                    ))
                }
            </Box>
        </Layout>
    );
};

export default Comparison;
