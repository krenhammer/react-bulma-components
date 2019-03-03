import { storiesOf } from '@storybook/react';
import React from 'react';
import { Box } from '../box';
import { Heading } from '../heading';
import { Image } from '../image';
import { Section } from '../section';
import { Tile } from '../tile';

storiesOf('Tile', module).add('Default', () => (
  <Section>
    <Box>
      <Tile context="ancestor">
        <Tile size={8} vertical>
          <Tile>
            <Tile context="parent" vertical>
              <Tile renderAs="article" context="child" notification color="primary">
                <Heading>Vertical...</Heading>
                <Heading subtitle>Top tile</Heading>
              </Tile>
              <Tile renderAs="article" context="child" notification color="warning">
                <Heading>Tiles...</Heading>
                <Heading subtitle>Bottom Tile...</Heading>
              </Tile>
            </Tile>
            <Tile context="parent">
              <Tile renderAs="article" context="child" notification color="info">
                <Heading>Middle Tile...</Heading>
                <Heading subtitle>With image Tile...</Heading>
                <Image size="4by3" src="http://bulma.io/images/placeholders/640x480.png" />
              </Tile>
            </Tile>
          </Tile>
          <Tile context="parent">
            <Tile renderAs="article" context="child" notification color="danger">
              <Heading>Wide tile</Heading>
              <Heading subtitle>Aligned with the right tile</Heading>
              <div className="content" />
            </Tile>
          </Tile>
        </Tile>
        <Tile context="parent">
          <Tile renderAs="article" context="child" notification color="success">
            <div className="content">
              <Heading>Tall tile</Heading>
              <Heading subtitle>With even more content</Heading>
              <div className="content" />
            </div>
          </Tile>
        </Tile>
      </Tile>
    </Box>
  </Section>
));
