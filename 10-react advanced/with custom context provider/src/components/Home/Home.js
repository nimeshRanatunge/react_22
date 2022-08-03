import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../Store/Auth-context';

const Home = () => {
  const ctx2 = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctx2.onLogout}>Logout2</Button>
    </Card>
  );
};

export default Home;
