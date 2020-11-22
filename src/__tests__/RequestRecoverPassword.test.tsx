import React from 'react';
import { render, cleanup, configure, getByTestId, getByText } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import RequestRecoverPassword from "../pages/Request-Recover-Password/index";
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import theme from '../styles/theme';


describe("<RequestRecoverPassword />", (): void => {
    afterEach(cleanup);
    test("Renderiza recovery password form", (): void => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <RequestRecoverPassword />
            </ThemeProvider>

        );
        expect(container.querySelector("form")).toBeInTheDocument();

        expect(container.querySelector('input[class="input"][placeholder="Insira seu email de cadastro"]')).toBeInTheDocument();

        expect(getByText(container, "Solicitar").closest("button")).toHaveAttribute("class", "button");
    });

    test("Renderiza textos", (): void => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <RequestRecoverPassword />
            </ThemeProvider>

        );
        expect(getByText("Será enviado um link para o email informado, onde será possível inserir sua nova senha!").closest("h1")).toBeInTheDocument();
        expect(getByText("Cuidado, esse link é temporário. Sendo assim, não deixe pra depois!").closest("h1")).toBeInTheDocument();
    });

    test("Renderiza fala cidadão imagem", (): void => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <RequestRecoverPassword />
            </ThemeProvider>

        );

        expect(container.querySelector('img')).toBeInTheDocument();
    });

    test("Testando estilo", (): void => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <RequestRecoverPassword />
            </ThemeProvider>

        );
        // TO-DO
        //expect(container.children[0]).toHaveStyleRule('background', "#CAF0C1"); 
    });
});