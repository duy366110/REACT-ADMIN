import { BooleanInput } from 'react-admin';

const Switch = (props: any) => {
    return (
        <div>
            <BooleanInput
                source={props.source}
                label={props.label}
                defaultValue={false}
            />
        </div>
    );
};

export default Switch;
