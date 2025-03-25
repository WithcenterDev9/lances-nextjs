import { FirebaseProvider } from "@/context/FirebaseProvider";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <FirebaseProvider>
                    {children}
                </FirebaseProvider>
            </body>
        </html>
    );
}