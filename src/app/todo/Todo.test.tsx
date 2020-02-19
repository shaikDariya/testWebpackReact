import React, {useReducer} from 'react';
import {
  render,
  cleanup,
  waitForDomChange,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';
import {renderHook, act} from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import Todo from './';
import TodoReducer, {todoState} from './TodoReducer';

//Router
import {Router} from 'react-router';
import {createMemoryHistory} from 'history';

//Mocks
import * as fetchUtil from '../common/apiUtil';
import {mockUser} from '../mock/user';

//Spy Fetch Calls
jest.spyOn(fetchUtil, 'fetchJson').mockImplementation(() => Promise.resolve([mockUser]));
const history = createMemoryHistory();
//RenderTodo With Router
const renderTodo = () => {
  return render(
    <Router history={history}>
      <Todo />
    </Router>,
  );
};
describe('Todo App', () => {
  afterEach(cleanup);
  it('Should show Loading on default', () => {
    const {result} = renderHook(() => useReducer(TodoReducer, todoState));
    const [state] = result.current;
    expect(state.loading).toBeTruthy();
  });
  it('Render Loading Default After Fetch Loading should remove from dom', async () => {
    const {getByText} = renderTodo();
    // Default Show Loading...
    expect(getByText(/Loading.../)).toBeInTheDocument();
    //Should remove After Sucess fetch;
    await waitForElementToBeRemoved(() => getByText(/Loading.../));
  });

  describe('Select Element tests', () => {
    let selectElement: HTMLSelectElement;
    let getByTextGlobal: any;
    let containerGlobal: any;
    beforeEach(async () => {
      const {container, getByText} = renderTodo();
      getByTextGlobal = getByText;
      containerGlobal = container;
      await waitForDomChange();
      selectElement = container.querySelector('select') as HTMLSelectElement;
    });
    it('Sucess fetch User load Select element', async () => {
      expect(selectElement).toBeInTheDocument();
    });
    it('Select should have 2 options', () => {
      expect((containerGlobal.querySelectorAll('select option') as HTMLOptionElement[]).length).toBe(2);
    });
    it('Select User load "Loading..." component', async () => {
      fireEvent.change(selectElement, {
        target: {
          value: 1,
        },
      });
      expect(getByTextGlobal(/Loading.../)).toBeInTheDocument();
    });
    it('OnChange Should navigate to Todo', async () => {
      fireEvent.change(selectElement, {
        target: {
          value: 1,
        },
      });
      expect(getByTextGlobal(/Loading.../)).toBeInTheDocument();
      expect(history.location.pathname).toBe('/todo');
    });
  });
});
