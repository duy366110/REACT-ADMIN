import { TextInput } from 'react-admin';
import { Box } from '@mui/material';

const Input = (props: any) => {
    return (
        <Box sx={{ width: '100%' }}>
            <TextInput
                source={props.source}
                label={props.label}
                validate={props.validate}
            />
        </Box>
    );
};

export default Input;
