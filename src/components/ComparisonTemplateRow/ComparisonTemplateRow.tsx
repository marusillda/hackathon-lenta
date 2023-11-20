import {Badge, Box, Typography, useTheme} from "@mui/material";
import ChipsArray from "../Chip/Chip";
import {useAppSelector} from "../../hooks/redux";

const ComparisonTemplateRow = () => {
    const {stores, filteredProducts} = useAppSelector(state => state.filterFormReducer);
    const {palette} = useTheme();
    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
        >
            <Box
                width={1027}
                borderRadius={4}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                minHeight={154}
                px={7}
                py={5}
                sx={{
                    boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.08);",
                }}
            >
                <Box display={"flex"} alignItems={"center"}>
                    <Typography
                        fontSize={18}
                        fontWeight={"bold"}
                        lineHeight={"125%"}
                        letterSpacing={"0.18px"}
                    >
                        Выбранные ТК для сравнения:
                    </Typography>
                    <ChipsArray chips={stores.map((label, key) => ({key, label}))}/>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                    <Typography
                        fontSize={18}
                        fontWeight={"bold"}
                        lineHeight={"125%"}
                        letterSpacing={"0.18px"}
                    >
                        Выбранные товары:
                    </Typography>
                    <ChipsArray chips={filteredProducts.map((p, key) => ({key, label: p.pr_sku_id}))}/>
                </Box>
            </Box>
            <Box
                width={500}
                borderRadius={4}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                minHeight={154}
                px={7}
                py={5}
                sx={{
                    boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.08);",
                }}
            >
                <Typography
                    fontSize={18}
                    fontWeight={"bold"}
                    lineHeight={"125%"}
                    letterSpacing={"0.18px"}
                >
                    Обозначения:
                </Typography>
                <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"} gap={7}>
                    <Box display={"flex"}>
                        <Box bgcolor={palette.primary.main} width={17} height={20}></Box>
                        <Typography ml={2}> - Прогноз спроса</Typography>
                    </Box>
                    <Box display={"flex"}>
                        <Box bgcolor={palette.secondary.main} width={17} height={20}></Box>
                        <Typography ml={2}> - Фактические продажи</Typography>
                    </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} ml={2}>
                    <Badge badgeContent={3} color="info"/>
                    <Typography ml={6}>Индекс качества прогноза по WAPE</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ComparisonTemplateRow;
