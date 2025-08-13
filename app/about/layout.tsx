import React, { ReactNode } from 'react';

interface AboutLayoutProps {
    children: ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
    return (
        <section>
            <div>{children}</div>
        </section>
    );
}