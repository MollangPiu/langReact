import { useNavigate } from "react-router-dom";

export default function Mypage() {
    const movePage = useNavigate();


    return (
        <div className="mypage">
            <h1>페이지 연결 성공</h1>
        </div>
    );
}