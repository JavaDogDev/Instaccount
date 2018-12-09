function listenForRegisterClick() {
  const inputElements = [
    'username', 'password',
    'first-name', 'last-name',
    'email'
  ];

  const inputs = inputElements.map(i => document.getElementById(i))
    .map(label => label.getElementsByTagName('input')[0]);

  console.log(inputs);
}

function showError(err) {
  console.error('uhh there was a problem sorry\n' + err);
}

browser.tabs.executeScript({ file: "content-script.bundle.js" })
  .then(listenForRegisterClick)
  .catch(showError);
