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
): readonly [FunnelComponent<Steps>, (step: Steps[number], options?: SetStepOptions) => void] & {
    withState?: <StateExcludeStep extends Record<string, unknown> & { step?: never }>(
        initialStep: StateExcludeStep
    ) => [
        FunnelComponent<Steps>,
        StateExcludeStep,
        (
            next:
                | Partial<StateExcludeStep & { step: Steps[number] }>
                | ((
                      next: Partial<StateExcludeStep & { step: Steps[number] }>
                  ) => StateExcludeStep & { step: Steps[number] })
        ) => void
    ];
} => {
    const [params, setParams] = useSearchParams();

    const stepQueryKey = options?.stepQueryKey ?? DEFAULT_STEP_QUERY_KEY;
    assert(steps.length > 0, "steps가 비어있습니다.");

    const setStep = useCallback(
        (step: Steps[number], setStepOptions?: SetStepOptions) => {
            // const url =
            options?.onStepChange?.(step);

            switch (setStepOptions?.stepChangeType) {
                case "replace":
                    setParams({ step }, { replace: true });
                    return;
                case "push":
                default:
                    setParams({ step });
                    return;
            }
        },
        [options, setParams]
    );
    const FunnelElement = useMemo(
        () =>
            Object.assign(
                (props: RouteFunnelProps<Steps>) => {
                    const step = params.get("step") ?? stepQueryKey;
                    assert(
                        step != null,
                        `표시할 스텝을 ${stepQueryKey} 쿼리 파라미터에 지정해주세요. 쿼리 파라미터가 없을 때 초기 스텝을 렌더하려면 useFunnel의 두 번째 파라미터 options에 initialStep을 지정해주세요.`
                    );
                    return <Funnel<Steps> steps={steps} step={step} {...props}></Funnel>;
                },
                { Step }
            ),
        [params, stepQueryKey, steps]
    );
    // const initializedRef = useRef(false);
    // const setState = useCallback(
    //     (next: Partial<NextState> | ((next: Partial<NextState>) => NextState)) => {
    //       let nextStepValue: Partial<NextState>;
    //       if (typeof next === 'function') {
    //         nextStepValue = next(state);
    //       } else {
    //         nextStepValue = next;
    //       }

    //       if (nextStepValue.step != null) {
    //         nextPendingStepRef.current = nextStepValue.step;
    //       }
    //       nextStateRef.current = nextStepValue;

    //       _setState(next);
    //     },
    //     [_setState, state]
    //   );
    // function withState<State extends Record<string, unknown>>(initialState: State) {
    //     if (!initializedRef.current) {
    //       setState(initialState);
    //       initializedRef.current = true;
    //     }
    //     return [FunnelComponent, state, setState] as const;
    //   }
    // return Object.assign([FunnelElement, setStep] as const, { withState }) as unknown as readonly [
    //     FunnelComponent<Steps>,
    //     (step: Steps[number], options?: SetStepOptions) => Promise<void>
    //   ] & {
    //     withState: <StateExcludeStep extends Record<string, unknown> & { step?: never }>(
    //       initialState: StateExcludeStep
    //     ) => [
    //         FunnelComponent<Steps>,
    //         StateExcludeStep,
    //         (
    //           next:
    //             | Partial<StateExcludeStep & { step: Steps[number] }>
    //             | ((next: Partial<StateExcludeStep & { step: Steps[number] }>) => StateExcludeStep & { step: Steps[number] })
    //         ) => void
    //       ];
    //   };
    return [FunnelElement, setStep] as const;
};
// interface FunnelStorage<T> {
//     get: () => Promise<Partial<T> | null>;
//     set: (value: Partial<T>) => Promise<void>;
//     clear: () => Promise<void>;
// }
// type FunnelStateId = `use-funnel-state__${string}`;
// function createFunnelStorage<T>(
//     funnelStateId: FunnelStateId,
//     storageType = "sessionStorage"
// ): FunnelStorage<T> {
//     switch (storageType) {
//         case "sessionStorage":
//             return {
//                 get: async () => {
//                     const d = sessionStorage.get(funnelStateId);
//                     if (d == null) {
//                         return null;
//                     }
//                     return JSON.parse(d) as Partial<T>;
//                 },
//                 set: async (value: Partial<T>) => {
//                     sessionStorage.set(funnelStateId, JSON.stringify(value));
//                 },
//                 clear: async () => {
//                     sessionStorage.remove(funnelStateId);
//                 },
//             };
//         default:
//             throw new Error("정확한 스토리지 타입을 명시해주세요.");
//     }
// }

// function useFunnelState<T extends Record<string, unknown>>(
//     defaultValue: Partial<T>,
//     options?: { storage?: FunnelStorage<T> }
// ) {
//     const { pathname, basePath } = useR;
// }
