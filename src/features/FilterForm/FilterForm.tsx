import {Box, Button, Typography} from "@mui/material";
import React, {useMemo, useState} from "react";

import FilterDropDown from "../../components/FilterDropDown/FilterDropDown";
import NumberSelect from "../../components/NumberSelect/NumberSelect";
import ProductsSelect from "../../components/ProductsSelect/ProductsSelect";
import closeIcon from "../../app/images/close.svg";

import {resetFormFilter, setFormFilter} from "./filterFormSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useGetShopsQuery} from "../../services/ShopService";
import {useGetCategoriesQuery} from "../../services/CategoriesService";
import {useLocation} from "react-router-dom";

const statisticPeriods = [
    {name: "День", value: 1},
    {name: "Неделя", value: 7},
    {name: "Месяц", value: 30},
];
const statisticPeriodNames = statisticPeriods.map((p) => p.name);
const getStatisticNameByValue = (n: number): string =>
    statisticPeriods.find(({value}) => value === n)?.name || "";
const getStatisticValueByName = (n: string): number =>
    statisticPeriods.find(({name}) => name === n)?.value || 1;

const FilterForm = () => {
    const [bools, setBools] = useState<boolean[]>([]);
    const filterFormReducer = useAppSelector((state) => state.filterFormReducer);
    const [cities, setCities] = useState(filterFormReducer.cities);
    const [stores, setStores] = useState(filterFormReducer.stores);
    const [forecastDays, setForecastDays] = useState(
        filterFormReducer.forecastDays
    );
    const [statisticsPeriod, setStatisticsPeriod] = useState(
        filterFormReducer.statisticsPeriod
    );
    const [products, setProducts] = useState(filterFormReducer.filteredProducts);

    const {pathname} = useLocation();
    const dispatch = useAppDispatch();

    const {data: shopList} = useGetShopsQuery("");
    const {data: productsList} = useGetCategoriesQuery("");

    const citiesList = useMemo(
        () =>
            shopList
                ? Array.from(new Set(shopList.data.map((item) => item.st_city_id)))
                : [],
        [shopList]
    );
    const storesList = useMemo(
        () => (shopList ? shopList.data.map((item) => item.st_id) : []),
        [shopList]
    );

    const label = (text: string, pt: number = 0) => (
        <Typography
            component="h3"
            fontSize={18}
            fontWeight={"bold"}
            lineHeight={"125%"}
            letterSpacing={"0.18px"}
            pt={pt}
        >
            {text}
        </Typography>
    );

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(
            setFormFilter({
                bools,
                data: productsList.data,
                cities,
                stores,
                forecastDays,
                statisticsPeriod,
            })
        );
    };

    const handleReset = () => {
        dispatch(resetFormFilter());
        setCities([]);
        setStores([]);
        setForecastDays(7);
        setBools([]);
    };

    return (
        <Box
            component="form"
            noValidate
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            onSubmit={handleSubmit}
            onReset={handleReset}
        >
            <Box p={"20px 32px 0 32px"}>
                <Box sx={{display: "flex"}}>
                    {label("Город")}
                    {cities.length !== 0 && (
                        <Box
                            sx={{
                                width: "20px",
                                height: "19px",
                                backgroundColor: "secondary.dark",
                                borderRadius: "16px",
                                marginLeft: "8px",
                                padding: "1px 6px",
                                boxSizing: "border-box",
                                color: "background.default",
                            }}
                        >
                            {cities.length}
                        </Box>
                    )}
                </Box>
                <FilterDropDown
                    multiple={false}
                    selectedValue={cities}
                    label={"Выберите город"}
                    values={citiesList}
                    setSelectedValue={setCities}
                />
                <Box sx={{display: "flex", marginTop: "28px"}}>
                    {label("Торговый комплекс")}
                    {stores.length !== 0 && (
                        <Box
                            sx={{
                                width: "20px",
                                height: "19px",
                                backgroundColor: "secondary.dark",
                                borderRadius: "16px",
                                marginLeft: "8px",
                                padding: "1px 6px",
                                boxSizing: "border-box",
                                color: "background.default",
                            }}
                        >
                            {stores.length}
                        </Box>
                    )}
                </Box>
                <FilterDropDown
                    selectedValue={stores}
                    label={"Выберите ТК/Группу ТК"}
                    values={storesList}
                    setSelectedValue={setStores}
                />
                {pathname === "/" && (
                    <>
                        {label("Количество дней", 7)}
                        <NumberSelect value={forecastDays} setValue={setForecastDays}/>
                    </>
                )}
                {pathname !== "/" && (
                    <>
                        {label("Данные за период", 7)}
                        <FilterDropDown
                            multiple={false}
                            selectedValue={getStatisticNameByValue(statisticsPeriod)}
                            label={""}
                            values={statisticPeriodNames}
                            setSelectedValue={(value: string) => setStatisticsPeriod(getStatisticValueByName(value))}
                        />
                    </>
                )}
                <Box sx={{display: "flex", marginTop: "28px"}}>
                    {label("Товары")}
                    {bools.filter((el) => el).length !== 0 && (
                        <Box
                            sx={{
                                width: "20px",
                                height: "19px",
                                backgroundColor: "secondary.dark",
                                borderRadius: "16px",
                                marginLeft: "8px",
                                padding: "1px 6px",
                                boxSizing: "border-box",
                                color: "background.default",
                            }}
                        >
                            {bools.filter((el) => el).length}
                        </Box>
                    )}
                </Box>
            </Box>

            <ProductsSelect
                products={productsList ?? {data: []}}
                selectedProducts={products}
                bools={bools}
                setBools={setBools}
                setSelectedProducts={setProducts}
            />

            <Box
                display={"flex"}
                justifyContent={"space-between"}
                padding={"12px 16px 32px 32px"}
                position={"fixed"}
                bottom={0}
            >
                <Button
                    disabled={
                        stores.length === 0 ||
                        cities.length === 0 ||
                        0 ||
                        bools.filter((el) => el).length === 0
                    }
                    variant={"contained"}
                    sx={{width: 109, borderRadius: 2, marginRight: 6}}
                    type={"submit"}
                >
                    Применить
                </Button>
                <Button
                    type={"reset"}
                    sx={{
                        width: 116,
                        borderRadius: 0,
                        p: 0,
                        fontSize: "14px",
                        lineHeight: "125%",
                        fontWeight: "normal",
                        letterSpacing: "0.14px",
                        borderBottom: "1px solid",
                    }}
                >
                    <Box
                        component={"img"}
                        src={closeIcon}
                        width={16}
                        height={16}
                        color={"primary"}
                    />
                    Сбросить все
                </Button>
            </Box>
        </Box>
    );
};

export default FilterForm;
