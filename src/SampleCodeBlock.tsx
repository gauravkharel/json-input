import { Box, Flex, Grid, Text } from '@radix-ui/themes';
import { FiCopy } from 'react-icons/fi';
import jjson from './schema2.json'
import json2 from './schema3.json'
import json3 from './schema4.json'
import { useJson } from './JsonProvider';


const sampleblock = [
    { name: 'Sample JSON 1', sample: jjson, bg: 'bg-cyan-100' },
    { name: 'Sample JSON 2',sample: json2, bg: 'bg-pink-100' },
    { name: 'Sample JSON 3',sample: json3, bg: 'bg-gray-100' },
]

const SampleDataComponent = () => {
    const { setJson } = useJson()
    const handleCopy = (data: string) => {
        setJson(JSON.parse(data))
        navigator.clipboard.writeText(data);
    };
    return (
        <Grid className='pt-10'>
            <Flex className='gap-4'>
                {sampleblock.map(block => {
                    return (
                        <Box key={block.name} className={`p-3 box w-[400px] h-[300px] ${block.bg}`} >
                            <Flex className='justify-between'>
                                <Text>{block.name}</Text>
                                <FiCopy onClick={() => handleCopy(JSON.stringify(block.sample, null, 2))} />
                            </Flex>

                            <pre style={{ fontFamily: 'Space Mono' }}>
                                {JSON.stringify(block.sample, null, 1)}
                            </pre>
                        </Box>
                    )
                })}


            </Flex>
        </Grid>
    );
};

export default SampleDataComponent;