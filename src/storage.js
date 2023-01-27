function storage() {
  // eslint-disable-next-line no-var
  var dataLocal = localStorage.getItem('todos');
  return dataLocal;
}

// eslint-disable-next-line vars-on-top
const data = storage();
export default data;