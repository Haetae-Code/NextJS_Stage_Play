import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../styles/theme";

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" type="image/png" href="/login_func/images/icons/favicon.ico" />
                    <link rel="stylesheet" type="text/css" href="/login_func/vendor/bootstrap/css/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="/login_func/fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="/login_func/fonts/iconic/css/material-design-iconic-font.min.css"
                    />
                    <link rel="stylesheet" type="text/css" href="/login_func/vendor/animate/animate.css" />
                    <link rel="stylesheet" type="text/css" href="/login_func/vendor/css-hamburgers/hamburgers.min.css" />
                    <link rel="stylesheet" type="text/css" href="/login_func/vendor/animsition/css/animsition.min.css" />
                    <link rel="stylesheet" type="text/css" href="/login_func/vendor/select2/select2.min.css" />
                    <link rel="stylesheet" type="text/css" href="/login_func/vendor/daterangepicker/daterangepicker.css" />
                    <link rel="stylesheet" type="text/css" href="/login_func/css/util.css" />
                    <link rel="stylesheet" type="text/css" href="/login_func/css/main.css" />
                </Head>
                <body>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
