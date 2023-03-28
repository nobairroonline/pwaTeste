window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js')
             .then(function(registration){
             	console.log('Registration successful, scope is:', registration.scope)
             })
             .catch(function(error){
             	console.log('Service Worker registration failed, error:', error)
             })
  }
}
