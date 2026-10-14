import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FetchOneById = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then((result) => {
                setDatas(result);  //변환 데이터를 저장
            }) 
            .catch((error) => console.error(error));
        }, [id]);

        return (
        <div>
            <h2>할 일(To-do) 데이터</h2>
            <p>Todo id : {id}</p>
        </div>
    )
}
export default FetchOneById;