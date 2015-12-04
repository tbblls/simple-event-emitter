# SEE  
## Simple event emitter

### Usage:

````javascript

See.AddListener("notificationEvent", document.body, handler);
See.FireEvent("notificationEvent");
See.RemoveListener("notificationEvent");

function handler() {
  console.log('Event fired!');
}

````
