export async function postData(url = '', data = {}, authToken = '') {
  const authorization = `Bearer ${authToken}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json();
}

export async function getData(url = '', authToken = '') {
  const authorization = `Bearer ${authToken}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
  });
  return response.json();
}
