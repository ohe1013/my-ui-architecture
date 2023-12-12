import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { registerAsIsState } from "~as-is/recoil/register";
export function RegisterMethod() {
    const [registerData] = useRecoilState(registerAsIsState);
    const navigate = useNavigate();
    return (
        <>
            <h1>지금 휴대폰 번호를 그대로 쓸까요?</h1>
            <p>{registerData.phone}</p>
            <button onClick={() => navigate("/SecurityNumber")}>다음</button>
        </>
    );
}
