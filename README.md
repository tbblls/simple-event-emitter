# SEE  
## Simple event emitter

### Install:

'''
npm install simple-event-emitter
'''

### Usage:

````javascript

SEE.AddListener("notificationEvent", document.body, handler);
SEE.FireEvent("notificationEvent");
SEE.RemoveListener("notificationEvent");

function handler() {
  console.log('Event fired!');
}

````

### Build

To build:

'''
1. npm install
2. webpack && webpack --no-minimize
'''

This outputs two files to the ./dist directory.
- see.js
- see.min.js 
