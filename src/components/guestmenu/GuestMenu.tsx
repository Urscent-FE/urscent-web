import { Link } from 'react-router-dom';

export const GuestMenu = () => {
  return (
    <ul className='flex text-lg font-bold'>
      <li className='mr-10'>
        <Link to='account/login'>LOG IN</Link>
      </li>
      <li className='mr-10'>
        <Link to='account/sign-up'>SIGN UP</Link>
      </li>
    </ul>
  );
};
