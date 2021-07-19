import {Table} from "./Table";
import {useEffect, useState} from "react";
import {FetchTable} from "../AcyncFetch/FetchTable";


export const ContainerTable = () => {
    let [tableData, setTableData] = useState([])
    let [loading, setLoading] = useState(false)
    let [paginate, setPaginate] = useState([[]])
    let [currentPage, setCurrentPage] = useState(0)


    const getData = () =>{
        setLoading(true)
        FetchTable().then(response => setTableData(tableData = response))
            .then(()=> setLoading(false))

    }
        let bubbleSort = (field:string)=>{
        let arr = [...tableData]
                for(let i =  arr.length - 1;i > 0; i--){
                    for(let j = 0; j < i; j++){
                        if (arr[j][field] > arr[j +1][field]){
                            let temp = arr[j]
                            arr[j] = arr[j+1]
                            arr[j+1] =temp
                        }
                    }
                }

                setTableData( tableData = arr)
        }
        useEffect(()=>{
            let arr = [...tableData]
            let size = 50
            let subArray = []
            for (let i = 0; i < Math.ceil(arr.length/size);i++){
               subArray[i] = arr.slice((i * size), (i*size) + size)
            }
            setPaginate( paginate = subArray)
            console.log(paginate)
        },[tableData])
        let pages = paginate.map((el,index)=>(
            <li key={index} className="page-item" onClick={()=> setCurrentPage(index)} aria-current="page">
                <span className="page-link">{index + 1}</span>
            </li>
        ))
    return(
        <div>
            <button onClick={getData}>
                small data
            </button>
            <nav aria-label="...">
                <ul className="pagination pagination-lg">
                    {pages}
                </ul>
            </nav>
            {loading? 'load':null}
            <Table data={paginate} page={currentPage} sort={bubbleSort}/>
        </div>
    )
};

