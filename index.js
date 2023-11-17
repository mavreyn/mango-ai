const express = require('express')
import OpenAI from 'openai'

const app = express()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    timeout: 60 * 1000,
})


app.use(express.static(`${__dirname}/../MangoAI/`))

const port = 5000

//Chat gpt things

const key='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'




//Chat completion is an asynchronous function that needs to send the input to the ai model server and return it
async function createChatCompletion(input) {

    const completion = await openai.chat.completions.create({
        messages: [{role: "user", content: input}],
        model: "ft:gpt-3.5-turbo-0613:mavreyn::8BrSnZb7", //use the other model that we have created for the project
    }).then(completedTextOutput => {
        return completedTextOutput.choices[0]
    }).catch(err => {
        console.log(`Error in creating response to text "${input}"`)
    })


}


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.post('/api', async (req, res) => {
    console.log('request sent to backend')
    /*************************************************************
     * 
     * This is where the magic happens
     * 
     * receive the user input in the form of a class text = {userInput: 'the string'}
     * 
     * use the chatgpt api to take in the input and put out the desired output and send it as a class response {aiPrompt: 'returned string'}
     * 
    **************************************************************/

    let userInput = req.body.prompt

    let completedOutput = await gptFunction.createChatCompletion(userInput).then(completed => {
        res.send(completed)
    })

    

    
})
