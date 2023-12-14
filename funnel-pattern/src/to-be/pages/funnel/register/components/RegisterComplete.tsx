import { RegisterData } from "..";

export function RegisterComplete({ data }: { data: RegisterData }) {
    return (
        <>
            <h1>완료</h1>
            <h1>{data.address}</h1>
            <h1>{data.phone}</h1>
            <h1>
                {" "}
                {data.securityFront}
                {data.securityBack}{" "}
            </h1>
        </>
    );
}
