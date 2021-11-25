import _ from 'lodash';

function component() {
  console.log('enter component');
  const element = document.createElement('div');
  console.log('enter component2');
  const array = ['Hello', 'webpack'];
  element.innerHTML = _.join(array, ' '); 
  return element;
}
console.log('before append child');
document.body.appendChild(component());
