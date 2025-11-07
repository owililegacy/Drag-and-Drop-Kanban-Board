import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Github } from "lucide-react";
import "./App.css";
import { KanbanBoard } from "./components/KanbanBoard";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/UI/button";
const FooterLink = ({ children }) => {
    return (_jsx(Button, { variant: "link", asChild: true, className: "scroll-m-20 text-xl font-semibold tracking-tight", children: children }));
};
function App() {
    return (_jsx(_Fragment, { children: _jsx(ThemeProvider, { defaultTheme: "dark", storageKey: "vite-ui-theme", children: _jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsxs("header", { className: "flex justify-between w-full flex-row p-4", children: [_jsx(Button, { variant: "link", asChild: true, className: "text-primary h-8 w-8 p-0", children: _jsx("a", { href: "https://github.com/owililegacy", children: _jsx(Github, { className: "fill-current h-full w-full" }) }) }), _jsx(Button, { variant: "link", asChild: true, className: "text-primary h-16 w-16", children: _jsx("a", { href: "https://github.com/owililegacy", children: "@owililegacy" }) }), _jsx(ThemeToggle, {})] }), _jsxs("main", { className: "mx-4 flex flex-col gap-6", children: [_jsx("h1", { className: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", children: "Drag and Drop Kanban Board" }), _jsx(KanbanBoard, {}), _jsx("p", { className: "leading-7 [&:not(:first-child)]:mt-6", children: "With Keyboard Controls and Screen Reader interactions." })] }), _jsx("footer", { className: "mt-6", children: _jsxs("ul", { className: "flex items-center justify-center", children: [_jsx("li", { children: _jsx(FooterLink, { children: _jsx("a", { href: "https://react.dev/", children: "React" }) }) }), _jsx("li", { children: _jsx(FooterLink, { children: _jsx("a", { href: "https://dndkit.com", children: "dndkit" }) }) }), _jsx("li", { children: _jsx(FooterLink, { children: _jsx("a", { href: "https://tailwindcss.com/", children: "tailwind" }) }) }), _jsx("li", { children: _jsx(FooterLink, { children: _jsx("a", { href: "https://ui.shadcn.com/", children: "shadcn/ui" }) }) })] }) })] }) }) }));
}
export default App;
