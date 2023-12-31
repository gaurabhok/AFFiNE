
import { FC } from 'react';
// eslint-disable-next-line no-restricted-imports
import { SvgIcon } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import type { SvgIconProps } from '@mui/material';

export interface SettingsIconProps extends Omit<SvgIconProps, 'color'> {
    color?: string
}

export const SettingsIcon: FC<SettingsIconProps> = ({ color, style, ...props}) => {
    const propsStyles = {"color": color};
    const customStyles = {};
    const styles = {...propsStyles, ...customStyles, ...style}
    return (
        <SvgIcon style={styles} {...props}>
        <path fillRule="evenodd" d="m9.028 18.597.378 1.696c.045.2.16.38.324.508.165.129.37.199.582.199h3.377c.211 0 .416-.07.58-.199a.896.896 0 0 0 .325-.508l.383-1.691a7.46 7.46 0 0 0 1.423-.798l1.704.527c.202.062.42.056.617-.019a.92.92 0 0 0 .468-.39l1.689-2.837a.887.887 0 0 0-.18-1.115l-1.321-1.17c.06-.53.06-1.065 0-1.595l1.322-1.17a.887.887 0 0 0 .179-1.115l-1.689-2.838a.92.92 0 0 0-.468-.389.954.954 0 0 0-.616-.018L16.4 6.2a7.66 7.66 0 0 0-1.424-.798l-.382-1.695a.896.896 0 0 0-.324-.509.946.946 0 0 0-.581-.199h-3.377a.946.946 0 0 0-.581.2.897.897 0 0 0-.324.508l-.379 1.694c-.247.104-.488.22-.722.348a7.72 7.72 0 0 0-.705.45l-1.704-.527a.954.954 0 0 0-.617.018.92.92 0 0 0-.469.39L3.123 8.918a.883.883 0 0 0 .179 1.116l1.322 1.168c-.06.53-.06 1.065 0 1.595l-1.322 1.17a.883.883 0 0 0-.179 1.115l1.692 2.836a.92.92 0 0 0 .468.389c.198.074.416.08.617.018l1.704-.526c.443.316.92.584 1.424.798ZM4.802 9.225l1.506 1.329-.094.828c-.047.41-.047.824 0 1.234l.093.827-1.504 1.332 1.116 1.87 1.97-.61.646.462c.347.248.722.459 1.12.628l.756.321.435 1.954h2.31l.442-1.951.754-.32a5.861 5.861 0 0 0 1.117-.627l.646-.46 1.97.608 1.113-1.871-1.505-1.332.094-.827c.047-.41.047-.824 0-1.234l-.094-.827 1.505-1.332-1.113-1.871-1.968.607-.644-.458a6.06 6.06 0 0 0-1.127-.631l-.75-.322-.441-1.952h-2.308l-.438 1.958-.762.32c-.193.08-.382.171-.566.271-.186.105-.37.223-.55.352l-.645.461-1.97-.608-1.114 1.87Z" clipRule="evenodd" /><path fillRule="evenodd" d="M12 9.8a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM8.2 12a3.8 3.8 0 1 1 7.6 0 3.8 3.8 0 0 1-7.6 0Z" clipRule="evenodd" />
        </SvgIcon>
    )
};
