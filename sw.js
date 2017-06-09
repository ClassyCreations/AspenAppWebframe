self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('MHSSchedule').then(function(cache) {
      console.log("Service Worker Started");
      return cache.addAll([
        '/'
      ]);
    })
  );
});

self.addEventListener('beforeinstallprompt', function(e) {
  // beforeinstallprompt Event fired

  // e.userChoice will return a Promise.
  // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
  e.userChoice.then(function(choiceResult) {

    console.log(choiceResult.outcome);

    if(choiceResult.outcome == 'dismissed') {
      console.log('User cancelled home screen install');
    }
    else {
      console.log('User added to home screen');
    }
  });
});
