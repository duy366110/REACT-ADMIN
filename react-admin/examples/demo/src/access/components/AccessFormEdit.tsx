import { Create, SimpleForm, required, regex, Edit } from 'react-admin';
import Input from '../../ui/input/Input';
import Select from '../../ui/select/Select';
import Switch from '../../ui/switch/switch';

const validateUsernameOrEmail = [
    required('Trường này không được để trống Tên đăng nhập hoặc email'),
];
const validateEmail = [
    required('Trường này không được để trống'),
    regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Định dạng email không hợp lệ'),
];

const roles = [
    { id: 'admin', name: 'Admin' },
    { id: 'user', name: 'User' },
    { id: 'guest', name: 'Guest' },
];

const status = [
    { id: 'active', name: 'Active' },
    { id: 'inactive', name: 'Inactive' },
    { id: 'suspended', name: 'Suspended' },
];

const mfaStatus = [
    { id: 'enabled', name: 'Enabled' },
    { id: 'disabled', name: 'Disabled' },
];

const permissions = [
    { id: 'created', name: 'Created' },
    { id: 'updated', name: 'Updated' },
    { id: 'deleted', name: 'Deleted' },
];

const accountLockoutStatus = [
    { id: 'enabled', name: 'Enabled' },
    { id: 'disabled', name: 'Disabled' },
];

const tenants = [
    { id: '001', name: 'Source' },
    { id: '002', name: 'Server' },
    { id: '003', name: 'Cloud' },
    { id: '004', name: 'Mailer' },
];

const AccessFromEdit = (props: any) => {
    return (
        <div>
            <Edit {...props}>
                <SimpleForm>
                    <Input
                        source="username"
                        label="username"
                        validate={validateUsernameOrEmail}
                    />

                    <Input
                        source="full_name"
                        label="Full name"
                        validate={validateUsernameOrEmail}
                    />

                    <Input
                        source="email"
                        label="Email"
                        validate={validateUsernameOrEmail}
                    />

                    <Input
                        source="phone_number"
                        label="Phone number"
                        validate={validateUsernameOrEmail}
                    />

                    <Select
                        source="role"
                        label="Role"
                        choices={roles}
                        type="single"
                    />

                    <Select
                        source="group"
                        label="Group"
                        choices={roles}
                        type="multiple"
                    />

                    <Select
                        source="tenant"
                        label="Tenant role"
                        choices={tenants}
                        type="single"
                    />

                    <Select
                        source="status"
                        label="Status"
                        choices={status}
                        type="single"
                    />

                    <Select
                        source="mfa_status"
                        label="MFA"
                        choices={mfaStatus}
                        type="single"
                    />

                    <Select
                        source="permissions"
                        label="Permissions"
                        choices={permissions}
                        type="multiple"
                    />

                    <Select
                        source="account_lockout_status"
                        label="Account lockout status"
                        choices={accountLockoutStatus}
                        type="single"
                    />
                </SimpleForm>
            </Edit>
        </div>
    );
};

export default AccessFromEdit;
