import {
    List,
    Datagrid,
    TextField,
    EmailField,
    BulkDeleteButton,
    Link,
    FieldProps,
    useRecordContext,
} from 'react-admin';
// import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Access } from '../../types';
import { SxProps, Typography } from '@mui/material';

interface Props extends FieldProps<Access> {
    size?: string;
    sx?: SxProps;
}

const FullNameField = (props: Props) => {
    const { size } = props;
    const record = useRecordContext<Access>();
    return record ? (
        <Typography
            variant="body2"
            display="flex"
            flexWrap="nowrap"
            alignItems="center"
            component="div"
            sx={props.sx}
        >
            {record['username']}
        </Typography>
    ) : null;
};

const CustomerLinkField = (_: FieldProps<Access>) => {
    const record = useRecordContext<Access>();
    if (!record) {
        return null;
    }
    return (
        <Link to={`/access/${record.id}`}>
            <FullNameField source="username" />
        </Link>
    );
};

const AccessList = (props: any) => {
    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <div>
            <List {...props}>
                <Datagrid
                    rowClick="edit"
                    bulkActionButtons={<BulkDeleteButton />}
                >
                    <TextField source="id" label="ID" />
                    <CustomerLinkField source="username" label="Username" />
                    <EmailField source="email" label="Email" />
                    <TextField source="role" label="Role" />
                </Datagrid>
            </List>
        </div>
    );
};

export default AccessList;
