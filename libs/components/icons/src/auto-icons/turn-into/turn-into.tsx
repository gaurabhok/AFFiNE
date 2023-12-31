
import { FC } from 'react';
// eslint-disable-next-line no-restricted-imports
import { SvgIcon } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import type { SvgIconProps } from '@mui/material';

export interface TurnIntoIconProps extends Omit<SvgIconProps, 'color'> {
    color?: string
}

export const TurnIntoIcon: FC<TurnIntoIconProps> = ({ color, style, ...props}) => {
    const propsStyles = {"color": color};
    const customStyles = {};
    const styles = {...propsStyles, ...customStyles, ...style}
    return (
        <SvgIcon style={styles} {...props}>
        <path fillRule="evenodd" d="M18 4.6h-2A1.4 1.4 0 0 0 14.6 6v2A1.4 1.4 0 0 0 16 9.4h2A1.4 1.4 0 0 0 19.4 8V6A1.4 1.4 0 0 0 18 4.6ZM16 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2ZM8 14.6H6A1.4 1.4 0 0 0 4.6 16v2A1.4 1.4 0 0 0 6 19.4h2A1.4 1.4 0 0 0 9.4 18v-2A1.4 1.4 0 0 0 8 14.6ZM6 13a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H6ZM8.566 3.566 7.434 2.434 2.87 7l4.565 4.566 1.132-1.132L5.93 7.8H12V6.2H5.931l2.635-2.634ZM15.434 20.434l1.132 1.132L21.13 17l-4.565-4.566-1.132 1.132L18.07 16.2H12v1.6h6.069l-2.635 2.634Z" clipRule="evenodd" />
        </SvgIcon>
    )
};
