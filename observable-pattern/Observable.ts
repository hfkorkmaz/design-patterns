class Observable<Type> {
  subscriptions: Array<(item: Type) => void>;

  constructor() {
    this.subscriptions = [];
  }

  subscribe(subscription: (item: Type) => void) {
    this.subscriptions.push(subscription);
  }

  unsubscribe(subscription: (item: Type) => void) {
    this.subscriptions = this.subscriptions.filter(
      (sub) => sub !== subscription
    );
  }

  notify(item: Type) {
    this.subscriptions.forEach((subscription) => {
      subscription.call(this, item);
    });
  }
}
export default Observable;
