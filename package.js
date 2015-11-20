Package.describe({
  name: 'hastenfernandes:accounts-loginWithDigits',
  git: 'https://github.com/hastenfernandes/accounts-loginWithDigits.git',
  version: '1.0.0',
  summary: 'Login with loginWithDigits using cordova native sdk.'
});

Npm.depends({
});

// Cordova.depends({
//   'phonegap-loginWithDigits-plugin': "0.12.0"
// });

Package.on_use(function (api) {
  api.use('accounts-base@1.0.0');
  api.add_files('common.js', ['client', 'server']);
  api.add_files('client.js', ['client']);
  api.add_files('server.js', ['server']);
});