import React from "react";
import { useState } from "react";
import { setLocalStorage } from "../../utils/localstorage";

const Header = (props,{data}) => {
    
    // const [username, setUsername] = useState('');
    // if(!data){
    //     setUsername('Admin')
    // }else{
    //     setUsername(data.first_name)
    // }

    const logOutUser = () => {
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // window.location.reload()

    }

    return (
        <div className='bg-transparent flex items-end justify-between'>
            <h1 className="text-2xl bg-transparent font-medium">Hello<br/> <span className="text-3xl bg-transparent">User</span> 👋 </h1>
            <button onClick={logOutUser} className="bg-red-600 text-lg font-medium text-white rounded-xl p-2">Log Out</button>
        </div>
    )
}

export default Header