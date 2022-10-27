import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { List, ListProps } from './List';

const makeSut = (props: ListProps) => {
    return render(<List {...props}/>);
};
let screen: RenderResult;

describe('<List />', () => {
    const defaultProps = {
        listItems: [
            {
                id: 4439211,
                titel: 'Na maanden is ein-de-lijk Het Geluid geraden',
                urlAlias: 'https://www.rtlboulevard.nl/entertainment/showbizz/artikel/4439211/na-maanden-ein-de-lijk-het-geluid-geraden',
                afbeelding: {
                    crops: [
                        {
                            path: 'https://www.rtlboulevard.nl/sites/default/files/styles/inline_small/public/content/images/2018/10/04/ANP-58356678.jpg?itok=g_As0rjr'
                        },
                    ],
                },
                labelValue: 'De uitschieters van 2018',
            },
        ],
    };

    test('Should not render ul if listItems array is empty', () => {
        screen = makeSut({ listItems: [] });
        expect(screen.container.querySelector('ul')).not.toBeInTheDocument();
    });

    test('Should render ul', () => {
        screen = makeSut(defaultProps);
        expect(screen.container.querySelector('ul')).toBeInTheDocument();
    });
});
