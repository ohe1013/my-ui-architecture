import { RegisterData } from "..";
import { useState } from "react";
export function RegisterMethod({
    data,
    onNext,
}: {
    data: RegisterData;
    onNext: (data: string) => void;
}) {
    const [phoneNumber, setPhoneNumber] = useState(data.phone);
    return (
        <>
            <h1>지금 휴대폰 번호를 그대로 쓸까요?</h1>
            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
            <button onClick={() => onNext(phoneNumber)}>다음</button>
        </>
    );
}
