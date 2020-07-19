export default function verifyStorageData() {
  const user = localStorage.getItem('user');
  const authorization = localStorage.getItem('authorization');

  if (authorization === '' || authorization === null || user === '' || user === null || authorization.length !== 12) {
    return false;
  }

  return true;
}