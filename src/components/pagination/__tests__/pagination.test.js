import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Pagination } from '..';

describe('Pagination component', () => {
  it('Pagination Should Exist', () => {
    expect(Pagination).toMatchSnapshot();
  });
  it('should have 3 pages and page 1 active', () => {
    const component = renderer.create(<Pagination total={3} current={1} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should have 5 pages, page 5 active and display pages 3 to 5', () => {
    const component = renderer.create(<Pagination total={5} current={5} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should not display page numbers', () => {
    const component = renderer.create(<Pagination showPrevNext delta={0} total={5} current={5} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should not display Previous/Next buttons', () => {
    const component = renderer.create(<Pagination delta={3} total={5} current={2} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Next button should be disabled', () => {
    const component = renderer.create(<Pagination total={3} current={3} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should not render if total pages equals 1', () => {
    const component = renderer.create(<Pagination total={1} current={1} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should not render if current page is greater than total pages', () => {
    const component = renderer.create(<Pagination total={2} current={3} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should call to onChange event on click on navigation button', () => {
    const onChange = jest.fn();
    const component = mount(<Pagination total={5} current={0} showPrevNext onChange={onChange} />);
    component.find('a.pagination-next').simulate('click');
    expect(onChange).toHaveBeenCalledTimes(1);
    component.find('a.pagination-previous').simulate('click');
    expect(onChange).toHaveBeenCalledTimes(2);
    component
      .find('a.pagination-link')
      .at(1)
      .simulate('click');
    expect(onChange).toHaveBeenCalledTimes(3);
  });
});
