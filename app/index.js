import _ from 'lodash';

const component = (msg) => {
    let element = document.createElement('div')
    let { greeting, content } = msg;
    element.innerHTML = _.join([greeting, content, foo], ' ');
  
    return element;
}
  
document.body.appendChild(component({ greeting: 'Hello', content: 'Webpack' }));