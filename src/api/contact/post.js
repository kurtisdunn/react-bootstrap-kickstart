import assign from 'object-assign';
import fetch from '../../utils/fetch';

export default function (data) {
  console.log('contact-post: ', data);
  return fetch('contact', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: null
    })
  });
}
