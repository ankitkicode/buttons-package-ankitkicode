# buttons-package-ankitkicode
[![npm version](https://img.shields.io/npm/v/buttons-package-ankitkicode)](https://www.npmjs.com/package/buttons-package-ankitkicode)



A customizable button with CSS animations, created using CSS-in-JS.

## Installation

To install the package, run:

```sh
npm install buttons-package-ankitkicode
```

## Usage

Here's how to use the Button component in a React project:

1. Import the Button Component

Import the Button component from the package:

```js
import Button from 'buttons-package-ankitkicode';
```

2. Use the Button Component

Use the Button component in your React JSX. Customize the button's text and animation speed via props:

```js
import Button from 'buttons-package-ankitkicode';

const App = () => {
    return (
        <div>
            <Button text="Go" speed={1000} />
        </div>
    );
};
```

## Props
The Button component accepts the following props:

--text (string): The text to display inside the button. Required.
--speed (number): The speed of the progress animation in milliseconds. Required.

## License
This package is licensed under the ISC License. See the LICENSE file for more details

## Author
Ankit Jatav
Feel free to reach out if you have any questions or need further assistance!
