import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { registerAsIsState } from "~as-is/recoil/register";
export function Address() {
    const [registerData, setRegisterData] = useRecoilState(registerAsIsState);
    const navigate = useNavigate();
    return (
        <>
            <h1>Address를 입력해주세요.</h1>
            <input
                placeholder="Address"
                value={registerData.address}
                onChange={(e) => {
                    setRegisterData({ ...registerData, address: e.target.value });
                }}
            ></input>
            <button onClick={() => navigate("/registerComplete")}>다음</button>
        </>
    );
}
