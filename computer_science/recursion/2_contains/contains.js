const contains = function (obj, val) {
  const values = Object.values(obj);
  const nestedObjects = values.filter((value) => typeof value === "object" && value !== null);

  if (values.includes(val)) return true;
  return nestedObjects.some((nestedObject) => contains(nestedObject, val));
};
  
// Do not edit below this line
module.exports = contains;
