import * as React from 'react';
import GuideNav from "./GuideNav";
import Box from "@mui/system/Box";

export default function GuideLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>
        <GuideNav/>
        <Box minHeight={'80vh'} maxWidth={'60vw'} position={'absolute'} right={'5vw'} top={'18vh'} >
            {children}
        </Box>
    </section>;
}