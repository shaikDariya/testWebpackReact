import {createContext} from 'react';
import {UserType} from './UserType';
const UserContext = createContext<Partial<UserType>>({});
export default UserContext;
