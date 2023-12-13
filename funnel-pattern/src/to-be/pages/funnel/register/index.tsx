import { useState } from "react";
import { RegisterMethod } from "./components/RegisterMethod";
import { SecurityNumber } from "./components/SecurityNumber";
import { RegisterComplete } from "./components/RegisterComplete";
import { Address } from "./components/Address";

export interface RegisterData {
    phone: string;
    securityFront: string;
    securityBack: string;
    address: string;
}

export function Register() {
    const [registerData, setRegisterData] = useState<RegisterData>({
        phone: "010-9976-3696",
        securityFront: "930118",
        securityBack: "",
        address: "",
    });
    const [step, setStep] = useState<"가입방식" | "주민번호" | "집주소" | "가입성공">("가입방식");

    return (
        <main>
            {step === "가입방식" && (
                <RegisterMethod
                    data={registerData}
                    onNext={(data: string) => {
                        setRegisterData((prev) => ({ ...prev, phone: data }));
                        setStep("주민번호");
                    }}
                />
            )}
            {step === "주민번호" && (
                <SecurityNumber
                    data={registerData}
                    onNext={(data: string) => {
                        setRegisterData((prev) => ({ ...prev, securityBack: data }));
                        setStep("집주소");
                    }}
                />
            )}
            {step === "집주소" && (
                <Address
                    data={registerData}
                    onNext={(data: string) => {
                        setRegisterData((prev) => ({ ...prev, address: data }));
                        setStep("가입성공");
                    }}
                />
            )}
            {step === "가입성공" && <RegisterComplete data={registerData} />}
        </main>
    );
}
