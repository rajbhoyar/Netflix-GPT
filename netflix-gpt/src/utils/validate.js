export const checkValidData = (name, email, password) => {
  if (name !== "" && !/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)) {
    return "Name should start with a capital letter and contain only alphabetic characters, spaces, and valid punctuation.";
  }

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  if (!isEmailValid) {
    return "Please enter a valid email address in the format: example@domain.com.";
  }

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPasswordValid) {
    return "Password must be at least 8 characters long, include a number, an uppercase letter, and a lowercase letter.";
  }

  return null;
};
