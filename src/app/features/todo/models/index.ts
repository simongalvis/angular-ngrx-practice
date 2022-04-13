export interface TodoListItemModel {
  id: string;
  description: string;
  completed: boolean;
  isPending: boolean;
}

export interface TodoListModel {
  items: TodoListItemModel[] | null;
  total: number;
}
