import { SelectInput, SelectArrayInput } from 'react-admin';

const Select = (props: any) => {
    return (
        <div>
            {props.type === 'multiple' && (
                <SelectArrayInput
                    source={props.source}
                    label={props.label}
                    choices={props.choices}
                />
            )}
            {props.type === 'single' && (
                <SelectInput
                    source={props.source}
                    label={props.label}
                    choices={props.choices} // Các giá trị trong dropdown
                />
            )}
        </div>
    );
};

export default Select;
