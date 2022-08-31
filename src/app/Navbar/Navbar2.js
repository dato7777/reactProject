import React, { useRef, useState, useEffect, createRef, StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { gsap } from "gsap";
import {  Link} from "react-router-dom";
import './Navbar2.css';
import { selectLogged,signOut,selectToken,  } from '../pages/LoginSlice'
import App from '../../App';
import {} from '../pages/Login'
import { useSelector, useDispatch } from 'react-redux';

{/* items */ }
const Navbar2 = () => {
    const logged1 = useSelector(selectLogged)
    const token = useSelector(selectToken)
    const dispatch = useDispatch();
    
    const navItems = [
        {
            name: "Home",
            color: "#f44336",
            NavLink: "/",
        },
        {
            name: "About",
            color: "#e91e63",
            NavLink: "/about",
            // myAction:"#"
        },
        {
            name: "Categories",
            color: "#9c27b0",
            NavLink: "/categories",
            // myAction:"#"
        },
        {
            name: "Jacob's Specials",
            color: "#673ab7",
            NavLink: "#",
            // myAction:"#"
        },
        logged1 ?
            {
                name: "Logout",
                color: "#f44336",
                NavLink: "/login",
                // myAction: signOut()
            } :
            
            {
                name: "Sign In",
                color: "#ffeb2b",
                NavLink: "/login",
                // myAction:"#"
                
            }
    ];
    
    <App data={navItems} />
    const $root = useRef()
    const $indicator1 = useRef()
    const $indicator2 = useRef()
    const $items = useRef(navItems.map(createRef))
    const [active, setActive] = useState(0)
    const animate = () => {
        const menuOffset = $root.current.getBoundingClientRect()
        const activeItem = $items.current[active].current
        const { width, height, top, left } = activeItem.getBoundingClientRect()

        const settings = {
            x: left - menuOffset.x,
            y: top - menuOffset.y,
            width: width,
            height: height,
            backgroundColor: navItems[active].color,
            ease: 'elastic.out(.7, .7)',
            duration: .8
        }

        gsap.to($indicator1.current, {
            ...settings,
        })

        gsap.to($indicator2.current, {
            ...settings,
            duration: 1
        })
    }
    useEffect(() => {
        animate()
        window.addEventListener('resize', animate)

        return (() => {
            window.removeEventListener('resize', animate)
        })
    }, [active])

    return (
        
        <div ref={$root} className="menu" >
            {navItems.map((item, index) => (
                <div>
                    <Link key={item.name}  onMouseEnter={() => {
                        setActive(index)
                    }}
                    ref={$items.current[index]}  
                    // onClick={()=>dispatch(item.myAction)}
                    className={`item ${active === index ? 'active' : ''}`} 
                    to ={item.NavLink} > 
                    {item.name}</Link>
                </div>
            ))}
            
            <div
                ref={$indicator1}
                className="indicator"
            />
            <div
                ref={$indicator2}
                className="indicator"
            />

        </div>
    )

}
export default Navbar2;







