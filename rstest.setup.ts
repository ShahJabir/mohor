import { snapshotManager, updateSpread } from '@lynx-js/react/internal';

// Workaround for @lynx-js/react testing-library issue:
// When <page ...> is used in JSX, Page.js is imported in the test environment where __LEPUS__ is false.
// As a result, Page.js skips initializing snapshotManager.values.get('root').update[0],
// causing "TypeError: this.__snapshot_def.update[index] is not a function" when <page> props update.
const rootDef = snapshotManager.values.get('root');
if (rootDef && !rootDef.update?.[0]) {
  rootDef.update ??= [];
  rootDef.update[0] = (snapshot, index, oldValue) => {
    updateSpread(snapshot, index, oldValue, 0, false);
  };
}
