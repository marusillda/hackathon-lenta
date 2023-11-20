import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProductItem} from "../../models/IProductItem";

export interface IFilteredProducts {
    cities: string[];
    stores: string[];
    forecastDays: number;
    statisticsPeriod: number;
    filteredProducts: IProductItem[];
    filteredProductsForecast: string[][],
    filteredProductsStatistics: string[][]
}

export const initialState: IFilteredProducts = {
    cities: [],
    stores: [],
    forecastDays: 7,
    statisticsPeriod: 7,
    filteredProducts: [],
    filteredProductsForecast: [],
    filteredProductsStatistics: []
};

export const filterFormSlice = createSlice({
    name: "filterForm",
    initialState: initialState,
    reducers: {
        setFormFilter(
            state,
            action: PayloadAction<{
                bools: boolean[];
                data: IProductItem[];
                cities: string[];
                stores: string[];
                forecastDays: number;
                statisticsPeriod: number;
            }>
        ) {
            const filteredProducts = action.payload.data.filter(
                (_el, i) => action.payload.bools[i]
            );
            const stores = action.payload.stores;
            const forecastDays = action.payload.forecastDays;
            const statisticsPeriod = action.payload.statisticsPeriod;
            const getForecastData = (forecastDays: number): string[] => new Array(forecastDays).fill(0).map(() => Math.floor(Math.random() * 50).toString());
            const getStatisticsData = (): string[] => {
                const factSales = Math.floor(Math.random() * 10) + statisticsPeriod;
                const forecastSales = Math.floor(Math.random() * 10) + statisticsPeriod;
                const price = Math.floor(Math.random() * 480) + 20;
                return [
                    'шт.',
                    factSales.toString(),
                    forecastSales.toString(),
                    (factSales - forecastSales).toString(),
                    ((factSales - forecastSales) * price).toString(),
                    Math.abs(factSales - forecastSales).toString()
                ];
            }
            state.filteredProducts = filteredProducts;
            state.cities = action.payload.cities;
            state.stores = stores;
            state.forecastDays = forecastDays;
            state.statisticsPeriod = statisticsPeriod;

            state.filteredProductsForecast = stores.flatMap(store =>
                filteredProducts.map(p => ([
                    store,
                    p.pr_group_id,
                    p.pr_cat_id,
                    p.pr_subcat_id,
                    p.pr_sku_id,
                    ...getForecastData(forecastDays)
                ]))
            );

            state.filteredProductsStatistics = stores.flatMap(store =>
                filteredProducts.map(p => ([
                    store,
                    p.pr_group_id,
                    p.pr_cat_id,
                    p.pr_subcat_id,
                    p.pr_sku_id,
                    ...getStatisticsData()
                ]))
            );
        },

        resetFormFilter() {
            return initialState;
        },
    },
});

export default filterFormSlice.reducer;

export const {setFormFilter, resetFormFilter} = filterFormSlice.actions;
