import { Box, Button, Typography } from "@mui/material";
import printIcon from "../../app/images/printer.svg";
import excelIcon from "../../app/images/excel.svg";
import plusIcon from "../../app/images/plus.svg";
import { useState } from "react";
import BasicModal from "../BasicModal/BasicModal";

const ControlRow = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    window.print();
  };

  const handleOpenModalClick = () => {
    setOpenModal(true);
  };

  const handleCloseModalClick = () => {
    setOpenModal(false);
  };

  const handleSaveTemplate = () => {
    //TODO задиспатчить экшен на сохранению шаблона
    setOpenModal(false);
  };

  return (
    <>
      <Box display={"flex"} pt={8} justifyContent={"space-between"}>
        <Button
          onClick={handleOpenModalClick}
          variant={"outlined"}
          startIcon={<Box component={"img"} src={plusIcon} />}
          size={"large"}
          sx={{
            width: 236,
            height: 52,
            borderRadius: 2,
            px: 4,
            py: 3,
          }}
        >
          <Typography
            fontSize={15}
            fontWeight={"medium"}
            color={"black"}
            letterSpacing={"0.16px"}
            lineHeight={"125%"}
          >
            Сохранить как шаблон
          </Typography>
        </Button>

        <Box display={"flex"} gap={4}>
          <Button
            size={"large"}
            variant={"outlined"}
            onClick={handleClick}
            startIcon={<Box component={"img"} src={printIcon} ml={3} />}
            sx={{ width: 72, height: 52, borderRadius: 2 }}
          />
          <Button
            variant={"contained"}
            size={"large"}
            sx={{ width: 280, height: 52, borderRadius: 2 }}
            startIcon={<Box component={"img"} src={excelIcon} />}
          >
            Выгрузить в Excel
          </Button>
        </Box>
      </Box>
      {openModal && (
        <BasicModal
          open={openModal}
          handleCloseModal={handleCloseModalClick}
          handleSaveTemplate={handleSaveTemplate}
        />
      )}
    </>
  );
};

export default ControlRow;
