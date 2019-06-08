import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Checkbox } from '../checkbox';

describe('Checkbox component', () => {
  const testId = ['checkbox-label', 'checkbox-check', 'checkbox-input'];
  let onChange: jest.Mock;

  beforeEach(() => {
    onChange = jest.fn();
  });

  it('should render', () => {
    const { asFragment } = render(<Checkbox onChange={onChange}>Text</Checkbox>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render unchecked', () => {
    const { getByTestId } = render(<Checkbox testId={testId} onChange={onChange} />);
    expect(getByTestId('checkbox-input')).not.toHaveAttribute('checked', '');
  });

  it('should set input checked if checked', () => {
    const { getByTestId } = render(<Checkbox testId={testId} onChange={onChange} checked />);
    expect(getByTestId('checkbox-input')).toHaveAttribute('checked', '');
  });

  it('should change value on change event', () => {
    const { getByTestId } = render(
      <Checkbox testId={testId} onChange={onChange}>
        Text
      </Checkbox>
    );
    fireEvent.click(getByTestId('checkbox-label'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
