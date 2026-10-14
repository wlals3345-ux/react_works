import { useParams } from "react-router-dom";

// 게시글 상세페이지 컴포넌트
const BoardDetail = () => {
    // usePraams() - URL 경로 변수 추출
    const {id} = useParams();
    
    return (
        <div>
            <h3 >{id}번 게시글 내용입니다.</h3>
        </div>
    )
}
export default BoardDetail;