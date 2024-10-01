import Form from './Form';
import '@radix-ui/themes/styles.css';
import { Flex, Grid } from '@radix-ui/themes';
import JsonInput from './JsonInput';
import { JsonProvider } from './JsonProvider';
import SampleDataComponent from './SampleCodeBlock';
import HelloGuide from './HelloGuide';
import "@fontsource/space-mono"; // Defaults to weight 400
import "@fontsource/space-mono/400-italic.css"; // Specify weight and style
import "@fontsource/space-mono/400.css"; // Specify weight

const App = () => {
  return (
    <JsonProvider>
      <Grid className='gap-4 pt-3'>
        <Flex gap="3" className='justify-center'>
          <HelloGuide />
          <JsonInput />
          <Form />
        </Flex>
        <Flex className='justify-center'>
          <SampleDataComponent />
        </Flex>
      </Grid>
    </JsonProvider>
  );
};

export default App;