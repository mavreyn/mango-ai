import OpenAI from 'openai';

const key = process.env.OPENAI_API_KEY;

/*

WHAT WE ACTUALLY WANT

GET INPUT FROM FRONTEND
FUNCTION THAT CONVERTS IT USING OUR MODEL
SEND BACK TO FRONTEND

*/

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 60 * 1000,
});


async function doSomething(input) {

    const completion = await openai.chat.completions.create({
        messages: [{role: "user", content: input}],
        model: "gpt-3.5-turbo", //use the other model that we have created for the project
        stream: true,
    });

    for await (const part of stream) {
        process.stdout.write(part.choices[0]?.delta?.content || '');
    }

}

exports.doSomething = doSomething;


