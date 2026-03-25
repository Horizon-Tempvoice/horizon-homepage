export interface CacheEntry<T> {
  data: T;
  expires: number;
}

export function createCacheEntry<T>(data: T): CacheEntry<T> {
  return {
    data,
    expires: Date.now() + 30 * 60 * 1000,
  };
}

export function isCacheValid<T>(entry: CacheEntry<T>): boolean {
  return Date.now() < entry.expires;
}
