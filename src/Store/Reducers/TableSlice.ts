import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TypesInitialState {
    tableData: any[],
    loading: boolean,
    paginate: any[][],
    currentPage: number,
    sortReverseName: string
}


let initialState: TypesInitialState = {
    tableData: [],
    loading: false,
    paginate: [],
    currentPage: 0,
    sortReverseName: ''
}


export const TableSlice = createSlice({
    name: "Table",
    initialState: initialState,
    reducers: {
        getTableData(state, actions: PayloadAction<any[]>) {
            state.tableData = actions.payload
        },
        changeLoading(state) {
            state.loading = !state.loading
        },
        pagination(state, action: PayloadAction<any[][]>) {
            state.paginate = action.payload
        },
        changeCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        sortReverse(state, action: PayloadAction<string>) {
            state.sortReverseName = action.payload
        },
        reverseTableData(state) {
            state.tableData = state.tableData.reverse()
            state.sortReverseName = ''
        }
    }
})

export const {
    getTableData,
    changeLoading,
    changeCurrentPage,
    pagination,
    reverseTableData,
    sortReverse
} = TableSlice.actions

export default TableSlice.reducer