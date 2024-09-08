import List from "./List";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addTodoList } from "../redux/action";
import AddDataModal from './AddDataModal'

const Search = () => {

    const dispatch = useDispatch();
    const [modelOpen, setModelOpen] = useState(false);
    const listReduxData = useSelector((state) => state.todoData)

    return (
        <div className="flex items-center flex-col my-6 justify-center">
            {modelOpen ? <AddDataModal dispatch={dispatch} setModelOpen={setModelOpen} /> : null}

            <button className="rounded-full  bg-slate-900 px-5 py-2 text-white hover:bg-green-500 text-2xl text-center flex items-center" style={{ fontFamily: 'cursive' }}
                onClick={() => setModelOpen(true)}>Add something  </button>
            <List data={listReduxData} dispatch={dispatch} />
        </div>
    )
}

export default Search;