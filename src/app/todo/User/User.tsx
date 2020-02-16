import React from 'react';

type SelectUserProps = {
  handleChange: (userId: number) => any;
};
const selectUser = ({handleChange}: SelectUserProps) => {
  return (
    <div className="row justify-content-center">
      <div className="p-2 col-4">
        <select
          className="form-control"
          onChange={(e: React.FormEvent<HTMLSelectElement>) => handleChange(e.target.value as number)}>
          <option value="">Select User</option>
          <option value={1}> First</option>
        </select>
      </div>
    </div>
  );
};
export default selectUser;
