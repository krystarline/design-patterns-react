export interface IObserver {
  getName(): void;
  getAlarms(): void;
  getIsFollowed(): boolean;
  setIsFollowed(): void;
  alarm(message: string): void;
}
