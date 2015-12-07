// Array.prototype.find ES6 polyfill.
require('array.prototype.find');

// Array.prototype.findIndex ES6 polyfill.
require('array.prototype.findindex');

// Polyfill for creating CustomEvents on IE9/10/11
require('custom-event-polyfill');

module.exports = (function(){
  'use strict';
  var See = {};
  var events = [];
  
  function subscribe(name, elem, func){
    elem.addEventListener(name, func, false);
  }
  
  function addEvent(name){
    return new CustomEvent(name);
  }
  
  function getEvent(name){
    return events.find( function (event) {
      return event.Name === name;
    });
  }
  function getEventIndex(name){
    return events.findIndex( function (event) {
      return event.Name === name;
    });
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
    return this;
  };

  
  // fire event
  See.FireEvent = function(name){
    try{
      var event = getEvent(name);
			if(event){
        event.Element.dispatchEvent(event.Event);
        return this;
      }
      else {
        return this;
      }
      
    }
    catch(error){
      return { success: false, message: 'Error occured while attempting to fire event.', error: error };
    }
  };
  
  // remove event
  See.RemoveListener = function(name){
    var index = getEventIndex(name);		
    events.splice(index, 1); 
    return this;
  };
  
  window.SEE = See;   
  return See;
    
}());

