export const getRandomRange = (min, max) =>
  Math.floor(Math.random() * max) + min;
export const getAge = (characterDate) => {
  const today = new Date();
  const birthDate = new Date(characterDate);
  const month = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};
