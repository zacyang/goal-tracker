import React from 'react';
import ReactDOM from 'react-dom';
import Goals from './Goals.js';
import renderer from 'react-test-renderer';

test('Default snapshot test', ()=> {
    const items = [];
   const component = renderer.create(<Goals goals={items}> </Goals>, );
   let tree = component.toJSON();

   expect(tree).toMatchSnapshot();
});