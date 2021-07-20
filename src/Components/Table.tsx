import {useAppDispatch} from "../hooks/hooks";
import {reverseTableData} from "../Store/Reducers/TableSlice";

export const Table = (props: any) => {
    const dispatch = useAppDispatch()
    let rowsTable = props.data[0] ? props.data[props.page].map((el: any, index: number) => (
        <tr key={index}>
            <th scope="row">{el.id}</th>
            <td>{el.firstName}</td>
            <td>{el.lastName}</td>
            <td>{el.email}</td>
            <td>{el.phone}</td>
        </tr>
    )) : null
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">
                    #
                    {props.fieldSort === 'id' ?
                        <span onClick={() => dispatch(reverseTableData())}>-</span>
                        :
                        <span onClick={() => props.sort('id')}>+</span>}
                </th>
                <th scope="col">
                    First
                    {props.fieldSort === 'firstName' ?
                        <span onClick={() => dispatch(reverseTableData())}>-</span>
                        :
                        <span onClick={() => props.sort('firstName')}>+</span>
                    }
                </th>
                <th scope="col">
                    Last
                    {props.fieldSort === 'lastName' ?
                        <span onClick={() => dispatch(reverseTableData())}>-</span>
                        :
                        <span onClick={() => props.sort('lastName')}>+</span>
                    }
                </th>
                <th scope="col">
                    Email
                    {props.fieldSort === 'email' ?
                        <span onClick={() => dispatch(reverseTableData())}>-</span>
                        :
                        <span onClick={() => props.sort('email')}>+</span>
                    }
                </th>
                <th scope="col">
                    Phone
                    {props.fieldSort === 'phone' ?
                        <span onClick={() => dispatch(reverseTableData())}>-</span>
                        :
                        <span onClick={() => props.sort('phone')}>+</span>
                    }
                </th>
            </tr>
            </thead>
            <tbody>
            {rowsTable}
            </tbody>
        </table>
    );
};