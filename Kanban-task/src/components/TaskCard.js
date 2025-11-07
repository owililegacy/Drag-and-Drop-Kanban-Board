import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardHeader } from "@/components/UI/card";
import { Button } from "@/components/UI/button";
import { cva } from "class-variance-authority";
import { GripVertical } from "lucide-react";
import { Badge } from "./UI/badge";
export function TaskCard({ task, isOverlay }) {
    const { setNodeRef, attributes, listeners, transform, transition, isDragging, } = useSortable({
        id: task.id,
        data: {
            type: "Task",
            task,
        },
        attributes: {
            roleDescription: "Task",
        },
    });
    const style = {
        transition,
        transform: CSS.Translate.toString(transform),
    };
    const variants = cva("", {
        variants: {
            dragging: {
                over: "ring-2 opacity-30",
                overlay: "ring-2 ring-primary",
            },
        },
    });
    return (_jsxs(Card, { ref: setNodeRef, style: style, className: variants({
            dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
        }), children: [_jsxs(CardHeader, { className: "px-3 py-3 space-between flex flex-row border-b-2 border-secondary relative", children: [_jsxs(Button, { variant: "ghost", ...attributes, ...listeners, className: "p-1 text-secondary-foreground/50 -ml-2 h-auto cursor-grab", children: [_jsx("span", { className: "sr-only", children: "Move task" }), _jsx(GripVertical, {})] }), _jsx(Badge, { variant: "outline", className: "ml-auto font-semibold", children: "Task" })] }), _jsx(CardContent, { className: "px-3 pt-3 pb-6 text-left whitespace-pre-wrap", children: task.content })] }));
}
