import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>Header Content</header>
            <main>{children}</main>
            <footer>Footer Content</footer>
        </div>
    );
}