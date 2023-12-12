import { atom } from "recoil";
export const registerAsIsState = atom({
    key: "register-as-is",
    default: { phone: "010-9976-3696", securityFront: "930118", securityBack: "", address: "" },
});
