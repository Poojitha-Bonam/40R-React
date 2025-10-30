const ListComp = () => {
    const dataList = ["pooji","chinnu","nani","siri"]
    const data=[{name:"pooji",class:"9th"},{name:"chinnu",class:"8th"},{name:"nani",class:"7th"},{name:"siri",class:"6th"}]
    return <div>
        {dataList.map((element,index)=><p key={index} >Name is {element}</p>)}
        {data.map((element,index)=><div key = {index}>
            <p>student name is {element.name}</p>
            <p>student class is {element.class}</p></div>)}
    </div>
}
export default ListComp