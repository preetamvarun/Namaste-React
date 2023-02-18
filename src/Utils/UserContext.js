import { createContext } from 'react';

const UserContext = createContext({
  user: {
    user: 'defaultName',
    email: 'defaultemail',
  },
});

export default UserContext;
