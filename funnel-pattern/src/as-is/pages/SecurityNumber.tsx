import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { registerAsIsState } from "~as-is/recoil/register";
export function SecurityNumber() {
    const [registerData, setRegisterData] = useRecoilState(registerAsIsState);
    const navigate = useNavigate();
    return (
        <>
            <h1>SecurityNumber 뒷자리를 입력해주세요.</h1>
            <p>{registerData.securityFront}</p>
            <input
                value={registerData.securityBack}
                onChange={(e) => {
                    setRegisterData({ ...registerData, securityBack: e.target.value });
                }}
            ></input>
            <button onClick={() => navigate("/Address")}>다음</button>
        </>
    );
}
