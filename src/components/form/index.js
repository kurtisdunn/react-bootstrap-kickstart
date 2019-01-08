import React from 'react';
import assign from 'object-assign';
import emit from '../../utils/emit';
import Alert from '../../components/alert';
import validate from '../../utils/validator/form';

const $ = window.$;

function emitResponse (elem, cmpnt) {
  return function (response) {
    console.log('emitResponse', response);
    emit(elem, 'response', {
      detail: response
    });
  };
}

function emitSuccess (elem, cmpnt) {
  return function (response) {
    cmpnt.setState({ response: response.toString(), responseType: 'success' });
  };
}

function emitError (elem, cmpnt) {
  return function (response) {
    cmpnt.setState({ response: response.toString(), responseType: 'danger' });
  };
}

function serialize(elem) {
  return $(elem).serializeArray().reduce(function(prev, curr) {
    var selects = [].slice.call(elem.querySelectorAll('select'));
    let selectArray;

    if (selects.length > 0) {
      selectArray = selects.reduce(function(prev, curr) {
        if (prev.hasOwnProperty(curr.id)) {
          if (Array.isArray(prev[curr.id])) {
            prev[curr.id].push(curr.value);
          } else {
            prev[curr.id] = [prev[curr.name], curr.value];
          }
        } else {
          prev[curr.id] = curr.value;
        }
        return prev;
      }, {});
    }

    if (prev.hasOwnProperty(curr.name)) {
      if (Array.isArray(prev[curr.name])) {
        prev[curr.name].push(curr.value);
      }
    } else {
      prev[curr.name] = curr.value;
    }

    const result = assign({}, prev, selectArray);
    return result;
  }, {});
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      erros: null,
      response: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.recursiveCloneChildren = this.recursiveCloneChildren.bind(this);
  }

  handleSubmit(event) {
    const that = this;
    const form = event.target;
    const handler = this.props.method;
    if (handler) {
     event.preventDefault();
    }
    validate(event.target, function (field, errors) {
     that.setState({
       errors: errors
     });
    }, function (form, errors) {
      if (!handler || errors.length) {
        return;
      }
      handler(serialize(form))
        .then(emitResponse(form))
        .then(emitSuccess(form, that))
        .catch(emitError(form, that));
    });
  }
  recursiveCloneChildren(children) {
    const that = this;
    return React.Children.map(children, child => {
        var childProps = {};
        if (React.isValidElement(child)) {
          childProps = { errors: that.state.errors };
        }
        if (child.props) {
          childProps.children = this.recursiveCloneChildren(child.props.children);
          return React.cloneElement(child, childProps);
        }
        return child;
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        { this.state.response ? <Alert type={ this.state.responseType } message={ this.state.response }/> : null}
        { this.recursiveCloneChildren(this.props.children) }
      </form>
    );
  }
}
