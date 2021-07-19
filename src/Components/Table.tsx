




export const Table = (props:any) => {
    let rowsTable = props.data !== []?props.data[props.page].map((el:any,index:number) =>(
        <tr key={index}>
            <th scope="row">{el.id}</th>
            <td>{el.firstName}</td>
            <td>{el.lastName}</td>
            <td>{el.email}</td>
            <td>{el.phone}</td>
        </tr>
    )):null
    return (
        <table className="table">
            <thead>
            <tr>
                <th onClick={()=>props.sort('id')} scope="col">#</th>
                <th onClick={()=>props.sort('firstName')}  scope="col">First</th>
                <th onClick={()=>props.sort('lastName')}  scope="col">Last</th>
                <th onClick={()=>props.sort('email')}  scope="col">Email</th>
                <th onClick={()=>props.sort('phone')}  scope="col">Phone</th>
            </tr>
            </thead>
            <tbody>
            {rowsTable}
            </tbody>
        </table>
    );
};