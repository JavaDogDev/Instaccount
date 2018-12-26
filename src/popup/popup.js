function listenForRegisterClick() {
  const inputElements = [
    'username', 'password',
    'first-name', 'last-name',
    'email'
  ];

  const inputs = inputElements.map(i => document.getElementById(i));

  // Register button - click handler
  document.getElementById('register-button').addEventListener('click', (e) => {
    const inputVals = {};
    inputs.forEach(e => inputVals[e.id] = e.value);

    console.log(inputVals);
  });
}

function showError(err) {
  console.error('uhh there was a problem sorry\n' + err);
}

browser.tabs.executeScript({ file: "content-script.bundle.js" })
  .then(listenForRegisterClick)
  .catch(showError);
