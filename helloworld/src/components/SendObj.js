import React from "react";

import ReceiveObj from "./ReceiveObj";

const superHeroes = [

    {

        name: "Batman",

        age: 30,

        profession: "Super Hero",

        address: {

            city: "Gotham",

            state: "New York",

            country: "USA",

        },

    },

    {

        name: "Superman",


        age: 30,

        profession: "Super Hero",

        address: {

            city: "Metropolis",

            state: "New York",

            country: "USA",

        },

    },
]



const SendObj = () => (
    <div>
        <div className="container-fluid text-center">
            <h1>Hello There. This is Passing Objects</h1>
            <ReceiveObj Object1 = {superHeroes[0]}/>
            <hr></hr>
            <ReceiveObj Object1 = {superHeroes[1]}/>
            <hr></hr>
        </div>
    </div>
);

export default SendObj;