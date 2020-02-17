import React from 'react';
import {UserType} from './UserType';

type SelectUserProps = {
  handleChange: (userId: string) => any;
  users: readonly UserType[];
};
const selectUser = ({handleChange, users}: SelectUserProps) => {
  return (
    <div className="row justify-content-center">
      <div className="p-2 col-sm-8 col-md-6 col-lg-4">
        <select
          className="form-control"
          onChange={(e: React.FormEvent<HTMLSelectElement>) => handleChange(e.target.value)}>
          <option value="">Select User</option>
          {users.map((user: UserType) => (
            <option key={user.id.toString()} value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default selectUser;
