import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { errorTrue } from '../features/auth/auth';

const Error = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(errorTrue());
  }, []);
  return <></>;
};

export default Error;
