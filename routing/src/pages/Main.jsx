import mainPhoto from '../assets/hero.png'

// 첫 페이지에 보여줌
const Main = () => {
    return (
        <div>
            <h2>환영합니다. 메인 페이지 입니다.</h2>
            <div>
                <img src={mainPhoto} alt="메인이미지" />
            </div>
        </div>
    )
}
export default Main;