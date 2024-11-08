import { TextInput } from 'react-admin';

const Input = (props: any) => {
    return (
        <div>
            <TextInput
                source={props.source}
                label={props.label}
                validate={props.validate}
            />
        </div>
    );
};

export default Input;
