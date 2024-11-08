import { Create, SimpleForm, TextInput } from 'react-admin';

const AccessFromCreate = (props: any) => {
    return (
        <div>
            <Create {...props}>
                <SimpleForm>
                    <TextInput source="username" label="Username" />
                    <TextInput source="email" label="Email" />
                    <TextInput source="role" label="Role" />
                </SimpleForm>
            </Create>
        </div>
    );
};

export default AccessFromCreate;
