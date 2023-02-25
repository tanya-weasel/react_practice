import React from "react";
import { useEffect, useState } from "react";

const UseEffectUseState = () => {
    //first you create the objects you want to work with statement management
    //useState

    const [name, setName] = useState("");
    const [comment, setcomment] = useState("");

    //you update changes with use effect
    //useEffect

    function clearEverything()
    {
        setName("");
    }

    useEffect (() => {

        console.log(name);
        if(name.length === 0)
        {
            console.log(`name is empty`);
            setcomment(`name is empty. please type something`);
        }

        else

        {
            console.log(`name is ${name}`);
            if(name === "Harry Potter")
            {
                setcomment(`${name} has freed Dobby!`);
            }
            else if(name === "Severus Snape")
            {
                setcomment(`${name} is the head of Slytherin House.`);
            }
            else
            {
                setcomment(`${name} is not important.`);
            }
        }
    }, [name,comment]);


    //rendering stuff
    const stuff = (

            <div>
                <div className="container-fluid text-center">
                <h1>Type a name and see the comment that appears</h1>
                <div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="type a name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}/>
                </div>
                <div>
                    <h2>{comment}</h2>
                </div>
                <div>
                    <button
                    type="button"
                    className="btn btn-primary m-2"
                    onClick={clearEverything}>
                    Clear input
                    </button>

                    <button
                    type="button"
                    className="btn btn-info m-2"
                    onClick={() => setName("Harry Potter")}>
                    Set name to Harry Potter
                    </button>
                </div>
                </div>
            </div>
    );

    return stuff;

}

export default UseEffectUseState;