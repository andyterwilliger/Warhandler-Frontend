import { useEffect, useState} from 'react';
import{ Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';

function Main(props){
    return(
        <div id = "div-container">
            <Index />

        </div>
    )
}
export default Main;