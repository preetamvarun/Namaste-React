import { Outlet } from 'react-router-dom';
import UserContext from '../Utils/UserContext';
import { useContext } from 'react';

const About = () => {
  const { user, email } = useContext(userContext);
  return (
    <div>
      <h1>This an about page</h1>
      <p>
        {' '}
        I am currently at lesson number : 7🚀. It's name is finding the path.
        It's time to learn react routing. Both static routing and dynamic
        routing.
      </p>
      <p>
        {user} {email}
      </p>
      <Outlet />
    </div>
  );
};

export default About;
