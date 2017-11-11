let array= [];
// JSON.parse(localStorage.getItem()
let add=()=>{

    if(input.value==""){

        alert("Enter something")}
    else{    
        array.push(input.value);
console.log(array);

render();
    }
}

let del=(id)=>{
    array.splice(id, 1);
    render();

}
let edit=(id)=>{
    let newtext=prompt("Enter edit text","")
    if(newtext==""){  alert("Edit something")}
   else{ 
    array.splice(id, 1 , newtext);
    render();
   }
}
let render=()=>{
ReactDOM.render(<div>

<h1>tODO App</h1>
<input type="text" id="input"/>
<button onClick={()=>add(array)}>add</button>
<ul>
<li>{array.map((array,id)=>{return <li>{array}   

<button onClick={()=>del(id)}>DEL</button>   

<button onClick={()=>edit(id)}>EDIT</button></li>})}

</li>
</ul>
</div>,document.getElementById("root"));
}
render();