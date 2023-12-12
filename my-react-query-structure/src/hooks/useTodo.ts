import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { todoKeys } from "../queries/queryKeys";
import { getTodo, postTodo } from "../api/todo/todo";
import { KeyboardEventHandler, useState } from "react";

const useTodo = () => {
    const [checkedIdList, setCheckedIdList] = useState<{
        [key: string]: unknown;
    }>({});
    const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
    const queryClient = useQueryClient();
    const { status, data, error } = useQuery({
        queryKey: todoKeys.all,
        queryFn: getTodo,
        staleTime: Infinity,
        gcTime: Infinity,
    });

    const mutation = useMutation({
        mutationFn: postTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: todoKeys.all });
        },
    });

    const changeTodo: KeyboardEventHandler<HTMLInputElement> =
        (e) => (value: string, id: string) => {
            if (e.key === "Enter") {
                mutation.mutate({
                    title: value,
                    id,
                });
                handleCheckList(id);
            }
            // Update inputValues state when input changes
            setInputValues((prevInputValues) => ({
                ...prevInputValues,
                [id]: value,
            }));
        };

    const handleCheckList = (id: string) => {
        const newCheckedList = { ...checkedIdList };
        if (!checkedIdList[id]) {
            setCheckedIdList({ ...newCheckedList, [id]: 1 });
        } else {
            delete newCheckedList[id];
            setCheckedIdList(newCheckedList);
        }
    };
    return {
        inputValues,
        checkedIdList,
        status,
        error,
        data,
        setInputValues,
        changeTodo,
        handleCheckList,
    };
};

export default useTodo;
