import React from "react";
import styled from 'styled-components'
import axios from 'axios'
import {Link} from 'react-router-dom'
import countTime from "./countTime"
import 'github-markdown-css'
import ReactMarkdown from "react-markdown";

const Wrapper=styled.div`
    box-shadow:0 5px 5px rgba(0,0,0,0.1);
    border-radius:4px;
    &>div{
        padding:0.5em 1em;
        &>span{
        color:#999;
        font-size:14px;
        margin-right:1em;    
    }
`
const Msg=styled.div`
    display:flex;
    &>span{
        color:#999;
        font-size:14px;
        margin-right:1em;
        &:first-child{
            color:#666;
            font-weight:bold;
        }
        &:last-child{
            display:inline-flex;
            justify-content:center;
            margin-left:auto;
            margin-right:0;
            background:#eee;
            border-radius:10px;
            width:2em;
            font-size:12px;
        }
    }
`

const Li=styled.li`
        list-style:none;
        padding:1em;
        display:flex;       
        border-top:1px solid #eee;     
        &>img{
            width:48px;
            height:48px;
            flex-shrink:0
        }
        &>div{
            margin-left:1em;
            width:100%;
            &>p{
                font-size:14px;
                padding:0.5em 0;
                width:90%;
                & a{    
                    color:#666;
                    &:hover{
                       text-decoration: underline;
                    }
                }
            }
        }     
`

export default class Replies extends React.Component{
    constructor(){
        super()
        this.state={
            dataList:[],
            source:null
        }
    }
    render(){
        return(
            <Wrapper>
                <div>
                    <span>{this.props.count} 回复</span>
                    <span>|</span>
                    <span>直到 {new Date(this.props.last_touched*1000).toLocaleString() }</span>
                </div>
                <ul>
                    {this.state.dataList.map((data,index)=>{
                        return (
                            <Li key={data.member.id+index}>
                                <img src={data.member.avatar_large} alt=""/>
                                <div>
                                    <Msg>
                                        <span><Link to={`/userinfo/${data.member.username}`}>{data.member.username}</Link></span>
                                        <span>{countTime(data.created)}</span>
                                        <span>{index+1}</span>
                                    </Msg>
                                    <div className="markdown-body"><ReactMarkdown source={data.content} /></div>
                                </div>
                            </Li>
                        )
                    })}
                </ul>
            </Wrapper>
        )
    }
    getData(){
        let topic_id=this.props.id
        let source=axios.CancelToken.source()
        axios.get('/api/replies/show.json',{
            params:{
                topic_id:topic_id
            },
            cancelToken:source.token
        }).then((res)=>{
            this.setState({
                isLoading:false,
                dataList:res.data,
                source:source
            })
        }).catch(()=>{})

    }
    componentDidMount() {
        this.getData()
    }
    componentWillUnmount() {
        this.state.source.cancel()
    }
}