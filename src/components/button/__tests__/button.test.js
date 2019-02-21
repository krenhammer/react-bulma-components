import { render, fireEvent } from 'react-testing-library';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '..';

const Link = ({ to, children }) => <a href={to}>{children}</a>;

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

describe('Button component', () => {
  it('Should expose Button Group', () => {
    expect(Button.Group).toMatchSnapshot();
  });
  it('Should be a default Button', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should be an anchor button', () => {
    const { asFragment } = render(<Button renderAs="a" href="https://github.com/couds/react-bulma-components" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should be a Primary Button', () => {
    const { asFragment } = render(<Button color="primary" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should be a Large Primary Button', () => {
    const { asFragment } = render(<Button color="primary" size="large" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should render as a static Button', () => {
    const { asFragment } = render(<Button isStatic color="primary" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should render as a html button', () => {
    const { asFragment } = render(<Button renderAs="button" color="danger" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should render as a React element link with to prop', () => {
    const { asFragment } = render(
      <Button renderAs={Link} to="http://google.com" color="danger">
        TEST
      </Button>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should render be disabled', () => {
    const { asFragment } = render(<Button disabled />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should be a submit form button', () => {
    const { asFragment } = render(<Button submit />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should be a reset form button', () => {
    const { asFragment } = render(<Button reset />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should have a Click listener', () => {
    const onClick = jest.fn();
    const { container } = render(<Button onClick={onClick} />);
    fireEvent.click(container.firstChild);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('Should have no dispatch click handler if disabled', () => {
    const onClick = jest.fn();
    const { container } = render(<Button disabled onClick={onClick} />);
    fireEvent.click(container.firstChild);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it('Should have a call default onClick is no listener is set', () => {
    const spy = jest.spyOn(Button.defaultProps, 'onClick');
    const { container } = render(<Button />);
    fireEvent.click(container.firstChild);
    fireEvent.click(container.firstChild);
    expect(spy).toHaveBeenCalledTimes(2);
    Button.defaultProps.onClick.mockRestore();
  });
  it('Should forward ref', () => {
    const testRef = React.createRef();
    render(<Button ref={testRef} />);
    expect(testRef.current).not.toBeNull();
  });
  describe('Button Group component', () => {
    it('Should be a default list of buttons', () => {
      const { asFragment } = render(
        <Button.Group>
          <Button>test 0</Button>
          <Button>test 1</Button>
        </Button.Group>
      );
      expect(asFragment()).toMatchSnapshot();
    });
    it('Should concat class names in props with Bulma class name', () => {
      const { asFragment } = render(
        <Button.Group className="super-class-1 dope-class-2">
          <Button>test 0</Button>
          <Button>test 1</Button>
        </Button.Group>
      );
      expect(asFragment()).toMatchSnapshot();
    });
    it('Should group buttons together', () => {
      const { asFragment } = render(
        <Button.Group hasAddons>
          <Button>test 1</Button>
          <Button>test 2</Button>
        </Button.Group>
      );
      expect(asFragment()).toMatchSnapshot();
    });
    it('Should be centered', () => {
      const { asFragment } = render(
        <Button.Group position="centered">
          <Button>test 0</Button>
          <Button>test 1</Button>
        </Button.Group>
      );
      expect(asFragment()).toMatchSnapshot();
    });
    it('Should align to the right', () => {
      const { asFragment } = render(
        <Button.Group position="right">
          <Button>test 0</Button>
          <Button>test 1</Button>
        </Button.Group>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
