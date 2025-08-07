import { create } from "zustand";


export interface Task {
    id: string;
    title: string;
    description: string;
    status: "pending" | "in progress" | "completed";
    priority: "low" | "medium" | "high";
    dueDate: string;
    completed: boolean;
}

interface State {
    tasks: Task[];
}

interface Actions {
    addTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    updateTask: (id: string, key: string, value: string) => void;
    toggleCompletion: (id: string) => void;
}

type TasksStore = State & Actions;


const useTasksStore = create<TasksStore>((set, get) => ({
    tasks: [],
    addTask: (task) => {
        const { tasks } = get();
        set({ tasks: [...tasks, task] });
    },
    deleteTask: (id) => {
        const { tasks } = get();
        set({ tasks: tasks.filter(task => task.id !== id) });
    },
    // can be updated any value using this function
    updateTask: (id, key, value) => {
        const { tasks } = get();
        set({ tasks: tasks.map(task => task.id === id ? { ...task, [key]: value } : task) });
    },
    toggleCompletion: (id) => {
        const { tasks } = get();
        set({ tasks: tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task) });

    }
}))