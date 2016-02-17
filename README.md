**** This code is for learning purposes and should not be used in production code. ****


# SEE  
## Simple event emitter

### Install:

```

npm install simple-event-emitter

```

### Usage:

```javascript

SEE.AddListener("notificationEvent", handler);
SEE.FireEvent("notificationEvent");
SEE.RemoveListener("notificationEvent");

SEE.AddListener("notificationEvent", handler)
   .AddListener("buildEvent", handler)
   .AddListener("routeEvent", handler)
   .AddListener("closingEvent", handler);

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
