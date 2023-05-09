const List = ['title01','title02','title03','title04']

function Source({title}){
    return(
     <ul>
       {title.map((item,index) => <li key={index}> {item} : {index} </li>)}
     </ul>
    )
}

export default function Test10(){
    return(
        <Source 
          title={List}
        />
    )
}