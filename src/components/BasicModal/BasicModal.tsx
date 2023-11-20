import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, OutlinedInput } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 484,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 10,
};

export interface IBasicModalProps {
  open: boolean;
  handleCloseModal: () => void;
  handleSaveTemplate: () => void;
}

const BasicModal = ({
  open,
  handleCloseModal,
  handleSaveTemplate,
}: IBasicModalProps) => {
  const [valueOfInput, setValueOfInput] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueOfInput(e.target.value);
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h3"
          fontSize={18}
          fontWeight={"bold"}
          lineHeight={"130%"}
          sx={{ mb: "16px" }}
        >
          Назовите ваш новый шаблон
        </Typography>
        <OutlinedInput
          placeholder={"Название шаблона"}
          sx={{
            height: 52,
            bgcolor: "white",
            borderRadius: 2,
            width: 404,
            marginBottom: 8,
          }}
          onChange={handleChangeInput}
          name={valueOfInput}
        />
        <Box sx={{ display: "flex" }}>
          <Button
            variant={"outlined"}
            size={"large"}
            sx={{ width: 280, height: 52, borderRadius: 2, mr: "20px" }}
            onClick={handleCloseModal}
          >
            <Typography
              fontSize={15}
              fontWeight={"medium"}
              color={"black"}
              letterSpacing={"0.16px"}
              lineHeight={"125%"}
            >
              Отменить
            </Typography>
          </Button>
          <Button
            variant={"contained"}
            size={"large"}
            sx={{ width: 280, height: 52, borderRadius: 2 }}
            onClick={handleSaveTemplate}
          >
            Сохранить шаблон
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
