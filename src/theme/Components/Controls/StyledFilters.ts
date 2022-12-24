import { StylesConfig } from 'react-select';

import { IOptions } from '../../../helpers/constantsTypes';

type IsMulti = false;

export const SelectStyles: StylesConfig<IOptions, IsMulti> = {
  control: (provided) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: 'inherit',
    padding: '0.25rem',
    width: '300px',
    borderRadius: 'none',
  }),
  option: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),
};
