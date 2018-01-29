import React from 'react';
import ReactDOM from 'react-dom';
import Goals from './Goals.js';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { debug } from 'util';

test('Default snapshot test', () => {
    const items = [];
    const component = renderer.create(<Goals goals={items}> </Goals>, );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});


test('click on remove will call fn on props', () => {
    configure({adapter: new Adapter()});
    const items = ['goal-1'];
    const someFunction = jasmine.createSpy();
    const component = shallow(<Goals goals={items} onRemove={someFunction}> </Goals>);

    console.log('component', component);
    
    expect(component.find('.glyphicon').length).toEqual(1);

    component.find('.glyphicon').simulate('click');

    expect(someFunction).toHaveBeenCalled();
});