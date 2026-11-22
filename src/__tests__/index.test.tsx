import '@testing-library/jest-dom';
import { render } from '@lynx-js/react/testing-library';
import { expect, test } from '@rstest/core';
import { App } from '../App';

test('the hello screen shows the name and the promise', async () => {
  const { findByText } = render(<App />);
  expect(await findByText('Mohor')).toBeInTheDocument();
  expect(await findByText('One wallet, every currency')).toBeInTheDocument();
});
