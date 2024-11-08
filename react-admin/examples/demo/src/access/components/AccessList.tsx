import {
    List,
    Datagrid,
    TextField,
    EmailField,
    BulkDeleteButton,
} from 'react-admin';

const AccessList = (props: any) => {
    return (
        <div>
            <List {...props}>
                <Datagrid
                    rowClick="edit"
                    bulkActionButtons={<BulkDeleteButton />}
                >
                    <TextField source="id" label="ID" />
                    <TextField source="username" label="Username" />
                    <EmailField source="email" label="Email" />
                    <TextField source="role" label="Role" />
                </Datagrid>
            </List>
        </div>
    );
};

export default AccessList;
