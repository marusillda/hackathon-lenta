import { Box, OutlinedInput } from "@mui/material";
import { useCallback, useState } from "react";
import ProductsCheckboxList from "../ProductsCheckboxList/ProductsCheckboxList";
import { IServerResponse } from "../../models/IServerResponse";
import searchIcon from "../../app/images/search_regular.svg";
import { IProductItem } from "../../models/IProductItem";

interface IProductsSelectProps {
  products: IServerResponse<IProductItem[]>;
  selectedProducts: IProductItem[];
  setSelectedProducts: (products: IProductItem[]) => void;
  bools: boolean[];
  setBools: (arr: boolean[]) => void;
}

const ProductsSelect = ({
  products,
  bools,
  setBools,
}: IProductsSelectProps) => {
  const [searchedStr, setSearchedStr] = useState<string>("");

  const handleSearch = useCallback(
    (e: any) => {
      setSearchedStr(e.target.value);
    },
    [products]
  );

  return (
    <Box mt={3}>
      <OutlinedInput
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            handleSearch(e);
          }
        }}
        startAdornment={<Box component={"img"} src={searchIcon} pr={2} />}
        placeholder={"Найти"}
        sx={{
          height: 44,
          bgcolor: "white",
          borderRadius: 2,
          mx: 8,
          width: 244,
          marginBottom: 7,
        }}
      />
      <Box sx={{ overflowY: "scroll", height: "622px" }}>
        <ProductsCheckboxList
          bools={bools}
          setBools={setBools}
          searchedStr={searchedStr}
        />
      </Box>
    </Box>
  );
};

export default ProductsSelect;
