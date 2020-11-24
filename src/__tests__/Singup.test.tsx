import React from 'react';
import { render, screen, fireEvent, cleanup, getByText, getByTestId, configure, getAllByTestId } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Signup from "../pages/Signup/index";
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

import theme from '../styles/theme';

describe("<Signup />", (): void => {
    afterEach(cleanup);
    test("Renderiza Signup form", (): void => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Signup />
            </ThemeProvider>

        );
        expect(container.querySelector("form")).toBeInTheDocument();

        expect(getByText(container, "Realizar Cadastro")).toBeInTheDocument();

        expect(container.querySelector('input[class="input"][placeholder="Insira um nome"]')).toBeInTheDocument();
        expect(container.querySelector('input[class="input"][placeholder="Escolha seu estado"]')).toBeInTheDocument();
        expect(container.querySelector('input[class="input"][placeholder="Escolha a cidade que representa"]')).toBeInTheDocument();
        expect(container.querySelector('input[class="input"][placeholder="Insira um email"]')).toBeInTheDocument();
        expect(container.querySelector('input[class="input"][placeholder="Insira uma senha"][type="password"]')).toBeInTheDocument();
        expect(container.querySelector('input[class="input"][placeholder="Confirme sua senha"][type="password"]')).toBeInTheDocument();

        configure({ testIdAttribute: 'class' })
        expect(getAllByTestId(container, "icon is-small is-right").length).toBe(2)
        expect(getByText(container, "Cadastrar").closest("button")).toHaveAttribute("class", "button");
    });

    test("Mostrar a senha", (): void => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Signup />
            </ThemeProvider>

        );

        configure({ testIdAttribute: 'class' })
        getAllByTestId(container, "icon is-small is-right")[0].click();

        expect(container.querySelector('input[class="input"][placeholder="Insira uma senha"][type="password"]')).not.toBeInTheDocument();
        expect(container.querySelector('input[class="input"][placeholder="Insira uma senha"][type="text"]')).toBeInTheDocument();


        expect(container.querySelector('input[class="input"][placeholder="Confirme sua senha"][type="password"]')).not.toBeInTheDocument();
        expect(container.querySelector('input[class="input"][placeholder="Confirme sua senha"][type="text"]')).toBeInTheDocument();

        getAllByTestId(container, "icon is-small is-right")[1].click();

        expect(container.querySelector('input[class="input"][placeholder="Insira uma senha"][type="password"]')).toBeInTheDocument();
        expect(container.querySelector('input[class="input"][placeholder="Insira uma senha"][type="text"]')).not.toBeInTheDocument();


        expect(container.querySelector('input[class="input"][placeholder="Confirme sua senha"][type="password"]')).toBeInTheDocument();
        expect(container.querySelector('input[class="input"][placeholder="Confirme sua senha"][type="text"]')).not.toBeInTheDocument();
    });

    test("Renderiza já tenho uma conta", (): void => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Signup />
            </ThemeProvider>

        );
        expect(getByText("Já tenho uma conta.").closest("a")).toHaveAttribute("href", "/login");
    });

    test("Testando estilo", (): void => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Signup />
            </ThemeProvider>

        );
        // TO-DO
        //expect(container.children[0]).toHaveStyleRule('background', "#CAF0C1"); 
    });
});