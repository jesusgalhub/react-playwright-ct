import { test, expect } from '@playwright/experimental-ct-react17';
import App from './App';

test('should work', async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toContainText('Vite + Reactcount ');
});
