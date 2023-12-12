import { useState } from "react";
import { RegisterMethod } from "./components/RegisterMethod";
import { SecurityNumber } from "./components/SecurityNumber";
import { Address } from "./components/Address";

export function Register() {
    const [registerData, setRegisterData] = useState();
    const [step, setStep] = useState<"가입방식" | "주민번호" | "집주소" | "가입성공">("가입방식");

    return (
        <main>
            {step === "가입방식" && <RegisterMethod />}
            {step === "주민번호" && <SecurityNumber />}
            {step === "집주소" && <Address />}
            {step === "가입성공"}
        </main>
    );
}
