import { RegisterData } from "..";
import { useState } from "react";
export function SecurityNumber({
    data,
    onNext,
}: {
    data: RegisterData;
    onNext: (data: string) => void;
}) {
    const [securityBack, setSecurityBack] = useState(data.securityBack);
    return (
        <>
            <h1>SecurityNumber 뒷자리를 입력해주세요.</h1>
            <p>{data.securityFront}</p>
            <input value={securityBack} onChange={(e) => setSecurityBack(e.target.value)}></input>
            <button onClick={() => onNext(securityBack)}></button>
        </>
    );
}
