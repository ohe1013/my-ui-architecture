import { useId } from "react";

type ReduceReturnType<T extends ReadonlyArray<string>> = Record<
  T[number],
  string
>;

const useFormId = <T extends ReadonlyArray<string>>(
  formNameArray: T
): ReduceReturnType<T> => {
  const id = useId();
  return formNameArray.reduce<ReduceReturnType<T>>(
    (acc, formName) => ({ ...acc, [formName]: `${formName}${id}` }),
    {} as ReduceReturnType<T>
  );
};

export default function Form() {
  const params = ["firstName", "lastName"] as const;
  type ParamsType = typeof params;
  const { firstName, lastName } = useFormId<ParamsType>(params);

  return (
    <form>
      <label htmlFor={firstName}>First Name:</label>
      <input id={firstName} type="text" />
      <hr />
      <label htmlFor={lastName}>Last Name:</label>
      <input id={lastName} type="text" />
    </form>
  );
}
