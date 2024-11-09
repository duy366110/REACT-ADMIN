import { SimpleForm, required, regex, Edit } from 'react-admin';
import { Grid, Box, Typography } from '@mui/material';

import {
    Roles,
    Status,
    MfaStatus,
    Permissions,
    AccountLockoutStatus,
    Tenants,
} from '../../constants/datas';
import { NotEmpty, Email, Phone } from '../../constants/rules';
import Input from '../../ui/input/Input';
import Select from '../../ui/select/Select';

const AccessFromEdit = (props: any) => {
    return (
        <div>
            <Edit
                {...props}
                redirect="list"
                mutationMode="pessimistic"
                mutationOptions={{
                    onFailure: (error: any) => {
                        console.error('Update failed:', error);
                    },
                }}
            >
                <SimpleForm>
                    <Box sx={{ flexGrow: 1, padding: 2, width: '100%' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    sx={{
                                        textTransform: 'uppercase',
                                        fontWeight: '700',
                                        letterSpacing: '0.3px',
                                    }}
                                >
                                    Update access user
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Input
                                    source="username"
                                    label="username"
                                    validate={[NotEmpty]}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Input
                                    source="full_name"
                                    label="Full name"
                                    validate={[NotEmpty]}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Input
                                    source="email"
                                    label="Email"
                                    validate={[NotEmpty, Email]}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Input
                                    source="phone_number"
                                    label="Phone number"
                                    validate={[NotEmpty, Phone]}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Select
                                    source="role"
                                    label="Role"
                                    choices={Roles}
                                    type="single"
                                    validate={[NotEmpty]}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Select
                                    source="group"
                                    label="Group"
                                    choices={Roles}
                                    type="multiple"
                                    validate={[NotEmpty]}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Select
                                    source="tenant"
                                    label="Tenant role"
                                    choices={Tenants}
                                    type="single"
                                    validate={[NotEmpty]}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Select
                                    source="status"
                                    label="Status"
                                    choices={Status}
                                    type="single"
                                    validate={[NotEmpty]}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Select
                                    source="mfa_status"
                                    label="MFA"
                                    choices={MfaStatus}
                                    type="single"
                                    validate={[NotEmpty]}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Select
                                    source="permissions"
                                    label="Permissions"
                                    choices={Permissions}
                                    type="multiple"
                                    validate={[NotEmpty]}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Select
                                    source="account_lockout_status"
                                    label="Account lockout status"
                                    choices={AccountLockoutStatus}
                                    type="single"
                                    validate={[NotEmpty]}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </SimpleForm>
            </Edit>
        </div>
    );
};

export default AccessFromEdit;
