import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper=styled.div`
    width:100vw;
    height:40px;
    display:flex;
    justify-content:space-around;
    background:#fff;
    box-shadow:0 5px 5px rgba(0,0,0,0.1);
    & a{
        color:inherit;
    }
`
const Logo=styled.div`
    display:flex;
    align-items:center;
    font-size:28px;
    font-weight:1000;
    font-family:helvetica neue,luxi sans,dejavu sans,segoe ui,hiragino sans gb,microsoft yahei,sans-serif;
    `
const Ul=styled.ul`
    display:flex;
    justify-content:center;
    align-items:center;
    &>li{
        list-style:none;
        padding:0.5em;
        color:#666;
        &:hover{
            color:#999;
            cursor:pointer;
        }
    }
`
function Header(){
    return(
        <Wrapper>
            <Logo><Link to={'/'}>V2EX</Link></Logo>
            <Ul>
                <li><Link to={'/'}>首页</Link></li>
                <li>登录</li>
                <li>注册</li>
            </Ul>
        </Wrapper>
    )
}

export default Header