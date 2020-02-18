import {UserType} from './../todo/User/UserType';
export const mockUser: UserType = {
  id: 1,
  name: 'test user',
  username: 'test user',
  email: 'testUser@gmail.com',
  address: {
    street: 'test',
    suite: 'test',
    city: 'test',
    zipcode: 'test',
    geo: {
      lat: 0,
      lng: 0,
    },
  },
  phone: '123456789',
  website: '@testing-library/react',
  company: {
    name: 'wakeCap',
    catchPhrase: 'test',
    bs: 'test',
  },
};
