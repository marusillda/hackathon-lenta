import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    Box,
} from "@mui/material";
import {useEffect, useMemo, useState} from "react";
import Alert from "../Alert/Alert";
import styles from "./TableComponent.module.css";

interface ITableComponentProps {
    tableColumns: string[];
    tableRows: string[][];
    staticColumnsNumber: number;
}

const TableComponent = ({
                            tableColumns,
                            tableRows,
                            staticColumnsNumber,
                        }: ITableComponentProps) => {
    const [isAlertOpen, /*setIsAlertOpen*/] = useState<boolean>(true);
    const [checked, setChecked] = useState<boolean[]>(tableRows.map(() => false));

    useEffect(() => {
        setChecked(tableRows.map(() => false));
    }, [tableRows]);

    const sumOfProduct = useMemo(() => tableRows.length, [tableRows]);

    const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(
            e.target.checked
                ? new Array(checked.length).fill(true)
                : new Array(checked.length).fill(false)
        );
    };

    function handleSmallCheckbox(
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) {
        setChecked(
            checked.map((bool, i) => {
                return index === i ? e.target.checked : bool;
            })
        );
    }

    const deleteClick = () => {
        setChecked(new Array(checked.length).fill(false));
    };

    return (
        <>
            {/* <p className={styles.productSum}>Всего позиции: {countOfAllProducts}</p>
      <TableContainer component={Paper} sx={{ width: "1556px" }}>
        <Table size="small">
          <TableHead
            sx={{
              backgroundColor: "primary.light",
              borderBottom: "2px solid primary.main",
            }}
          >
            <TableRow>
              <TableCell padding="checkbox" sx={{ heigth: "36px" }}>
                <Checkbox
                  checked={checked.every((i) => i)}
                  onChange={handleChangeChecked}
                />
              </TableCell>
              <TableCell>TK</TableCell>
              <TableCell>Группа</TableCell>
              <TableCell>Категория</TableCell>
              <TableCell>Подкатегория</TableCell>
              <TableCell>Товар</TableCell>
              {dates.map((date) => (
                <TableCell>{date}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiBox-root": {
                width: "161px",
                display: "block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                boxSizing: "border-box",
              },
              "& .MuiTableCell-root": {
                borderRight: "0.5px solid light-grey",
              },
            }}
          >
            {rows.map((row, i) => (
              <TableRow
                component="th"
                scope="row"
                key={row.id}
                sx={{
                  backgroundColor:
                    i % 2 === 0 ? "background.paper" : "background.default",
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={checked[i]}
                    onChange={(e) => handleSmallCheckbox(e, i)}
                  />
                </TableCell>
                <TableCell>
                  <Box>{row.tk}</Box>
                </TableCell>
                <TableCell>
                  <Box>{row.group}</Box>
                </TableCell>
                <TableCell>
                  <Box>{row.category}</Box>
                </TableCell>
                <TableCell>
                  <Box>{row.subcat}</Box>
                </TableCell>
                <TableCell>
                  <Box>{row.product}</Box>
                </TableCell>
                {hardForecast.map((el) => (
                  <TableCell>{el}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isAlertOpen && (
        <Alert
          isAlertMessage={false}
          extClassName={styles.footer}
          countOfCheckedElement={checked.filter((el) => el).length}
          deleteClick={deleteClick}
          sumChecked={checked.includes(true) ? true : false}
        />
      )} */}
            <p className={styles.productSum}>Всего позиций: {sumOfProduct}</p>
            <TableContainer component={Paper} sx={{width: "1556px"}}>
                <Table size="small">
                    <TableHead
                        sx={{
                            backgroundColor: "#003C961A",
                        }}
                    >
                        <TableRow>
                            <TableCell
                                padding="checkbox"
                                sx={{
                                    borderBottom: "2px solid #003C96",
                                }}
                            >
                                <Checkbox
                                    checked={checked.every((i) => i)}
                                    onChange={handleChangeChecked}
                                />
                            </TableCell>
                            {tableColumns.map((columnName, index) => (
                                <TableCell
                                    sx={{
                                        borderBottom: "2px solid #003C96",
                                    }}
                                    key={`c_${index}`}
                                >
                                    {columnName}{" "}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody
                        sx={{
                            "& .MuiBox-root": {
                                width: "161px",
                                display: "block",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                boxSizing: "border-box",
                            },
                            "& .MuiTableCell-root": {
                                borderRight: "0.5px solid light-grey",
                                height: "36px",
                            },
                        }}
                    >
                        {tableRows.map((row, i) => (
                            <TableRow
                                component="tr"
                                key={i}
                                sx={{
                                    backgroundColor:
                                        i % 2 === 0 ? "background.paper" : "background.default",
                                    height: "36px",
                                }}
                            >
                                <TableCell padding="checkbox" component="td">
                                    <Checkbox
                                        checked={checked[i] || false}
                                        onChange={(e) => handleSmallCheckbox(e, i)}
                                    />
                                </TableCell>
                                {
                                    row.map((value, j) => (
                                        <TableCell component="td" key={`cell_${i}_${j}`}>
                                            {j < staticColumnsNumber ? (<Box>{value}</Box>) : value}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {isAlertOpen && (
                <Alert
                    isAlertMessage={false}
                    extClassName={styles.footer}
                    countOfCheckedElement={checked.filter((el) => el).length}
                    deleteClick={deleteClick}
                    sumChecked={checked.includes(true)}
                />
            )}
        </>
    );
};

export default TableComponent;
