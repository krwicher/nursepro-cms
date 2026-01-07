import * as migration_20251016_200500_baseline from './20251016_200500_baseline';
import * as migration_20251020_163819 from './20251020_163819';
import * as migration_20251020_163834 from './20251020_163834';
import * as migration_20251021_165557 from './20251021_165557';
import * as migration_20251021_170926 from './20251021_170926';
import * as migration_20251028_202517 from './20251028_202517';
import * as migration_20251115_102608 from './20251115_102608';
import * as migration_20260103_203313 from './20260103_203313';

export const migrations = [
  {
    up: migration_20251016_200500_baseline.up,
    down: migration_20251016_200500_baseline.down,
    name: '20251016_200500_baseline',
  },
  {
    up: migration_20251020_163819.up,
    down: migration_20251020_163819.down,
    name: '20251020_163819',
  },
  {
    up: migration_20251020_163834.up,
    down: migration_20251020_163834.down,
    name: '20251020_163834',
  },
  {
    up: migration_20251021_165557.up,
    down: migration_20251021_165557.down,
    name: '20251021_165557',
  },
  {
    up: migration_20251021_170926.up,
    down: migration_20251021_170926.down,
    name: '20251021_170926',
  },
  {
    up: migration_20251028_202517.up,
    down: migration_20251028_202517.down,
    name: '20251028_202517',
  },
  {
    up: migration_20251115_102608.up,
    down: migration_20251115_102608.down,
    name: '20251115_102608',
  },
  {
    up: migration_20260103_203313.up,
    down: migration_20260103_203313.down,
    name: '20260103_203313'
  },
];
