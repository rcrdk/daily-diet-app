// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
