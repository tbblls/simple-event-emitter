# simple-event-emitter

## Usage:

Evts.AddListener("notificationEvent", document.body, handleHashLinks);
Evts.FireEvent("notificationEvent");
Evts.RemoveListener("notificationEvent");

function handleHashLinks() {
  // remove a href click events
  $( "a[href^=\"#\"]" ).off( "click", click);
  // add a href click events
  $( "a[href^=\"#\"]" ).on( "click", click);
}
