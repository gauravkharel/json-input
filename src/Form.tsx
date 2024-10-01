import './App.css'
import { useForm, SubmitHandler } from "react-hook-form";
import renderFields from './Renderer';
import { Flex, Heading, Text } from '@radix-ui/themes';
import { useJson } from './JsonProvider';
type Inputs = {
  [key: string]: any;
};

export default function Form() {
  const { json } = useJson()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Flex className='flex flex-col box px-[100px] py-[50px] w-[600px]'>
      <Flex className='flex-col justify-start'>
        <Heading>{json.title}</Heading>
        <Text>{json.subtitle}</Text>
      </Flex>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
        {json.fields.map((field) => (
          <div key={field.name}>
            {renderFields({ field, register })}
            {errors[field.name] && <span>This field is required</span>}
          </div>
        ))}
           <input className='bg-black px-4 py-2 text-lg rounded-6 font-bold text-white ' type="submit" /> 
      </form>
    </Flex>
  );
}
