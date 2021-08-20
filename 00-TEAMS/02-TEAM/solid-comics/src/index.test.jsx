import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('./index');
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
  });
});

// import React from 'react';
// import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';

// import { act } from 'react-dom/test-utils';
// import { StaticRouter } from 'react-router';
// import App from './App';

// import UserSelection from './UserSelection';

// jest.mock('react-dom', () => ({ render: jest.fn() }));

// describe('Given an Index component', () => {
//   describe('When is rendered', () => {
//     test('Should render without crashing', {
//         // let varaba=1;
//             //   const div = document.createElement('div');
//       //         div.id = "root";
//               document.body.appendChild(div);
//       //         require("./index.js");
//       //         expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);

//       //         // ReactDOM.render(<App/>, div);
//       //         // global.document.getElementById = (id) => id ==='root' && div
//       //         // expect();
//       //         // expect(ReactDOM.render).toHaveBeenCalledWith(...)

//     });
//   });
// });
