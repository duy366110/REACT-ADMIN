import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    TableSortLabel,
} from '@mui/material';

const data = [
    { id: 1, name: 'Nguyễn Văn A', age: 25 },
    { id: 2, name: 'Trần Thị B', age: 30 },
    { id: 3, name: 'Lê Văn C', age: 28 },
    { id: 4, name: 'Phạm Văn D', age: 35 },
];

type DataType = {
    id: number;
    name: string;
    age: number;
};

const AccessTable = (props: any) => {
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = useState<keyof DataType | ''>('');

    // Hàm sắp xếp
    const handleSort = (property: any) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    // Hàm so sánh để sắp xếp
    const sortedData = data.slice().sort((a, b) => {
        if (orderBy) {
            const isAsc = order === 'asc';
            if (a[orderBy] < b[orderBy]) return isAsc ? -1 : 1;
            if (a[orderBy] > b[orderBy]) return isAsc ? 1 : -1;
            return 0;
        }
        return 0;
    });

    return (
        <TableContainer component={Paper}>
            {/* Bảng dữ liệu */}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell
                            sortDirection={orderBy === 'name' ? order : false}
                        >
                            {/* Tiêu đề cột "Tên" với chức năng sắp xếp */}
                            <TableSortLabel
                                active={orderBy === 'name'}
                                direction={orderBy === 'name' ? order : 'asc'}
                                onClick={() => handleSort('name')}
                            >
                                Tên
                            </TableSortLabel>
                        </TableCell>
                        <TableCell
                            sortDirection={orderBy === 'age' ? order : false}
                        >
                            {/* Tiêu đề cột "Tuổi" với chức năng sắp xếp */}
                            <TableSortLabel
                                active={orderBy === 'age'}
                                direction={orderBy === 'age' ? order : 'asc'}
                                onClick={() => handleSort('age')}
                            >
                                Tuổi
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedData.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AccessTable;
