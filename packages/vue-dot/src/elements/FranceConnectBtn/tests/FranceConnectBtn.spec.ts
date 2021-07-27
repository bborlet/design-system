import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FranceConnectBtn from '../FranceConnectBtn.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('FranceConnectBtn', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FranceConnectBtn);

		expect(html(wrapper)).toMatchSnapshot();
	});
});