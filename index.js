const express =require('express')
const dbHelper=require('./zsgjk/抽取')
const app=express()
app.use(express.static('views'))
app.get('/heroList',(req,res)=>{

    const pagenum=parseInt(req.query.pagenum)
    const pagesize=parseInt(req.query.pagesize)
    const query=req.query.query
  
    dbHelper.find("cqlist",{},result=>{
        const temArr= result.filter(v=>{
             if(v.heroName.indexOf(query)!=-1||v.skillName.indexOf(query)!=-1){
                 return true
             }
         })
         let list=[]
         const startIndex=(pagenum-1)*pagesize
         const endIndex=startIndex+pagesize
         console.log( startIndex)
         console.log( endIndex)
         for(let i=startIndex;i<endIndex;i++){
             if(temArr[i]){
                 list.push(temArr[i])
             }
         }
         const totalPage=Math.ceil(temArr.length/pagesize)
         res.send({
             totalPage,
             list
         })
     })
  
})
app.get('/heroDetail',(req,res)=>{
    const id=req.query.id
    dbHelper.find('cqlist',{_id:dbHelper.ObjctPd(id)},result=>{
        res.send(result[0])
    })
})

app.listen(9981)