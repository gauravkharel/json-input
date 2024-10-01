import { Heading, Text } from "@radix-ui/themes";

const HelloGuide = () => {
    return (
        <div className=" box p-6 flex flex-col justify-center align-middle">
            <pre style={{ fontFamily: 'Space Mono' }}>
                <Heading>Hi, paste the JSON sample below</Heading>
                <Text>To the input on the side.</Text> <br/>
                <Text>You can see the form you pasted. </Text>
            </pre>
        </div>
    );
};

export default HelloGuide;