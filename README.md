# <div style="display: flex; align-items: center"><img src="https://raw.githubusercontent.com/helmuthdu/react-bulma-components/master/docs/images/logo.png" width="40" style="margin-top: 3px" /><span>React-bulma-components</span></div>

[![Build Status](https://travis-ci.org/helmuthdu/react-bulma-components.svg?branch=master)](https://travis-ci.org/helmuthdu/react-bulma-components)
[![Coverage Status](https://coveralls.io/repos/github/helmuthdu/react-bulma-components/badge.svg?branch=master)](https://coveralls.io/github/helmuthdu/react-bulma-components?branch=master)

React components for [Bulma](http://bulma.io/) (v0.8.0) UI compatible with most used React Frameworks ([Gatsby](https://www.gatsbyjs.org/), [CRA](https://github.com/facebook/create-react-app), [Next.js](https://nextjs.org/))

### To Use

Currently there are two ways to use this library depending of your needs and configuration:

- **Basic**: You import from the main module the components and include the css your self (No treeshaking by default, no bulma variables override)
- **Advanced**: You import from the lib folder the components you need, this is the more versatile way but need some extra configuration (See [Advanced Setup](https://github.com/helmuthdu/react-bulma-components#advanced) section)

#### Basic

This configuration will allow you to start fast but with one drawback, by default will include all components (no treeshaking) and will use the default variables of Bulma.

```javascript
import * as React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';

export default () => <Button color="primary">My Bulma button</Button>;
```

#### Advanced

This configuration its recomended it you answer yes to one of the following questions:

- I'm worried about the final size of my bundle?
- I need to override the default Bulma variables?

In your main scss/sass file you will need to include the generic css classes bulma use, please ensure you do this on your mail scss file (App.scss fox example) and do not add this inside the `_variables` file (see below)

```scss
@import '~react-bulma-components/src/index.scss';
```

You can start using the library like this

```javascript
import * as React from 'react';
import { Button } from '@/components/button';

export default () => <Button color="primary">My Bulma button</Button>;
```

Before you use this configuration you need to setup a `_variables.sass` file somewhere in your project (I recomment inside your `src` folder). This file will alow you to override bulma variables if need it like:

```
$primary: #c3c3c3
```

**Note** Use this file only for variables, do not include any css rule in this files because that will cause to that rule to be duplicated for every time you include a component from this library.

Depending of your project configuration you will need to setup your framework to use this file:

#### Raw Webpack

Configure your webpack to handle sass files.

Inside the resolve directive setup your webpack to use modules from the folder where you put the `_variables.sass` file

```javascript
{
  // ...
  resolve: {
    modules: ['node_modules', 'src'],
    // ...
  }
}
```

#### CRA

Install node-sass to enable the sass compiles on your project.

After that update your scripts in the `package.json` to add the folder to your path

```
"scripts": {
  "start": "NODE_PATH=./src react-scripts start",
  "build": "NODE_PATH=./src react-scripts build",
  "test": "NODE_PATH=./src react-scripts test",
  ...
}
```

where `./src` its the folder where you put your `_variables.sass`

#### Gatsby

Follow the [instructions](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/) to enable Sass compiling in project, and configure the sass plugin to include the path where you put the `_variables.sass` file, for example:

```javascript
plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src"],
      },
    }
    ...
]
```

#### Next.js

Follow the [instructions](https://github.com/zeit/next-plugins/tree/master/packages/next-sass) to enable sass in the project. You will also need to configure the transpiled modules plugin `next-plugin-transpile-modules` so install it `npm i --save-dev next-plugin-transpile-modules`.

Now on your `next.config.js` configure yout sass to include the directory where you put your `_variables.sass` file and add `react-bulma-components` to the transpiled modules

```javascript
const withSass = require('@zeit/next-sass');
const withTM = require('next-plugin-transpile-modules');

module.exports = withTM(
  withSass({
    transpileModules: ['react-bulma-components'],
    sassLoaderOptions: {
      includePaths: ['./src']
    }
  })
);
```

### Documentation

You can find the documentation in https://helmuthdu.github.io/react-bulma-components

Each component imports their own sass file. Thus, you can reduce your css total file size by only including the styles that you will use. To enable this, please configure your [Webpack](https://webpack.github.io/) to handle sass files. You can use the webpack.config.js on the root folder of this repository.

Some components may vary the api/naming convention with the Bulma Docs. Please refer to each stories in the Storybook to see how each component could be used (you can find the source code of the story on the tab `Story` on the bottom panel

The following components were ported:

| Component    | Storybook                                                                              | Bulma docs                                                    |
| ------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Box          | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Box)          | [Docs](http://bulma.io/documentation/elements/box/)           |
| Breadcrumb   | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Breadcrumb)   | [Docs](http://bulma.io/documentation/components/breadcrumb/)  |
| Button       | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Button)       | [Docs](http://bulma.io/documentation/elements/button/)        |
| Card         | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Card)         | [Docs](http://bulma.io/documentation/components/card/)        |
| Column       | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Columns)      | [Docs](http://bulma.io/documentation/columns/basics/)         |
| Container    | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Container)    | [Docs](http://bulma.io/documentation/layout/container/)       |
| Content      | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Content)      | [Docs](http://bulma.io/documentation/elements/content/)       |
| Dropdown     | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Dropdown)     | [Docs](http://bulma.io/documentation/components/dropdown/)    |
| Footer       | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Footer)       | [Docs](http://bulma.io/documentation/layout/footer/)          |
| Form         | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Form)         | [Docs](http://bulma.io/documentation/form/general/)           |
| Heading      | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Heading)      | [Docs](http://bulma.io/documentation/elements/title/)         |
| Hero         | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Hero)         | [Docs](http://bulma.io/documentation/layout/hero/)            |
| Icon         | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Icon)         | [Docs](http://bulma.io/documentation/elements/icon/)          |
| Image        | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Image)        | [Docs](http://bulma.io/documentation/elements/image/)         |
| Level        | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Level)        | [Docs](http://bulma.io/documentation/layout/level/)           |
| Loader       | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Loader)       | --                                                            |
| Media        | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Media)        | [Docs](http://bulma.io/documentation/layout/media-object/)    |
| Message      | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Message)      | [Docs](http://bulma.io/documentation/components/message/)     |
| Menu         | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Menu)         | [Docs](http://bulma.io/documentation/components/menu/)        |
| Modal        | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Modal)        | [Docs](http://bulma.io/documentation/components/modal/)       |
| Navbar       | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Navbar)       | [Docs](https://bulma.io/documentation/components/navbar/)     |
| Notification | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Notification) | [Docs](http://bulma.io/documentation/elements/notification/)  |
| Pagination   | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Pagination)   | [Docs](https://bulma.io/documentation/components/pagination/) |
| Panel        | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Panel)        | [Docs](https://bulma.io/documentation/components/panel/)      |
| Progress     | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Progress)     | [Docs](http://bulma.io/documentation/elements/progress/)      |
| Section      | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Section)      | [Docs](http://bulma.io/documentation/layout/section/)         |
| Tabs         | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Tabs)         | [Docs](https://bulma.io/documentation/components/tabs/)       |
| Table        | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Table)        | [Docs](http://bulma.io/documentation/elements/table/)         |
| Tag          | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Tag)          | [Docs](http://bulma.io/documentation/elements/tag/)           |
| Tile         | [Storybook](https://helmuthdu.github.io/react-bulma-components/?selectedKind=Tile)         | [Docs](http://bulma.io/documentation/layout/tiles/)           |
