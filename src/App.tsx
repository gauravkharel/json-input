import Form from './Form';
import '@radix-ui/themes/styles.css';
import { Flex } from '@radix-ui/themes';
import JsonInput from './JsonInput';
import { JsonProvider } from './JsonProvider';

const App = () => {
  return (
    <JsonProvider>
      <Flex gap="3">
        <JsonInput />
        <Form />
      </Flex>
    </JsonProvider>
  );
};

export default App;