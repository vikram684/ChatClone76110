import React from "react";
import axios from 'axios';

export default function login()
{
  var name1 = 1;
    axios.get('http://localhost:8000/api/testlog')
      .then(function (response) {
        const myObj = response.data;

        console.log(myObj[0].name);
        name1 = myObj[0].name;
        
      })
      .catch(function (error) {
        console.log(error);
      });  

    return(
        <div className="row">
            <div className="col-xl-3">
                <p > Name : { name1 }</p>
                <p > Class : </p>
            </div>
        </div>
    );
}