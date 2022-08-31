import React, { useState } from 'react'
import 'animate.css';
import '../Styles/Login.css'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signInAsync, signOut, selectEmail, selectUserName, selectToken, signUpAsync, selectLogged } from './LoginSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const notifyCreated = () => toast.success(`User ${newUserName} created! Proceed with Login!`,{
        id:1,
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined});

    const notifyLogged = () => toast.success("Welcome, $`{newUserName}`",{
        id:2,
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined});

    const dispatch = useDispatch();
    const email = useSelector(selectEmail);
    const userName = useSelector(selectUserName);
    const token = useSelector(selectToken);
    const [newUserName, setNewUserName] = useState(userName)
    const [newPwd, setNewPwd] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [staff, setStaff] = useState(false)
    const logged1 = useSelector(selectLogged)
    const clean = (state) => {
        setNewUserName("")
        setNewPwd("")
    }
    function cambiar_login() {

        document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
        document.querySelector('.cont_form_login').style.display = "block";
        document.querySelector('.cont_form_sign_up').style.opacity = "0";

        setTimeout(function () { document.querySelector('.cont_form_login').style.opacity = "1"; }, 400);

        setTimeout(function () {
            document.querySelector('.cont_form_sign_up').style.display = "none";
        }, 200);
    }

    function cambiar_sign_up(at) {
        document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
        document.querySelector('.cont_form_sign_up').style.display = "block";
        document.querySelector('.cont_form_login').style.opacity = "0";

        setTimeout(function () {
            document.querySelector('.cont_form_sign_up').style.opacity = "1";
        }, 100);

        setTimeout(function () {
            document.querySelector('.cont_form_login').style.display = "none";
        }, 400);


    }

    function ocultar_login_sign_up() {

        document.querySelector('.cont_forms').className = "cont_forms";
        document.querySelector('.cont_form_sign_up').style.opacity = "0";
        document.querySelector('.cont_form_login').style.opacity = "0";

        setTimeout(function () {
            document.querySelector('.cont_form_sign_up').style.display = "none";
            document.querySelector('.cont_form_login').style.display = "none";
        }, 500);

    }
    if (logged1 === false) {
        return (
            
            
        <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} className="animate__animated animate__bounceInDown">
                <div className="cotn_principal">
                    <div className="cont_centrar">

                        <div className="cont_login">
                            <div className="cont_info_log_sign_up">
                                <div className="col_md_login">
                                    <div className="cont_ba_opcitiy">

                                        <h2>LOGIN</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <button className="btn_login" onClick={cambiar_login}>SIGN IN</button>
                                    </div>
                                </div>
                                <div className="col_md_sign_up">
                                    <div className="cont_ba_opcitiy">
                                        <h2>SIGN UP</h2>


                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                        <button className="btn_sign_up" onClick={cambiar_sign_up}>SIGN UP</button>
                                    </div>
                                </div>
                            </div>


                            <div className="cont_back_info">
                                <div className="cont_img_back_grey">
                                    <img src="https://www.ripplesnigeria.com/wp-content/uploads/2022/05/images-2022-05-02T144240.675.jpeg" alt="" />
                                </div>

                            </div>
                            <div className="cont_forms">
                                <div className="cont_img_back_">
                                    <img src="https://www.ripplesnigeria.com/wp-content/uploads/2022/05/images-2022-05-02T144240.675.jpeg" alt="" />
                                </div>
                                <div className="cont_form_login">
                                    <i className="material-icons">&#xE5C4;</i>
                                    <h2>SIGN IN</h2>
                                    <input type="text" placeholder="Username" value={newUserName} onChange={(e) => setNewUserName(e.target.value)}required />
                                    <input type="password" placeholder="Password" value={newPwd} onChange={(e) => setNewPwd(e.target.value)} required type={'password'}/>
                                    <Link to="/"> <button className="btn_login" onClick={() => dispatch(signInAsync({ username: newUserName, password: newPwd}),  logged1&& notifyLogged())  }>LOGIN</button> </Link>
                                    {/* <ToastContainer /> */}
                                </div>

                                <div className="cont_form_sign_up">
                                    <a href="#" onClick={ocultar_login_sign_up}><i className="material-icons">&#xE5C4;</i></a>
                                    <h2>SIGN UP</h2>
                                    {/* <input type="text" placeholder="Email" /> */}
                                    <input type="text" placeholder="Username" value={newUserName} onChange={(e) => setNewUserName(e.target.value)}/>
                                    {/* <input type="text" placeholder="address" /> */}
                                    <input type="password" placeholder="Password" value={newPwd} onChange={(e) => setNewPwd(e.target.value)} required type={'password'}/>
                                    {/* <input type="password" placeholder="Confirm Password" /> */}
                                    <Link to="#"><button className="btn_sign_up" onClick={() => dispatch(signUpAsync({ username: newUserName, password: newPwd }),clean(), newUserName.length>2&&  notifyCreated())}>SIGN UP</button></Link>
                                    {/* <ToastContainer /> */}
                                </div>
                                
                            </div>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
               
            </div>
            
        )}
        
    // return ( <div>Hello {newUserName} <br></br><hr></hr>user name: {newUserName}  email: {email}</div>

    // )
}
export default Login
{/* <button onClick={() => { dispatch(signOut()); clean() }}>Logout</button> */}