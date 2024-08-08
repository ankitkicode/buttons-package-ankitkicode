# buttons-package-ankitkicode
[![npm version](https://img.shields.io/npm/v/buttons-package-ankitkicode)](https://www.npmjs.com/package/buttons-package-ankitkicode)



A customizable button with CSS animations, created using CSS-in-JS.

## Installation

To install the package, run:

```sh
npm install buttons-package-ankitkicode
```

## Usage- Button 1

Here's how to use the Button component in a React project:

1. Import the Button Component

Import the Button component from the package:

```js
import {Button} from 'buttons-package-ankitkicode';
```

2. Use the Button Component

Use the Button component in your React JSX. Customize the button's text and animation speed via props:

```js
import {Button} from 'buttons-package-ankitkicode';

const App = () => {
    return (
        <div>
            <Button text="Go" speed={1000} />
        </div>
    );
};
```


## TextCircleButton

Here's how to use the Button component in a React project:

1. Import the Button Component

Import the Button component from the package:

```js
import { TextCircleButton } from 'buttons-package-ankitkicode';
```

2. Use the Button Component

Use the Button component in your React JSX. Customize the button's text and animation speed via props:

```js

import {TextCircleButton } from 'buttons-package-ankitkicode';

const App = () => {
  return (
    <div>
      <TextCircleButton text="Write Text Here.." />
    </div>
  )
}

export default App

```

## Props

### Button Component

| Prop Name | Type   | Description                                       | Required |
|-----------|--------|---------------------------------------------------|----------|
| `text`    | string | The text to display inside the button.            | Yes      |
| `speed`   | number | The speed of the progress animation in milliseconds. | Yes      |

### TextCircleButton Component

| Prop Name   | Type   | Description                                         | Required |
|-------------|--------|-----------------------------------------------------|----------|
| `text`      | string | The text to display inside the button.              | Yes      |
| `direction` | string | The direction of the text animation inside the button. | No       |

Note:- direction is string (normal/reverse) use it.


## License
This package is licensed under the ISC License. See the LICENSE file for more details

## Author
Ankit Jatav
Feel free to reach out if you have any questions or need further assistance!
