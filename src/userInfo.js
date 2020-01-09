import React from "react";
import styled from "styled-components";
import UserCreatedTopics from './userCreatedTopics'
import axios from 'axios'
import {userTopicTabs} from "./tabs";

const Wrapper=styled.div`
    max-width:60%;
    margin:20px auto 0; 
    &>*{
        background:#fff;
    }
    &>div:first-child{
        display:flex;
        align-items:center;
        padding:0.8em;
        box-shadow:0 5px 5px rgba(0,0,0,0.1);
        border-radius:4px;
        &>img{
            width:60px;
            height:60px;
        }
        &>div{
            padding:0 1em;
            &>span{
                display:block;
                :first-child{
                    font-weight:bold;
                    font-size:20px;
                }
                :last-child{
                     padding-top:0.5em;
                     color:#999;
                     font-size:14px;
                     margin-right:1em;
                }
            }
        }
    }
    &>div:last-child{
        border-bottom-left-radius:4px;
        border-bottom-right-radius:4px;
    }
`
const Nav=styled.nav`
    margin-top:20px;
    padding:0 0.5em;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    font-size:14px;
    color:#666;
    border-top-left-radius:4px;
    border-top-right-radius:4px;
    &>img{
        width:28px;
        height:28px;
        border-radius:50%;
        flex-shrink:0;
    }
    &>span{
        display:inline-block;
        padding:0.5em;
        margin:0 0.5em;
        cursor:pointer;
        flex-shrink:0;
        &.active{
            border-bottom:2px solid #666;
        }
    }
`
class UserInfo extends React.Component{
    constructor(){
        super()
        this.state={
            dataList:[],
            isLoading:true,
            tabs:userTopicTabs,
            selected:'',
            selectedArr:[],
            source:null
        }
    }
    changeSelected(newState=''){
        this.setState({
            ...this.state,
            selected:newState.key,
            selectedArr:newState.value
        })
        let hash
        if(newState.key){hash=newState.key}
        else{hash=''}
        window.location.hash=`/${hash}`
    }
    render() {
        return(
            <div>
            {this.state.isLoading&&this.state.dataList
                ?''
                : <Wrapper>
                        <div>
                            <img src={this.state.dataList.avatar_large} alt=""/>
                            <div>
                                <span>{this.state.dataList.username}</span>
                                <span>V2EX 第 {this.state.dataList.id} 号会员，加入于 {new Date(this.state.dataList.created*1000).toLocaleString()}</span>
                            </div>
                        </div>
                        <Nav>
                            <img src={this.state.dataList.avatar_large} alt=""/>
                            <span onClick={()=>this.changeSelected()} className={this.state.selected?'':'active'}>{this.props.username} 创建的所有主题</span>
                            {this.state.tabs.map((tab)=>{
                                return(
                                    <span key={tab.key} onClick={()=>this.changeSelected(tab)} className={tab.key===this.state.selected?'active':''}>{tab.name}</span>
                                )
                            })}
                        </Nav>
                        <UserCreatedTopics username={this.props.match.params.username} selected={this.state.selected} selectedArr={this.state.selectedArr}/>
                    </Wrapper>
                }
            </div>
        )
    }
    getData(){
        let username=this.props.match.params.username
        let source=axios.CancelToken.source()
        axios.get('/api/members/show.json',{
            params:{
                username:username
            },
            cancelToken:source.token
        }).then((res)=>{
            this.setState({
                ...this.state,
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
export default (props)=><UserInfo {...props} key={props.match.params.username} />