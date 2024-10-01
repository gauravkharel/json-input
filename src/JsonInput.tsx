import React, { useState } from 'react';
import { useJson } from './JsonProvider';

const JsonInput: React.FC = () => {
    const [jsonValue, setJsonValue] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const { setJson } = useJson();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const parsed = JSON.parse(jsonValue);
            setJson(parsed)
            setError(null);
            console.log(typeof (parsed), parsed);
        } catch (err) {
            setError('Invalid JSON format. Please check your input.');
        }
    }

    function handleJsonChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setJsonValue(e.target.value);
    }

    return (
    <div className="box px-8 py-10">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <textarea
                    name="json"
                    value={jsonValue}
                    onChange={handleJsonChange}
                    className="p-8"
                    rows={15}
                    cols={40}
                    placeholder="Enter your form JSON input here"
                />
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <div className="flex gap-4 mt-4">
                    <button className='bt-mine' 
                    type="reset" onClick={() => {
                        setJsonValue('');
                        setError(null)
                    }}>
                        Reset edits
                    </button>
                    <button className='bt-mine' type="submit">Generate form</button>
                </div>
            </form>

        </div>
    );
};

export default JsonInput;
