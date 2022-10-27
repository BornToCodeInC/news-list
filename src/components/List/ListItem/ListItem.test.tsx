import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ListItem, ListItemProps } from './ListItem';

const makeSut = (props: ListItemProps) => {
    return render(<ListItem {...props} />);
};

describe('<ListItem />', () => {
    const defaultProps = {
        articleUrl: 'https://www.rtlboulevard.nl/entertainment/showbizz/artikel/4439211/na-maanden-ein-de-lijk-het-geluid-geraden',
        imageUrl: 'https://www.rtlboulevard.nl/sites/default/files/styles/inline_small/public/content/images/2018/10/04/ANP-58356678.jpg?itok=g_As0rjr',
        label: 'De uitschieters van 2018',
        title: 'Na maanden is ein-de-lijk Het Geluid geraden',
    };

    test('Should render title correctly', () => {
        const { getByText } = makeSut(defaultProps);
        const titleElement = getByText(/Na maanden is ein-de-lijk Het Geluid geraden/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('Should render label correctly', () => {
        const { getByText } = makeSut(defaultProps);
        const labelElement = getByText(/De uitschieters van 2018/i);
        expect(labelElement).toBeInTheDocument();
    });

    test('Should render link correctly', async () => {
        const screen: RenderResult = makeSut(defaultProps);
        expect(screen.container.querySelector('a')?.href)
            .toBe(
                'https://www.rtlboulevard.nl/entertainment/showbizz/artikel/4439211/na-maanden-ein-de-lijk-het-geluid-geraden'
            );
    });

    test('Should render image correctly', () => {
        const { getByAltText } = makeSut(defaultProps);
        const imageElement = getByAltText(/Na maanden is ein-de-lijk Het Geluid geraden/i);
        expect(imageElement).toBeInTheDocument();
    });
});

