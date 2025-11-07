import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { useDndContext } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useMemo } from "react";
import { TaskCard } from "./TaskCard";
import { cva } from "class-variance-authority";
import { Card, CardContent, CardHeader } from "./UI/card";
import { Button } from "./UI/button";
import { GripVertical } from "lucide-react";
import { ScrollArea, ScrollBar } from "./UI/scroll-area";
export function BoardColumn({ column, tasks, isOverlay }) {
    const tasksIds = useMemo(() => {
        return tasks.map((task) => task.id);
    }, [tasks]);
    const { setNodeRef, attributes, listeners, transform, transition, isDragging, } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column,
        },
        attributes: {
            roleDescription: `Column: ${column.title}`,
        },
    });
    const style = {
        transition,
        transform: CSS.Translate.toString(transform),
    };
    const variants = cva("h-[500px] max-h-[500px] w-[350px] max-w-full bg-primary-foreground flex flex-col flex-shrink-0 snap-center", {
        variants: {
            dragging: {
                default: "border-2 border-transparent",
                over: "ring-2 opacity-30",
                overlay: "ring-2 ring-primary",
            },
        },
    });
    return (_jsxs(Card, { ref: setNodeRef, style: style, className: variants({
            dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
        }), children: [_jsxs(CardHeader, { className: "p-4 font-semibold border-b-2 text-left flex flex-row space-between items-center", children: [_jsxs(Button, { variant: "ghost", ...attributes, ...listeners, className: " p-1 text-primary/50 -ml-2 h-auto cursor-grab relative", children: [_jsx("span", { className: "sr-only", children: `Move column: ${column.title}` }), _jsx(GripVertical, {})] }), _jsxs("span", { className: "ml-auto", children: [" ", column.title] })] }), _jsx(ScrollArea, { children: _jsx(CardContent, { className: "flex flex-grow flex-col gap-2 p-2", children: _jsx(SortableContext, { items: tasksIds, children: tasks.map((task) => (_jsx(TaskCard, { task: task }, task.id))) }) }) })] }));
}
export function BoardContainer({ children }) {
    const dndContext = useDndContext();
    const variations = cva("px-2 md:px-0 flex lg:justify-center pb-4", {
        variants: {
            dragging: {
                default: "snap-x snap-mandatory",
                active: "snap-none",
            },
        },
    });
    return (_jsxs(ScrollArea, { className: variations({
            dragging: dndContext.active ? "active" : "default",
        }), children: [_jsx("div", { className: "flex gap-4 items-center flex-row justify-center", children: children }), _jsx(ScrollBar, { orientation: "horizontal" })] }));
}
