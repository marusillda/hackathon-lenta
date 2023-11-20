import * as React from 'react';
import {styled} from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import {Box} from "@mui/material";
import closeIcon from '../../app/images/close.svg'
import {useEffect} from "react";

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled('li')(({theme}) => ({
  margin: theme.spacing(0.5),
}));

interface IChipsArrayProps {
  chips: ChipData[]
}

export default function ChipsArray({chips}: IChipsArrayProps) {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>(chips);

  useEffect(() => {
    setChipData(chips);
  }, [chips]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClick = () => console.log('Применить шаблон');

  const deleteIcon =
    (<Box component={"img"} src={closeIcon} width={12} height={12}/>);
  return (
    <Box
      display={'flex'}
      gap={5}
      flexWrap={'wrap'}
      p={0.5}
      my={6}
      sx={{
        listStyle: 'none',
      }}
      component={"ul"}
    >
      {chipData.map((data) => {
        return (
          <ListItem key={data.key}>
            <Chip
              component={"div"}
              sx={{
                height: "32px",
                color: 'black',
                backgroundColor: '#003C9614',
                fontSize: "15px"
              }}
              variant="filled"
              label={data.label}
              deleteIcon={deleteIcon}
              onClick={handleClick}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Box>
  );
}
