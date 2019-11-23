import {cleanup} from '@testing-library/react';
import React from 'react';
import {renderHook} from 'react-hooks-testing-library'
import {useTooltip} from '../';


describe('useTooltip', function () {
   afterEach(cleanup);

    let renderLinkHook = (props) => {
     let {result} = renderHook(() => useTooltip(props));
     return result.current;
   };

    it('handles defaults', function () {
     let {tooltipProps} = renderLinkHook({children: 'Test Tooltip'});
     expect(tooltipProps.role).toBe('tooltip');
   });

   // TODO: add a test for the mouse leave functionality ... make a mouse leave in test utils?

   // same thing as before ... mock the state, don't worry about the hover web event 

 });