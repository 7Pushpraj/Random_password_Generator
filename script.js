 const passwordBox = document.getElementById("password");
  const length = 16;

  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const symbols = '!@#$%^&*()_+~`|}{[]:;?><';
  const allChars = upper + lower + digits + symbols;

  function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
  }

  function shuffle(str) {
    return str.split('').sort(() => Math.random() - 0.5).join('');
  }

  function generatePassword() {
    let password = '';
    // Ensure one of each type
    password += getRandomChar(upper);
    password += getRandomChar(lower);
    password += getRandomChar(digits);
    password += getRandomChar(symbols);

    // Fill the rest
    while (password.length < length) {
      password += getRandomChar(allChars);
    }

    passwordBox.value = shuffle(password);
  }

  function copyPassword() {
    if (passwordBox.value !== '') {
      passwordBox.select();
      document.execCommand("copy");
      alert("Password copied to clipboard!");
    }
  }