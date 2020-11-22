import React from 'react';
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Home from "../pages/Home/index";
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import theme from '../styles/theme';


describe("<Home />", (): void => {
    afterEach(cleanup);
    test("Renderiza Home", (): void => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>

        );
        const linkElement = getByText("Vamos juntos melhorar sua cidade?");
        expect(linkElement).toBeInTheDocument();
    });
    test("Renderiza botao login", (): void => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>

        );
        expect(getByText("Login").closest("a")).toHaveAttribute("href", "/login");
    });
    test("Renderiza cadastre-se", (): void => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>

        );
        expect(getByText("Cadastre-se").closest("a")).toHaveAttribute("href", "/signup");
    });
    test("Renderiza exclamation", (): void => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>

        );
        const linkElement = getByText("Esse site é apenas voltado para os administradores das cidades!");
        expect(linkElement).toBeInTheDocument();
    });
    test("Testando estilo", (): void => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>

        );
        expect(container.children[0]).toHaveStyleRule('background', "#CAF0C1");
    });
});