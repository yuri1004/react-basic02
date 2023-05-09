// 배열
const allColor = ['red','blue','yellow','orange','violet'];

// 컴포넌트
function ProColor(props){
    // console.log(props);
    function optionColor(){
        console.log(props);
        return allColor.map((item,index) => <option value={item} key={index}> {item} </option>)
    }
    return(
        <p>
            <label htmlFor="usercolor">color:</label>
            <select id="usercolor">
               {/* {allColor.map((item,index) => <option value={item} key={index}> {item} </option>)} */}
               {optionColor()}
            </select>
        </p>
    )
}

// export
export default function Test12(){
    return(
        <ProColor 
          color={allColor}
        />
    )
}