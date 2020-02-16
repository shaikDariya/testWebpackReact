import {createContext} from 'react';
import {UserType} from './UserType';
const UserContext = createContext<Partial<UserType>>({
  id: 0,
});
export default UserContext;
