import {Table} from "./Table";
import {useEffect} from "react";
import {FetchTable} from "../AcyncFetch/FetchTable";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {changeCurrentPage, changeLoading, getTableData, pagination, sortReverse} from "../Store/Reducers/TableSlice";


export const ContainerTable = () => {

    const {loading,currentPage,tableData,paginate,sortReverseName} = useAppSelector(state => state.table)
    const dispatch = useAppDispatch()

    const getData = (sizeData:number) =>{
        dispatch(changeLoading())
        FetchTable(sizeData).then(response => dispatch(getTableData(response)))
            .then(()=> dispatch(changeLoading()))

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

            dispatch(getTableData(arr))
            dispatch(sortReverse(field))
        }
        useEffect(()=>{
            let arr = [...tableData]
            let size = 50
            let subArray = []
            for (let i = 0; i < Math.ceil(arr.length/size);i++){
               subArray[i] = arr.slice((i * size), (i*size) + size)
            }
            dispatch(pagination(subArray))
            console.log(paginate)
        },[tableData])
        let pages = paginate.map((el,index)=>(
            <li key={index} className="page-item" onClick={()=> dispatch(changeCurrentPage(index))} aria-current="page">
                <span className="page-link">{index + 1}</span>
            </li>
        ))
    return(
        <div>
            <button onClick={() => getData(0)}>
                small data
            </button>
            <button onClick={() => getData(1)}>Big data</button>
            <nav aria-label="...">
                <ul className="pagination pagination-lg">
                    {pages}
                </ul>
            </nav>
            {loading? 'load':null}
            <Table data={paginate} page={currentPage} fieldSort={sortReverseName} sort={bubbleSort}/>
        </div>
    )
};


