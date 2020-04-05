import React from 'react';
import { shallow } from 'enzyme';    
import InputFormComponent from './InputFormComponent';

describe("InputFormComponent Component", () => {

    const InputFormComponentWrapper = shallow(<InputFormComponent />);
 
    it("should render input form component", () => {
        expect(InputFormComponentWrapper.find('form.input-form').exists()).toBe(true)
    });
    
    it('should render amount input', () => {
        expect(InputFormComponentWrapper.find('#amount').length).toEqual(1)
    });

    it('should render duration input', () => {
        expect(InputFormComponentWrapper.find('#duration').length).toEqual(1)
    });

    describe('Amount input field', () => {
        it('amount input should respond to change event', () => {
            InputFormComponentWrapper.find('#amount').simulate('change', {target: {value: '2000'}});
            expect(InputFormComponentWrapper.find('#amount').props().value).toEqual('2000');
        })
    })
    
    describe('Test duration  input', () => {
        it('duration input should respond to change event', () => {
            InputFormComponentWrapper.find('#duration').simulate('change', {target: {value: '12'}});
            expect(InputFormComponentWrapper.find('#duration').props().value).toEqual('12');
        })
    });
});
