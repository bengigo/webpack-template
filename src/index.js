import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this scripts
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());