const get = (key) => {
  const data = localStorage.getItem(key);
  return data;
};

const set = (key, value) => {
  localStorage.setItem(key, value);
};

export default {
  get: get,
  set: set,
};
