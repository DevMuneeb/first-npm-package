import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Thing />
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
