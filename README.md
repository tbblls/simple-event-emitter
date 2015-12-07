# SEE  
## Simple event emitter

### Install:

```

npm install simple-event-emitter

```

### Usage:

```javascript

SEE.AddListener("notificationEvent", document.body, handler);
SEE.FireEvent("notificationEvent");
SEE.RemoveListener("notificationEvent");

SEE.AddListener("notificationEvent", document.body, handler)
   .AddListener("buildEvent", document.body, handler)
   .AddListener("routeEvent", document.body, handler)
   .AddListener("closingEvent", document.body, handler);

SEE.FireEvent("notificationEvent")
   .FireEvent("closingEvent");

function handler() {
  console.log('Event fired!');
}

```

### Build

To build:

```

npm install
webpack && webpack --no-minimize

```

This outputs two files to the ./dist directory.
- see.js
- see.min.js 
