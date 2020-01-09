import axios from "axios";

let getData=function(tabs,fn){
    let source=axios.CancelToken.source()
    let temp=[]
    if(typeof tabs==='string'){
        let url=''
        switch (tabs) {
            case 'hot':
                url = '/api/topics/hot.json'
                break
            case 'latest':
                url = '/api/topics/latest.json'
                break
        }
        axios.get(url,{cancelToken:source.token}).then((res) => {
            temp = temp.concat(res.data)
            temp.sort((a, b) => {
                return (a.last_touched) > (b.last_touched) ? 1 : -1
            })
            fn(temp,source)
        }).catch(()=>{})
    }else{
        tabs.forEach((tab)=> {
            axios.get('/api/topics/show.json', {
                params: {
                    node_name:tab.key
                },
                cancelToken:source.token
            }).then((res) => {
                temp = temp.concat(res.data)
                temp.sort((a, b) => {
                    return (a.last_touched) > (b.last_touched) ? 1 : -1
                })
                fn(temp,source)
            }).catch(()=>{})
        })
    }
}
export default getData;