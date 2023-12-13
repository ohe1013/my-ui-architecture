import { useState } from "react";

function useFunnel() {
    const [step, setStep] = useState();

    const Step = (props) => {
        return <>{props.children}</>;
    };

    const Funnel = ({ children }) => {
        const targetStep = children.find((childStep) => childStep.props.name === step);
        return Object.assign(targetStep, { Step });
    };

    return [Funnel, setStep];
}

export { useFunnel };
