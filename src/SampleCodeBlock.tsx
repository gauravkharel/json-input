import { Box, Flex, Grid, Text } from '@radix-ui/themes';
import { FiCopy } from 'react-icons/fi';
import jjson from './schema2.json'
import { useJson } from './JsonProvider';

const SampleDataComponent = () => {
    const {setJson} = useJson()
    const handleCopy = (data: string) => {
        setJson(JSON.parse(data))
        navigator.clipboard.writeText(data);
    };
    return (
        <Grid className='pt-10'>
            <Flex className='gap-4'>
                <Box className='p-3 box w-[400px] h-[300px] bg-cyan-100 ' >
                    <Flex className='justify-between'>
                        <Text>Sample JSON 1</Text>
                        <FiCopy onClick={() => handleCopy(JSON.stringify(jjson, null, 2))} />
                    </Flex>

                    <pre style={{ fontFamily: 'Space Mono' }}>
                        {JSON.stringify(jjson, null, 1)}
                    </pre>
                </Box>
                <Box className=' p-3 box w-[400px] h-[300px] bg-pink-100' >
                    <Flex className='justify-between'>
                        <Text>Sample JSON 2</Text>
                        <FiCopy onClick={() => handleCopy(JSON.stringify(jjson, null, 2))} />
                    </Flex>

                    <pre style={{ fontFamily: 'Space Mono' }}>
                        {JSON.stringify(jjson, null, 1)}
                    </pre>
                </Box>
                <Box className=' p-3 box w-[400px] h-[300px] bg-gray-100' >
                    <Flex className='justify-between'>
                        <Text>Sample JSON 3</Text>
                        <FiCopy onClick={() => handleCopy(JSON.stringify(jjson, null, 2))} />
                    </Flex>

                    <pre style={{ fontFamily: 'Space Mono' }}>
                        {JSON.stringify(jjson, null, 1)}
                    </pre>
                </Box>
            </Flex>
        </Grid>
    );
};

export default SampleDataComponent;