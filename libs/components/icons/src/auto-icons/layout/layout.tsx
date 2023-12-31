
import { FC } from 'react';
// eslint-disable-next-line no-restricted-imports
import { SvgIcon } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import type { SvgIconProps } from '@mui/material';

export interface LayoutIconProps extends Omit<SvgIconProps, 'color'> {
    color?: string
}

export const LayoutIcon: FC<LayoutIconProps> = ({ color, style, ...props}) => {
    const propsStyles = {"color": color};
    const customStyles = {};
    const styles = {...propsStyles, ...customStyles, ...style}
    return (
        <SvgIcon style={styles} {...props}>
        <path fillRule="evenodd" d="M18 4.6H6A1.4 1.4 0 0 0 4.6 6v12A1.4 1.4 0 0 0 6 19.4h12a1.4 1.4 0 0 0 1.4-1.4V6A1.4 1.4 0 0 0 18 4.6ZM6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Z" clipRule="evenodd" /><path fillRule="evenodd" d="M6 6h5v1.6H6V6ZM6 9h5v1.6H6V9ZM6 12h5v1.6H6V12Z" clipRule="evenodd" />
        </SvgIcon>
    )
};
