import $ from 'jquery';

// jquery namespaced events
export function add(element, eventName, func) {
  $(element).on(eventName, func);
}

export function remove(element, eventName) {
  $(element).off(eventName);
}

export function trigger(element, eventName) {
  $(element).trigger(eventName);
}
