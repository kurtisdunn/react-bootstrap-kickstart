import emit from '../emit';
import rules from './rule';
import React from 'react';
import ReactDOM from 'react-dom';

function notify (elem, errors, done) {

  elem.setAttribute('errors', errors);

  if (typeof done === 'function') {

    done(elem, errors);
  }
}

export default function (elem, done) {

  if (elem instanceof Event) {
    elem = elem.target;
  }

  const isDisabled = elem.querySelector('[disabled]');

  if(isDisabled){
    notify(elem, [], done);
  } else{
    const names = (elem.getAttribute('data-validators') || '').split(',').map(function (name) {
      return name.replace(/^\s+/, '').replace(/\s+$/, '');
    }).filter(Boolean);
    const namesLen = names.length;
    let callbackCount = 0;
    let errors = [];

    if (namesLen) {
      // console.log(names)
      names.forEach(function (name) {
        const rule = rules[name];
        if (!rule) {
          throw new Error(`The validator rule ${name} is not defined.`);
        }

        rule(elem, function (e) {
          errors = errors.concat(e || []);
          ++callbackCount;

          if (callbackCount === namesLen) {
            notify(elem, errors, done);
          }
        });
      });
    } else {
      notify(elem, errors, done);
    }
  }

}
