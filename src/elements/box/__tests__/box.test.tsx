import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Box } from '..';

describe('Box component', () => {
  it('should render', () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Box className="other-class test">Facebook</Box>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as an html section', () => {
    const { asFragment } = render(<Box as="section">This should be a section</Box>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have custom inline styles', () => {
    const { asFragment } = render(
      <Box as="section" style={{ width: 200, zIndex: 1 }}>
        This should be a section with custom styles
      </Box>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component with different tag', () => {
    // eslint-disable-next-line react/prop-types
    const Custom = (props: any) => (
      <p {...props}>
        Custom
        {props.children}
      </p>
    );

    Custom.propTypes = { children: PropTypes.node.isRequired };

    const { asFragment } = render(<Box as={Custom}>This should be a p element</Box>);
    expect(asFragment()).toMatchSnapshot();
  });
});
