import { Create, SimpleForm, TextInput, required, regex } from 'react-admin';

const validateUsernameOrEmail = [
    required('Trường này không được để trống Tên đăng nhập hoặc email'),
];
const validateEmail = [
    required('Trường này không được để trống'),
    regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Định dạng email không hợp lệ'),
];

const AccessFromCreate = (props: any) => {
    return (
        <div>
            <Create {...props}>
                <SimpleForm>
                    <TextInput
                        source="username"
                        label="Username"
                        validate={validateUsernameOrEmail}
                    />

                    <TextInput
                        source="email"
                        label="Email"
                        validate={validateEmail}
                    />
                    <TextInput source="role" label="Role" />
                </SimpleForm>
            </Create>
        </div>
    );
};

export default AccessFromCreate;
