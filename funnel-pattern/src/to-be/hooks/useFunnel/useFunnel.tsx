import { assert } from "~to-be/utils/assert";
import { Funnel, FunnelProps, Step, StepProps } from "./Funnel";
import { NonEmptyArray } from "./models";
import { useSearchParams } from "react-router-dom";
import { useCallback, useMemo } from "react";
type FunnelComponent<Steps extends NonEmptyArray<string>> = ((
    props: RouteFunnelProps<Steps>
) => JSX.Element) & {
    Step: (props: StepProps<Steps>) => JSX.Element;
};
type RouteFunnelProps<Steps extends NonEmptyArray<string>> = Omit<
    FunnelProps<Steps>,
    "steps" | "step"
>;

interface SetStepOptions {
    stepChangeType?: "push" | "replace";
    preserveQuery?: boolean;
    query?: Record<string, unknown>;
}
const DEFAULT_STEP_QUERY_KEY = "funnel-step";
export const useFunnel = <Steps extends NonEmptyArray<string>>(
    steps: Steps,
    options?: {
        stepQueryKey?: string;
        initialStep?: Steps[number];
        onStepChange?: (name: Steps[number]) => void;
    }
): readonly [FunnelComponent<Steps>, (step: Steps[number], options?: SetStepOptions) => void] => {
    const [params, setParams] = useSearchParams();
    const stepQueryKey = options?.stepQueryKey ?? DEFAULT_STEP_QUERY_KEY;

    assert(steps.length > 0, "steps가 비어있습니다.");

    const setStep = useCallback((step: Steps[number]) => setParams({ step }), [setParams]);
    const FunnelElement = useMemo(
        () =>
            Object.assign(
                (props: RouteFunnelProps<Steps>) => {
                    const step = params.get("step") ?? stepQueryKey;
                    return <Funnel<Steps> steps={steps} step={step} {...props}></Funnel>;
                },
                { Step }
            ),
        [params, stepQueryKey, steps]
    );
    return [FunnelElement, setStep] as const;
};
