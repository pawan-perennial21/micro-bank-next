export const validateEmailOrPhone = (rule: any, value: string) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^\d{10}$/;

  if (value && !emailRegex.test(value) && !phoneRegex.test(value)) {
    return Promise.reject('Please enter a valid email address or phone number');
  }

  return Promise.resolve();
};

export const validateEmail = (rule: any, value: string) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^\d{10}$/;

  if (value && !emailRegex.test(value) && !phoneRegex.test(value)) {
    return Promise.reject('Please enter a valid email address or phone number');
  }

  return Promise.resolve();
};
export const validatorPassword = (rule: any, value: any, callback: any) => {
  if (!value || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
    callback();
  } else {
    callback(
      'Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 number'
    );
  }
};
