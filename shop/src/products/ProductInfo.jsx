import { useParams, useNavigate } from "react-router-dom";
import products from "../datas/Products";


const ProductInfo = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    

    // id에 해당하는 상품 가져오기
    // id는 문자이므로 숫자형으로 변환 - Number(), ParseInt()
    const product = products.find(p => p.id === Number (id));

    return (
        <div>
            <h2>상품 상세 페이지</h2>
            {/* <h3>상품 ID: {id}</h3> */}
            <div className="product-datail">
                <p>상품 이름: {product.name}</p>
                <p>상품 가격: {product.price}</p>
                <p>상품 설명: {product.description}</p>
            </div>
            <div>
                <button onClick={() => {navigate('/products')}}>목록 보기</button>
            </div>
        </div>
    )
}
export default ProductInfo;