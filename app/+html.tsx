import { type PropsWithChildren } from 'react';

export default function Root({ children }: PropsWithChildren) {
    return (
        <html lang="en" className="min-h-dvh relative w-screen text-[14px] antialiased mouse:text-[16px]">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </head>

            <body className="relative min-h-dvh w-full">{children}</body>
        </html>
    );
}
