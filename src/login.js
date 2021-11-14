import React from "react";
import axios from 'axios';

export default function login()
{
    axios.get('http://localhost:8000/api/testlog')
      .then(function (response) {
        console.log('Return on APO');
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });  

    return(
        <div className="row">
            <div className="col-xl-3">
                <p>Name : </p>
                <p>Class : </p>
            </div>
        </div>
    );
}