import React, {useState} from 'react';
import SignOptions from "../sign-options/sign-options";
import UserLogin from "../../pages/user_login/user_login";
import Register from "../../pages/register";

function AdminPage(props) {
    const [step, setStep] = useState("enter")

    let Content = () =>
        ({
            enter: <SignOptions setStep={setStep}/>,
            register: <Register/>,
            login: <UserLogin/>,
            phone:""
        }[step])

    return (
        <div>
            <Content/>
        </div>
    );
}

export default AdminPage;
