function ReactBook(props){
    return(
        <dl>
            <dt>{props.title}</dt>
            <dd>{props.price}</dd>
            <dd>{props.level}</dd>
        </dl>
    )
}

export default function Test06(){
    return(
      <ReactBook 
         title='react'
         price='10000원'
         level={5}
         />
    )
}