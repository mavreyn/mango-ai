import { useState } from "react";

export default function RenderButton(props) {
    function handleClicked() {
        const request = new Promise((resolve, reject) => {
            fetch("https://cat-fact.herokuapp.com/facts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                // Resolve the outer promise with the fetched data
                resolve(data);
            })
            .catch(error => {
                console.log(error);
                // Reject the outer promise with the error
                reject(error);
            });
        });

        console.log(request);

        // Don't stringify the promise, but rather handle it when it resolves
        request
            .then(data => {
                // Handle the resolved data
                props.changeText(JSON.stringify(data));
                console.log('gets to here');
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
    }

    return (
        <button onClick={handleClicked}>Render</button>
    );
}
