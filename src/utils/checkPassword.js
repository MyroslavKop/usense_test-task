export const isEasyPassword = (password) => /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$/.test(password);

export const isMediumPassword = (password) =>
  /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(password) ||
  /^(?=.*\d)(?=.*\W)[\d\W]+$/.test(password) ||
  /^(?=.*[a-zA-Z])(?=.*\W)[a-zA-Z\W]+$/.test(password);

export const isStrongPassword = (password) =>
  /^[a-zA-Z]+$/.test(password) || /^[0-9]+$/.test(password) || /^[^a-zA-Z0-9]+$/.test(password);
