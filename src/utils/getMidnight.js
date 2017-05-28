const getMidnight = date => {
  const resultDate = date ? new Date(date.getTime()) : new Date();
  resultDate.setHours(0, 0, 0, 0);
  return resultDate;
};

export default getMidnight;
