import { create } from "zustand";


export interface Goal {
    id: string;
    title: string;
    description: string;
    status: "pending" | "in progress" | "completed";
    progress: number;
    priority: "low" | "medium" | "high";
    dueDate: string;
    completed: boolean;
}

interface State {
    goals: Goal[];
}

interface Actions {
    addGoal: (goal: Goal) => void;
    deleteGoal: (id: string) => void;
    updateGoal: (id: string, key: string, value: string) => void;
    toggleCompletion: (id: string) => void;
}

type GoalsStore = State & Actions;

const useGoalsStore = create<GoalsStore>((set, get) => ({
    goals: [],
    addGoal: (goal) => {
        const { goals } = get();
        set({ goals: [...goals, goal] });
    },
    deleteGoal: (id) => {
        const { goals } = get();
        set({ goals: goals.filter(goal => goal.id !== id) });
    },
    // can be updated any value using this function
    updateGoal: (id, key, value) => {
        const { goals } = get();
        set({ goals: goals.map(goal => goal.id === id ? { ...goal, [key]: value } : goal) });
    },
    toggleCompletion: (id) => {
        const { goals } = get();
        set({ goals: goals.map(goal => goal.id === id ? { ...goal, completed: !goal.completed } : goal) });
    }
}));

export default useGoalsStore;
