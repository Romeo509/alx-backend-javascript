const weakMap = new WeakMap();
// Export a const instance of WeakMap and name it weakMap.
const queryAPI = (endpoint) => {
  let total = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, total -= -1);
  if (total >= 5) throw new Error('Endpoint load is high');
  return total;
};

export { weakMap, queryAPI };
