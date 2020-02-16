const fakeApiBaseUrl: string = 'http://jsonplaceholder.typicode.com';
const jsonWrapper = (method: string) => async (path: string, init: any = {}): Promise<any> => {
  const response = await fetch(fakeApiBaseUrl + path, {
    ...init,
    method,
    headers: {
      ...init.headers,
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  try {
    return await response.json();
  } catch (e) {
    console.warn('Json Parse Error', e);
    return null;
  }
};

export const fetchJson = jsonWrapper('get');
export const postJson = jsonWrapper('post');
export const deleteJson = jsonWrapper('delete');
