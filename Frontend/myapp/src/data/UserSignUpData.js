import React, { useEffect, useState } from 'react';

const UserSignUpData = () => {

    // const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);


    const [signInData, setSignInData] = useState([]);


    const birthday = () => {
        // alert("Happy New Year");
        const getUserSignInData = localStorage.getItem("SignInData");

        if(getUserSignInData.length){
            const user = JSON.parse(getUserSignInData);
            // console.log(user);

            setSignInData(user);

            const userbirth = signInData.map((el, k)=>{
                return el.date === today;
            })

            if(userbirth){
                setTimeout(()=>{
                    console.log("Happy Birthday!");
                }, 3000);
            }
        }
    }

    useEffect(()=>{
        birthday();
    }, []);

  return (
    <div>
        {
            signInData.length === 0 ? "error" :
            <>
                <h1>Happy Birthday!!</h1>
            </> 

        }
        
    </div>
  )
}

export default UserSignUpData;