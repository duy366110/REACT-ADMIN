import {
    List,
    Datagrid,
    TextField,
    EmailField,
    BulkDeleteButton,
} from 'react-admin';
import CustomLinkField from '../../ui/customLinkField/CustomLinkField';

const AccessList = (props: any) => {
    return (
        <div>
            <List {...props}>
                <Datagrid
                    rowClick="edit"
                    bulkActionButtons={<BulkDeleteButton />}
                >
                    <TextField source="id" label="ID" />
                    <CustomLinkField
                        source="username"
                        label="Username"
                        type="Access"
                    />
                    <EmailField source="email" label="Email" />
                    <TextField source="role" label="Role" />
                </Datagrid>
            </List>
        </div>
    );
};

export default AccessList;
