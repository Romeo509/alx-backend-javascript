// funtcion to returns an updated map for all
// items with initial quantity at 1.
const updateUniqueItems = (items) => {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [k, v] of items.entries()) {
    if (v === 1) {
      items.set(k, 100);
    }
  }
  return items;
};

export default updateUniqueItems;
