import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("app testing", () => {

  test("header contains correct text", () => {
    const appWrapper = shallow(<App />);

    expect(appWrapper.find(".header").text()).toContain("Articles");
  })

})
