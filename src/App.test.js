import React from "react";
import renderer from 'react-test-renderer';
import App from './App';
import Form from './components/Form'
import FilterButton from './components/FilterButton'
import Todo from './components/Todo'
import { shallow } from 'enzyme';


const data = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];



describe('Test Rendering', () => {
  it('renders title of app', () => {
    const wrapper = shallow(<App 
    tasks={data}/>);
    const title =  <h1>TodoMatic</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('renders Form correctly', () => {
    const wrapper = shallow(<Form />);
    const label = <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>;
      expect(wrapper.contains(label)).toEqual(true);
    });

    it('should say 3 tasks remaining', () => {
      const wrapper = shallow(<App tasks={data}/>);
      const heading = <h2 id="list-heading">3 tasks remaining</h2>;
      expect(wrapper.contains(heading)).toBe(true);
     
      });
    
});


describe('Snapshots', () => {
  it('renders App component correctly', () => {
      const component = renderer.create(<Form />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });


  it('renders Form correctly', () => {
    const component = renderer.create(<FilterButton />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});



