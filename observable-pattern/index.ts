import Observable from "./Observable.ts";

const observable = new Observable<string>();

const subscription1 = (item: string) => {
  console.log(`notified subscription1 with : ${item}`);
};

const subscription2 = (item: string) => {
  console.log(`notified subscription2 with : ${item}`);
};

observable.subscribe(subscription1);
observable.notify("notification1");
observable.subscribe(subscription2);
observable.notify("notification2");
observable.unsubscribe(subscription2);
observable.notify("notification3");
