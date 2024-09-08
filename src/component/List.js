import { useDispatch, useSelector } from "react-redux";
import { removeTodoList } from "../redux/action";


const List = (props) => {


    console.log("props.data", props.data)
    return (

        <div className="flex flex-col  w-3/4 px-10 py-10 h-fit mt-6 bg-white rounded-xl" >

            <div className=" flex flex-col content-center  justify-center w-full rounded-md bg-white">
                {
                    props.data?.map((data, key) =>
                        <div className="w-full rounded-xl flex flex-row justify-center mb-1 bg-tableRed px-1 py-1" key={key}>
                            <div className="flex items-center flex-row w-6/12 text-center text-xl px-2 py-2 float-left" style={{ fontFamily: 'cursive' }}> {data}</div>
                            <div className=" flex items-center justify-end  w-6/12 px-2 py-2  ">
                                <button style={{ fontFamily: 'cursive' }} className=" float-right rounded-lg bg-red-600 text-2xl mt-0 text-white  py-2 px-3 min-w-fit content-center text-center"
                                    onClick={() => { props.dispatch(removeTodoList(data)) }}> Delete </button></div>
                        </div>
                    )}
            </div>

        </div>
    )
}

export default List;