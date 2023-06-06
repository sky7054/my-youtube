import React from "react";
import Button from "./Button";

const ButtonList = () => {

    return(
        <div className="flex">
            <Button name = "All"/>
            <Button name = "Live"/>
            <Button name = "News"/>
            <Button name = "Songs"/>
            <Button name = "Movies"/>
            <Button name = "Sports"/>
            <Button name = "Animes"/>
            <Button name = "Funny"/>
            <Button name = "Comedy"/>
            <Button name = "Documentry"/>
            <Button name = "Design"/>
        </div>
    );
};

export default ButtonList;