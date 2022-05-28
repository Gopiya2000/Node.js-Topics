function getUserName(callback){
    let name = 'gopiya'
    callback({name},getCompanyName)
 }
 function getUserAge(data,callback){
     let age = 21
     callback({...data,age},print)
 }
 function getCompanyName(data,callback){
     let company = 'aspire'
     callback({...data,company})
 }
 function print(data){
     console.log(data)
 }
 getUserName(getUserAge)
 
