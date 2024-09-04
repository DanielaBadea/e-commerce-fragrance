import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../Redux/auth/selectors';


export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    user,
  };
};
