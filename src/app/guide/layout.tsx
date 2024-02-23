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
        <Box height={'90vh'} maxWidth={'64vw'} position={'absolute'} right={'5vw'} top={'18vh'} >
            {children}
        </Box>
    </section>;
}