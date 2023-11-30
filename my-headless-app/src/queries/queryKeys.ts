/**
 * query key 구조 설계
 * 최대한 mental model 과 비슷하게 만들자.
 * key명칭 - rest 명사
 * e.g.)키 만드는 구조 /todo/all
 * getTodoAll => [todo]Keys[all]
 *
 */

const todoKeys = {
  all: ["todos"] as const,
  lists: () => [...todoKeys.all, "list"] as const,
  list: (filter: string) => [...todoKeys.lists(), { filter }] as const,
  details: () => [...todoKeys.all, "detail"] as const,
  detail: (id: number) => [...todoKeys.details(), id] as const,
};
