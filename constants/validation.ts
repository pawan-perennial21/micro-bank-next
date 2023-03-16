export const validateEmailOrPhone = (rule: any, value: string) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^\d{10}$/;

  if (value && !emailRegex.test(value) && !phoneRegex.test(value)) {
    return Promise.reject('Please enter a valid email address or phone number');
  }

  return Promise.resolve();
};
