var _ = require('lodash');

module.exports = (function(){
  'use strict';
  var See = {};
  var events = [];
  
    // Polyfill for creating CustomEvents on IE9/10/11
  require('custom-event-polyfill');


  function subscribe(name, elem, func){
    elem.addEventListener(name, func, false);
  }
  
  function addEvent(name){
    return new CustomEvent(name);
  }
  
  function getEventIndex(name){
    return _.findIndex(events, function (event) {
      return event.Name === name;
    });
  }
  
  function getEvent(name){
    var index = getEventIndex(name);
    if(index > -1){
      return events[index];
    }
    else{
      return null;
    }
  }
  
  // add new event
  See.AddListener = function(name, elem, func){
    var listener = {
      Event: addEvent(name),
      Name: name,
      Element: elem
    };
		var event = getEvent(name);
    if(!event){
      events.push(listener);
      subscribe(name, elem, func);
    }
    return events;
  }

  
  // fire event
  See.FireEvent = function(name){
    try{
      var event = getEvent(name);
			if(event){
        event.Element.dispatchEvent(event.Event);
        return { success: true, message: 'Event has been fired.' };
      }
      else{
        return { success: false, message: 'Event not found.' };
      }
      
    }
    catch(error){
      return { success: false, message: 'Error occured while attempting to fire event.', error: error };
    }
    
  }
  
  // remove event
  See.RemoveListener = function(name){
    var index = getEventIndex(name);		
    events.splice(index, 1); 
    return events;
  }  
  window.SEE = See;   
  return See;
    
}());

