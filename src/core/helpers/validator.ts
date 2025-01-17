
export function isValue(value: string | number | undefined) {
  return !!value;
}

export function isEmail(value?: string) {
  if (!value) return false;
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return regexEmail.test(value);
}

export function isPhone(value?: string) {
  if (!value) return false;
  const regexPhone = /^\([0-9]{2,3}\)\s[0-9]{5}-[0-9]{4}$/g;
  return regexPhone.test(value);
}

export function isPassword(value?: string) {
  if (!value) return false;
  const regexPass = /([a-zA-Z0-9#?!@$%^&*-]){8,}/g;
  return regexPass.test(value);
}
