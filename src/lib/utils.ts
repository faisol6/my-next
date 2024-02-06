export const numberToCommasNumber = (num: number) => {
  const internationalNumberFormat = new Intl.NumberFormat("en-US");
  return Number(num) ? internationalNumberFormat.format(num) : 0;
};

export const handleLogout = () => {
  localStorage.clear();
  window.location.replace(`/login`);
};
