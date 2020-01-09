export default function countTime(time){
    let nowTime=parseInt(Date.now()/1000,10)
    let result=nowTime-time
    if(result<60){
        return `${parseInt(result)}秒前`
    }else if(result<3600) {
        return `${parseInt(result/60)}分钟前`
    }else if(result<86400){
        return `${parseInt(result/3600)}小时前`
    }else{
        return `${parseInt(result/86400)}天前`
    }
}
