import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallow } from 'enzyme';
import App from '../../src/App';

const feature = loadFeature('./specs/features/App.feature');

defineFeature(feature, test => {
    test('Visiting the app landing page', ({given, when, then}) => {
        let AppWrapper;
        given('I am a user wanting to see the app', () => {});
        when('I load the app', () => {
            AppWrapper = shallow(<App />);
        });
        then('the app component renders a logo image', () => {
            expect(AppWrapper.find('.App-logo')).toHaveLength(1);
        });
    })
})