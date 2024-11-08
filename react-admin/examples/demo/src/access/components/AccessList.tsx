import { List, Datagrid, TextField, EmailField } from 'react-admin';

const AccessList = (props: any) => {
    return (
        <div>
            <List {...props}>
                <Datagrid rowClick="edit">
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
