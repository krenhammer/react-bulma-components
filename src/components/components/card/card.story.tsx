import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Card, CardContent, CardFooter, CardFooterItem, CardHeader, CardHeaderTitle, CardImage } from '.';
import { Content } from '../../elements/content';
import { Heading } from '../../elements/heading';
import { Image } from '../../elements/image';
import { Media, MediaItem } from '../../layout/media';

storiesOf('Card', module)
  .addDecorator(story => <div style={{ margin: '0px auto', width: 450 }}>{story()}</div>)
  .add('Default', () => (
    <Card>
      <CardImage size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
      <CardContent>
        <Media>
          <MediaItem renderAs="figure" position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </MediaItem>
          <MediaItem>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>
              @johnsmith
            </Heading>
          </MediaItem>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </CardContent>
    </Card>
  ))
  .add('With Footer actions', () => (
    <Card>
      <CardHeader>
        <CardHeaderTitle>Title</CardHeaderTitle>
      </CardHeader>
      <CardContent>
        <Media>
          <MediaItem renderAs="figure" position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </MediaItem>
          <MediaItem>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>
              @johnsmith
            </Heading>
          </MediaItem>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </CardContent>
      <CardFooter>
        <CardFooterItem renderAs="a">Yes</CardFooterItem>
        <CardFooterItem renderAs="a">No</CardFooterItem>
        <CardFooterItem renderAs="a">Maybe</CardFooterItem>
      </CardFooter>
    </Card>
  ));
