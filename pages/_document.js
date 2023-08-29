import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../styles/theme";

export default class Document extends NextDocument {
    render() {
        // 미리 정의한 externalCSS 배열을 통해 코드 중복을 최소화합니다.
        const externalCSS = [
            { path: "/login_func/images/icons/favicon.ico", rel: "icon", type: "image/png" },
            { path: "/login_func/vendor/bootstrap/css/bootstrap.min.css" },
            { path: "/login_func/fonts/font-awesome-4.7.0/css/font-awesome.min.css" },
            { path: "/login_func/fonts/iconic/css/material-design-iconic-font.min.css" },
            { path: "/login_func/vendor/animate/animate.css" },
            { path: "/login_func/vendor/css-hamburgers/hamburgers.min.css" },
            { path: "/login_func/vendor/animsition/css/animsition.min.css" },
            { path: "/login_func/vendor/select2/select2.min.css" },
            { path: "/login_func/vendor/daterangepicker/daterangepicker.css" },
            { path: "/login_func/css/util.css" },
            { path: "/login_func/css/main.css" }
        ];

        return (
            <Html lang="en">
                <Head>
                    {/* externalCSS 배열을 순회하며 link 태그를 생성합니다. */}
                    {externalCSS.map((css, idx) => (
                        <link key={idx} rel={css.rel || "stylesheet"} type={css.type || "text/css"} href={css.path} />
                    ))}
                </Head>
                <body>
                    {/* Chakra UI의 색상 모드 설정을 위한 스크립트입니다. */}
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
