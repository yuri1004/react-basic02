// 배열
const allColor = ['red','blue','yellow','orange','violet'];

// 컴포넌트
function ProColor(props){
    console.log(props)
    return(
        <p>
            <label htmlFor="usercolor">color:</label>
            <select id="usercolor">
               {allColor.map((item,index) => <option value={item} key={index}> {item} </option>)}
            </select>
        </p>
    )
}

// export
export default function Test11(){
    return(
        <ProColor 
          color={allColor}
        />
    )
}