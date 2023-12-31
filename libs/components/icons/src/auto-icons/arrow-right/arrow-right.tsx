
import { FC } from 'react';
// eslint-disable-next-line no-restricted-imports
import { SvgIcon } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import type { SvgIconProps } from '@mui/material';

export interface ArrowRightIconProps extends Omit<SvgIconProps, 'color'> {
    color?: string
}

export const ArrowRightIcon: FC<ArrowRightIconProps> = ({ color, style, ...props}) => {
    const propsStyles = {"color": color};
    const customStyles = {};
    const styles = {...propsStyles, ...customStyles, ...style}
    return (
        <SvgIcon style={styles} {...props}>
        <path fillRule="evenodd" d="m14 12-4-4v8l4-4Z" clipRule="evenodd" />
        </SvgIcon>
    )
};
