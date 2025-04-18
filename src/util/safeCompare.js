export const safeCompare = (value1, value2) => {
  // 두 값을 같은 타입(문자열)으로 변환하여 비교
  return String(value1) === String(value2);
};
