import React from 'react';
import { render, cleanup, getByText, getByTestId, configure } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Login from "../pages/Login/index";
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event'
import 'jest-styled-components';

import theme from '../styles/theme';

describe("<Login />", (): void => {
    afterEach(cleanup);
    test("Renderiza Login form", (): void => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Login />
            </ThemeProvider>

        );
        expect(container.querySelector("form")).toBeInTheDocument();

        expect(getByText(container, "Realizar Login")).toBeInTheDocument();

        expect(container.querySelector('input[class="input"][placeholder="Insira o e-mail cadastrado"]')).toBeInTheDocument();
        expect(container.querySelector('input[class="input"][placeholder="Insira sua senha"][type="password"]')).toBeInTheDocument();

        configure({ testIdAttribute: 'class' })
        expect(getByTestId(container, "icon is-small is-right")).toBeInTheDocument();

        expect(getByText(container, "Entrar").closest("button")).toHaveAttribute("class", "button");
        expect(getByText(container, "Entrar").closest("button")).toHaveAttribute("disabled");
    });

    test("Mostrar a senha", (): void => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Login />
            </ThemeProvider>

        );

        configure({ testIdAttribute: 'class' })
        getByTestId(container, "icon is-small is-right").click();

        expect(container.querySelector('input[class="input"][placeholder="Insira sua senha"][type="password"]')).not.toBeInTheDocument();
        expect(container.querySelector('input[class="input"][placeholder="Insira sua senha"][type="text"]')).toBeInTheDocument();

    });

    test("Renderiza cadastre-se", (): void => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Login />
            </ThemeProvider>

        );
        expect(getByText("Realizar cadastro.").closest("a")).toHaveAttribute("href", "/signup");
    });

    test("Renderiza Sou cidadão!", (): void => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Login />
            </ThemeProvider>

        );
        expect(getByText("Esqueci minha senha!").closest("a")).toHaveAttribute("href", "/request-recover-password");
    });

    test("Testando estilo", (): void => {
        // TO-DO
        //expect(container.children[0]).toHaveStyleRule('background', "#CAF0C1"); 
    });
});