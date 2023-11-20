export interface IProductItem {
  pr_sku_id: string;
  pr_group_id: string;
  pr_cat_id: string;
  pr_subcat_id: string;
  pr_uom_id: number;
}

export interface IProductsResponse {
  data: IProductItem[];
}

//здесь нужно будет указать те ключи, которые придут на запрос по качеству прогноза, пока укажу временно
export interface IForecastOfProducts extends IProductItem {
  pr_forecast: number;
}
