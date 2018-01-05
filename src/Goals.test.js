import React from 'react';
import ReactDOM from 'react-dom';
import Goals from './Goals.js';

describe("on init", () => {
    let component;
    let items = [];
    let div;
    function onRemove (index) { console. log ("onremove called", index);}

    beforeEach(()=>{
         div = document.createElement('div');
        ReactDOM.render(<Goals goals={items} />, div);
    });

    it("haha",()=>{
        expect(1).toBe(1);
    })

});
