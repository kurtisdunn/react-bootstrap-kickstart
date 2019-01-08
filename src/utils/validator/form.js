import validate from './field';

export default function (elem, each, done) {
  if (elem instanceof Event) {
    elem = elem.delegateTarget || elem.currentTarget;
  }
  const fields = elem.querySelectorAll('[data-validators]');
  const fieldsLen = fields.length;
  let errors = [];
  let validatedFields = 0;

  // console.log('fields', fields);

  if (fieldsLen) {
    for (let a = 0; a < fieldsLen; a++) {

      validate(fields[a], function (field, fieldErrors) {
        ++validatedFields;
        errors = errors.concat(fieldErrors);

        const isDone = validatedFields === fieldsLen;

        if (typeof each === 'function') {
          each(field, fieldErrors);
        }

        if (isDone && typeof done === 'function') {
          done(elem, errors);
        }
      });
    }
  } else {
    done(elem, errors);
  }
}
