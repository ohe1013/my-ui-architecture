import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { todoKeys } from "../queries/queryKeys";
import { getTodoDetail } from "../api/todo/todo";

interface TodoDetailProps {
  id: string;
}

const TodoDetail: React.FC<TodoDetailProps> = () => {
  const { id } = useParams();
  const { status, data, error } = useQuery({
    queryKey: todoKeys.detail(id),
    queryFn: () => getTodoDetail(id),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (status === "pending") return <div>Loading</div>;
  if (status === "error") return <div>error</div>;

  return <div>{`Todo Detail for ID: ${data.title}`}</div>;
};

export { TodoDetail };
