import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import countTime from "./countTime";
import axios from "axios";

const Wrapper=styled.div`
    box-shadow:0 5px 5px rgba(0,0,0,0.1);
`
const List=styled.ul`
    list-style:none;
    display:block;
    &>li{
        padding:0.8em;
        display:flex;
        align-items:center;
        border-top:1px solid #eee;
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

class UserCreatedTopics extends React.Component{
    constructor(){
        super()
        this.state={
            dataList:[],
            isLoading:true,
            source:null
        }
    }
    render() {
        return(
            <div>
                {this.state.isLoading
                    ?''
                    : <Wrapper>
                        <List>
                            {this.state.dataList.map((data)=>{
                                if((this.props.selectedArr&&this.props.selectedArr.indexOf(data.node.name)>=0)||!this.props.selected)
                                    return(
                                        <li key={data.id}>
                                            <div>
                                                <LiTitle>
                                                    <Link to={{pathname:'/article',query:{id:data.id,tab:data.node.title}}}>
                                                        {data.title}
                                                    </Link>
                                                </LiTitle>
                                                <LiMsg>
                                                    <span>{data.node.title}</span>
                                                    <span>•<a href="#">{data.member.username}</a></span>
                                                    <span>•{countTime(data.last_touched)}</span>
                                                    <span>• 最后回复来自 <Link to={`/userinfo/${data.last_reply_by}`}>{data.last_reply_by}</Link></span>
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
                }
            </div>
        )
    }
    getData(){
        let username=this.props.username
        let source=axios.CancelToken.source()
        axios.get('/api/topics/show.json',{
            params:{
                username:username
            },
            CancelToken:source.token
        }).then((res)=>{
            if(res.data.length!==0){
                this.setState({
                    ...this.state,
                    dataList:res.data,
                    isLoading:false,
                    source:source
                })
            }
        }).catch(()=>{})
    }
    componentDidMount() {
        this.getData()
    }
    componentWillUnmount() {
        this.state.source.cancel()
    }
}

export default (props)=><UserCreatedTopics {...props} key={props.username} />