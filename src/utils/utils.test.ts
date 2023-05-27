import React from 'react';
import { render, screen } from '@testing-library/react';
import { median, mean, mode } from './index';

describe("Test Mean Mode Median", () => {
    const mockData = [10, 15, 20, 25, 15, 30, 35, 25, 40];
    it('get Mean', async () => {
        const getMean = await mean(mockData);
        expect(getMean).toEqual(23.89)
    })
    it('get Median', async () => {
        const getMean = await median(mockData);
        expect(getMean).toEqual(25)
    })
    it('get Mode', async () => {
        const getMean = await mode(mockData);
        expect(getMean).toHaveLength(2)
    })
})
