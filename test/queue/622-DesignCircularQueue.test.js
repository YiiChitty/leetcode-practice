import MycircularQueue from '../../code/queue/622-DesignCircularQueue.js';

test('DesignCircularQueue', () => {
    let queue = new MycircularQueue(4);
    queue.enQueue(2);
    expect(queue.isFull()).toBe(false);
    expect(queue.enQueue(1)).toBe(true);
    expect(queue.Front()).toBe(2);
    expect(queue.Rear()).toBe(1);
})