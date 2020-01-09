import React from "react";
import styled from 'styled-components'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'
import {Link} from 'react-router-dom'
import countTime from "./countTime";
import Replies from "./replies";

const Wrapper=styled.div`
    max-width:60%;
    margin:auto;
    &>*{
        background:#fff;
    }
    &>div:first-child{
        padding:1em;
        margin-top:20px;
        display:flex;
        border-top-left-radius:4px;
        border-top-right-radius:4px;
        >img{
            width:80px;
            height:80px;
            margin-left:auto;
        }
    }
    & a{
        color:#666;
        &:hover{
            text-decoration:underline;
        }
    }
`
const Title=styled.div`
    font-size:24px;
    padding:0.5em 0;
`
const Msg=styled.div`
    display:flex;
    &>span{
        color:#666;
        font-size:14px;
        margin-right:1em;
    }
`
const Content=styled.div`
    border-top:1px solid #eee;
    border-bottom-left-radius:4px;
    border-bottom-right-radius:4px;
    margin-bottom:20px;
    padding:1em;
    font-size:14px;
    box-shadow:0 5px 5px rgba(0,0,0,0.1);
`

class Article extends React.Component{
    constructor(){
        super()
        this.state= {
            isLoading:true,
            dataList: {},
            source:null
        }
    }
    render(){
        return (
            <div>
            {
                this.state.isLoading
                    ?''
                    :<Wrapper>
                        <div>
                            <div>
                                <span>V2EX > </span>
                                <span>{this.state.dataList.node.title}</span>
                                <Title>{this.state.dataList.title}</Title>
                                <Msg>
                                    <span><Link to={`/userinfo/${this.state.dataList.member.username}`}>{this.state.dataList.member.username}</Link></span>
                                    <span>• {countTime(this.state.dataList.created)}</span>
                                    <span>• {this.state.dataList.node.stars}次点击</span>
                                </Msg>
                            </div>
                            <img src={this.state.dataList.member.avatar_large} alt=""/>
                        </div>
                        <Content className="markdown-body"><ReactMarkdown source={this.state.dataList.content} /></Content>
                        <Replies id={this.getId.bind(this)()} last_touched={this.state.dataList.last_touched} count={this.state.dataList.replies}/>
                    </Wrapper>}
            </div>
        )
    }
    getData(){
        let Id=this.getId()
        let source=axios.CancelToken.source()
        axios.get('/api/topics/show.json',{
            params:{
                id:Id
            },
            cancelToken:source.token
        }).then((res)=>{
            this.setState({
                isLoading:false,
                dataList:res.data[0],
                source:source
            })
            window.location.hash=`/${Id}`
        }).catch(()=>{})
    }
    getId(){
        let {location}=this.props
        let Id
        if(location.query&&location.query.id){
            Id=location.query.id
            sessionStorage.setItem('id',Id);
        }else{
            Id=sessionStorage.getItem('id');
        }
        return Id
    }
    componentDidMount() {
        this.getData()
    }
    componentWillUnmount() {
        this.state.source.cancel()
    }
}
export default Article;