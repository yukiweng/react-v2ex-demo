import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import countTime from "./countTime";
import {homeTabs} from './tabs'
import getData from "./getData";

const Wrapper=styled.div`
    max-width:60%;
    margin:20px auto;
    font-size:14px;
    background:#fff;
    box-shadow:0 5px 5px rgba(0,0,0,0.1);
    border-radius:4px;
    & li{
        list-style:none;
    }
`
const Nav=styled.div`
    &>ul{
        display:flex;
        flex-wrap:wrap;
        padding:0.8em;
        &>li{
            flex-shrink:0;
            cursor:pointer;
            padding:0.2em 0.5em;
            margin-right:0.2em;
            color:#666;
            &.active{
                background:#334;
                color:#eee;
                border-radius:4px;
            }
        }
    }
    &>div>ul{
        display:flex;
        flex-wrap:wrap;
        padding:0.8em;
        background:#eee;
        &>li{
            flex-shrink:0;
            cursor:pointer;
            padding:0.2em 0.5em;
            margin-right:0.2em;
            color:#666;
            &:hover{
                text-decoration:underline;
            }
        }
    }
    
`
const List=styled.ul`
    display:block;
    &>li{
        padding:1em 0.8em;
        display:flex;
        align-items:center;
        border-top:1px solid #eee;
        &>img{
            width:48px;
            height:48px;
            flex-shrink:0
        }
        &>div{
            margin-left:1em;
            max-width:90%;
        }
        &>span{
            display:inline-flex;
            justify-content:center;
            width:3em;
            background:#778087;
            border-radius:10px;
            font-size:10px;
            color:white;
            font-weight:bold;
            margin-left:auto;
            &:last-child{
                width:3em;
            }
        }
    }
`
const LiTitle=styled.div`
    font-size:16px;
    color:#666;
    padding-bottom:0.5em;
    &>a{
        color:#666;
    }
`
const LiMsg=styled.div`
    &>span{
        margin-right:0.5em;
        color:#999;
        font-size:12px;
        &:first-child{
            background:#eee;
            padding:0.2em 0.4em;
            border-radius:4px;
        }
        &>a{
            color:#666;
            font-weight:bold;
            &:active{
                color:#666;
            }
        }
    }
`

class PosList extends React.Component{
    constructor(){
        super()
        this.state={
            dataList:[],
            tabs:[...homeTabs,{key:'hot',value:'hot',name:'最热'},{key:'all',value:'latest',name:'全部'}],
            selected:'tech',
            source:null
        }
    }
    render() {
        return(
            <Wrapper>
                    <Nav>
                        <ul>
                            {this.state.tabs.map((tab)=>{
                                return (
                                    <li key={tab.key} onClick={()=>this.beginToGetData(tab)} className={tab.key===this.state.selected?'active':''}>{tab.name}</li>
                                )
                            })}
                        </ul>
                        {this.state.tabs.map((tab,index)=>{
                            return (
                                <div key={index}>{tab.key===this.state.selected&&typeof tab.value==='object'?this.addLi(tab.value):''}</div>
                            )
                        })}
                    </Nav>
                <List>
                    {this.state.dataList.map((data)=>{
                        return(
                            <li key={data.id}>
                                <img src={data.member.avatar_large} alt=""/>
                                <div>
                                    <LiTitle>
                                        <Link to={{pathname:'/article',query:{id:data.id,tab:data.node.title}}}>
                                        {data.title}
                                        </Link>
                                    </LiTitle>
                                    <LiMsg>
                                        <span>{data.node.title}</span>
                                        <span>•<Link to={`/userInfo/${data.member.username}`}>{data.member.username}</Link></span>
                                        <span>•{countTime(data.last_touched)}</span>
                                        <span>• 最后回复来自 <Link to={`/userInfo/${data.last_reply_by}`}>{data.last_reply_by}</Link></span>
                                    </LiMsg>
                                </div>
                                <span>
                                    {data.replies}
                                </span>
                            </li>
                        )
                    })}
                </List>
            </Wrapper>
        )
    }
    addLi(arr){
        return (
            <ul>
            {arr.map((tab)=>{
                    return (
                        <li key={tab.key}>{tab.name}</li>
                    )
                })}
            </ul>
        )
    }
    beginToGetData(tab){
        let fn=(data,source)=>{this.setState({...this.state,dataList:data,selected:tab.key,source:source});}
        getData(tab.value,fn)
    }
    componentDidMount() {
        this.beginToGetData({key:'hot',value:'hot'})
    }
    componentWillUnmount() {
        this.state.source.cancel()
    }
}

export default PosList;