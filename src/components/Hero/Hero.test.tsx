import React from 'react';
import { render } from '@testing-library/react';
import { Hero, HeroProps } from './Hero';

const makeSut = (props: HeroProps) => {
    return render(<Hero {...props} />);
};

describe('<Hero />', () => {
    const defaultProps = {
        title: 'De uitschieters van 2018',
        label: 'Best Geleden',
        description: 'Waar hadden we het dit jaar allemaal over',
        imageUrl: 'https://www.rtlboulevard.nl/sites/default/files/co…s/2018/12/27/thumbnail_Jaaroverzicht%20Banner.jpg',
    };

    test('Should render title correctly', () => {
        const { getByText } = makeSut(defaultProps);
        const titleElement = getByText(/De uitschieters van 2018/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('Should render label correctly', () => {
        const { getByText } = makeSut(defaultProps);
        const labelElement = getByText(/Best Geleden/i);
        expect(labelElement).toBeInTheDocument();
    });

    test('Should render description correctly', () => {
        const { getByText } = makeSut(defaultProps);
        const descriptionElement = getByText(/Waar hadden we het dit jaar allemaal over/i);
        expect(descriptionElement).toBeInTheDocument();
    });

    test('Should render image correctly', () => {
        const { getByAltText } = makeSut(defaultProps);
        const imageElement = getByAltText(/De uitschieters van 2018/i);
        expect(imageElement).toBeInTheDocument();
    });
});
