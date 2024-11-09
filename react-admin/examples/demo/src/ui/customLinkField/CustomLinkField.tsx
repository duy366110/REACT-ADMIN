import { Link, FieldProps, useRecordContext } from 'react-admin';

import { Access } from '../../types';
import { SxProps, Typography } from '@mui/material';

interface Props extends FieldProps<Access> {
    size?: string;
    sx?: SxProps;
    field?: string;
    type?: string;
}

const FullNameField = (props: Props | any) => {
    // const { size } = props;
    let contextAccess: any = useRecordContext<Access>();
    let record = null;

    if (props.type === 'Access' && contextAccess) {
        record = contextAccess;
    }

    return record ? (
        <Typography
            variant="body2"
            display="flex"
            flexWrap="nowrap"
            alignItems="center"
            component="div"
            sx={props.sx}
        >
            {record[props.field]}
        </Typography>
    ) : null;
};

const CustomLinkField = (_: FieldProps<any>) => {
    let contextAccess: any = useRecordContext<Access>();
    let { type, source, label }: any = _;
    let record = null;

    if (type === 'Access' && contextAccess) {
        record = contextAccess;
    }

    if (!record) {
        return null;
    }

    return (
        <div>
            {type === 'Access' && (
                <Link to={`/access/${record.id}`}>
                    <FullNameField
                        source={source}
                        label={label}
                        field={source}
                        type="Access"
                    />
                </Link>
            )}
        </div>
    );
};

export default CustomLinkField;
