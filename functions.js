let getData = async function () {
    
    let tableObj = document.querySelector("table"); 
    let tableRow=document.createElement("tr")     
    try {
       let response = await fetch("https://jsonplaceholder.typicode.com/users");
       let postsResponse = await fetch ("https://jsonplaceholder.typicode.com/posts");
       let usersData = await response.json();
       let userPosts =await  postsResponse.json();
      
            // to add table head 
       for (item in usersData [0]){
           let tableHead = document.createElement("td")
           tableHead.innerText=item
           tableRow.append(tableHead)
           tableObj.append(tableRow)
       }
       
       for (items in  usersData){
           tableRow=document.createElement("tr")     
           for (item in usersData[items]){
              if (item =="id"){
                 tableHead = document.createElement("td")
                 tableHead.innerText=usersData[items].id
                 tableRow.append(tableHead)
                 tableObj.append(tableRow)
              }
              else if (item =="name"){
                 tableHead = document.createElement("td")
                 tableHead.innerText=usersData[items].name
                 tableRow.append(tableHead)
                 tableObj.append(tableRow)
              }
              else if (item =="username"){
                 tableHead = document.createElement("td")
                 tableHead.innerText=usersData[items].username
                 tableRow.append(tableHead)
                 tableObj.append(tableRow)
              }
              else if (item =="email"){
                 tableHead = document.createElement("td")
                 tableHead.innerText=usersData[items].email
                 tableRow.append(tableHead)
                 tableObj.append(tableRow)
              }
              else if (item =="address"){
                 tableHead = document.createElement("td")
                 tableHead.innerText=usersData[items].address.geo.lat+usersData[items].address.geo.lng
                 tableRow.append(tableHead)
                 tableObj.append(tableRow)
              }
              else if (item =="phone"){
                 tableHead = document.createElement("td")
                 tableHead.innerText=usersData[items].phone
                 tableRow.append(tableHead)
                 tableObj.append(tableRow)
              }
              else if (item =="website"){
                 tableHead = document.createElement("td")
                 tableHead.innerText=usersData[items].website
                 tableRow.append(tableHead)
                 tableObj.append(tableRow)
              }
              else if (item =="company"){
                 tableHead = document.createElement("td")
                 tableHead.innerText=usersData[items].company.name
                 tableRow.append(tableHead)
                 tableObj.append(tableRow)
              }
           }
       }
        
                const endRow = tableObj.querySelectorAll("tr")
                console.log(endRow)
            for (let u = 0 ; u<usersData.length;u++) {
                
                 tableTd = document.createElement("td");
                 let postUL = document.createElement("ul");
              for (let key in userPosts){
                  if (usersData[u].id == userPosts[key].userId){
                   let li = document.createElement("li")
                   li.innerText=userPosts[key].title;
                   postUL.append(li)
                   tableTd.append(postUL)
                   }  
                }
               endRow[u+1].append(tableTd)
            }
       }
    
       
    
    catch(error){
        console.log(error);
    }
}