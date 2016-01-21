const normalizePhone = function _normalizePhone(value, previousValue) {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 3) {
      return onlyNums + '-';
    }
    if (onlyNums.length === 6) {
      return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3) + '-';
    }
  }
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 6) {
    return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3);
  }
  return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10);
}

const toUpperCase = function _toUpperCase(value) {
  return value && value.toUpperCase()
}

const toLowerCase = function _toLowerCase(value) {
  return value && value.toLowerCase()
}

module.exports = {
  toUpperCase,
  toLowerCase,
  normalizePhone
}