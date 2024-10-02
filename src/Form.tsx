import './App.css'
import { useForm, SubmitHandler } from "react-hook-form";
import renderFields from './Renderer';
import { Button, Flex, Heading, Text } from '@radix-ui/themes';
import { useJson } from './JsonProvider';
import { ChevronDownIcon } from '@radix-ui/react-icons';

type Inputs = {
  [key: string]: any;
};
import * as Accordion from '@radix-ui/react-accordion';
import { useState } from 'react';

export default function Form() {
  const [output, setOutput] = useState('No output')
  const { json } = useJson()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setOutput(JSON.stringify(data, null, 2))
  };

  const handleReset = () => {
    reset()
  }

  return (
    <Flex className='flex flex-col box h-[600px] overflow-auto px-[100px] py-[50px] w-[600px]'>
      <Flex className='flex-col justify-start pb-4'>
        <Heading>{json.title}</Heading>
        <Text>{json.subtitle}</Text>
      </Flex>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
        {json.fields.map((field) => (
          <div key={field.name}>
            {renderFields({ field, register })}
            {errors[field.name] && <span className='text-red-400'>Format is not correct or field is required.</span>}
          </div>
        ))}
        <Flex className='gap-4'>
          <Button
            className='bg-black px-4 py-2 text-lg rounded-6 font-bold text-white cursor-pointer'
            onClick={handleReset}
            type="button"

          > Clear Form
          </Button>
          <Button className='bg-black px-4 py-2 text-lg rounded-6 font-bold text-white ' type="submit" > Submit</Button>
        </Flex>

      </form>
      <Flex>
        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
          <Accordion.Item className="AccordionItem" value="item-1">
            <Accordion.AccordionTrigger >
              <div className='flex flex-row'>
                Output
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </div>
            </Accordion.AccordionTrigger>
            <Accordion.AccordionContent>{output}</Accordion.AccordionContent>
          </Accordion.Item>
        </Accordion.Root>

      </Flex>

    </Flex>
  );
}



