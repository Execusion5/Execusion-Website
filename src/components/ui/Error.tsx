import { ReactNode } from "react";

export default function Error({ children }: { children: ReactNode; }) {
    return (
        <div className="text-red-600">{children}</div>
    );
}
