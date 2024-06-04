//function to return an array of ids from a list of objects
export default function getListStudentIds(object) {
  let ids = [];
  if (object instanceof Array) {
    ids = object.map((item) => item.id);
  }

  return ids;
}
