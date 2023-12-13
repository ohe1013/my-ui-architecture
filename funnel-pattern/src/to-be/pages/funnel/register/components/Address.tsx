import { useState } from "react";
import { RegisterData } from "..";

export function Address({ data, onNext }: { data: RegisterData; onNext: (data: string) => void }) {
    const [address, setAddress] = useState(data.address);
    return (
        <>
            <h1>Address를 입력해주세요.</h1>
            <input
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            ></input>
            <button onClick={() => onNext(address)}></button>
        </>
    );
}
