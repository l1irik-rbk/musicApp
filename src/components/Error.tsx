import React from 'react';
import * as A from '../theme/UI/StyledError';

const Error = ({ error }: { error: string | null }): JSX.Element => {
  return <A.StyledError>{error}</A.StyledError>;
};

export default Error;
