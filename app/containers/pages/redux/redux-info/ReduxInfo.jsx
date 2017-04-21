import React from 'react';
import CodeJS from '../../../../components/code-highlight/CodeJS';
import {
  Panel, PanelBody, PanelFooter
} from '../../../../components/bootstrap/panel';

export default function ReduxInfo() {
  return (
    <section>
      <h2>Redux <small>The single source of truth</small></h2>
      <p>Redux is a lightweight data store and state management solution for your
        javascript applications.</p>
      <p>It&apos;s intentions is to be a single source for the state of your data and application
        while paying mind when to use local component state.
      </p>
      <p>Simplicity.</p>
      <p>Redux is really simple to use. Honestly the redux docs can be
        overwhelmingly misleading. If you are just learning redux you may just want
         to scroll down to the API and look at the very few
        methods it actually has.
      </p>
      <p>You will find everything is centered around that callback method you pass into createStore. Inside the callback {'(aka. reducer)'} is your logic
        that should build a new state object from what you passed into the <b>{'store.dispatch()'}</b>.
      </p>
      <Panel>
        <PanelBody>
          <p>
            The most basic start:
          </p>
          <ol>
            <li>Define your state shape. (not necessary but helps)</li>
            <li>Create your reducer function.</li>
            <li>Call the redux <b>{'"createStore(reducer)"'}</b> to get your store instance.</li>
            <li>Add a listener where you want. <b>{'"store.subscribe(myCallback)"'}</b></li>
            <li>Dispatch a change. <b>{'"store.dispatch(action)"'}</b></li>
          </ol>
        </PanelBody>
        <PanelFooter>
          <CodeJS>{`import { createStore } from 'redux';

// define a state shape, used as default and referencing
// for this example is just a simple string.
const myDefaultState = 'Tada!';

// create a callback (reducer)
const myReducer = (state = myDefaultState, { type, greeting }) => {
  if (type === 'ADD_GREETING') {
    return state + ' to ' + greeting;
  } else if (type === 'START_FRESH') {
    return greeting;
  }
  return state;
}

// make a redux store
const myStore = createStore(myReducer);

// listen for changes in the store state
// Note: this does not give any data. You must call getState().
myStore.subscribe(() => console.log(myStore.getState()));

// dispatch an "Action". Actions must be an object with a type prop.
myStore.dispatch({ type: 'ADD_GREETING', greeting: 'hello!' });

console: "tada! to hello!"

myStore.dispatch({ type: 'START_FRESH', greeting: 'hi again!' });

console: "hi again!"

`}</CodeJS>
        </PanelFooter>
      </Panel>
    </section>
  );
}
