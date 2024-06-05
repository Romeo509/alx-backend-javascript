// function that returns a boolean if all the elements
// in the array exist within the set.
const hasValuesFromArray = (set, array) => array.every((value) => set.has(value));

export default hasValuesFromArray;
