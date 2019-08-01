import isCircle, { NodeList } from "../../code/chain/141-LinkedListCycle";

test('LinkedListCycle1', () => {
    let head = new NodeList([6, 1, 2, 5, 7, 9]);
    head.next.next.next.next.next.next = head.next;
    expect(isCircle(head)).toBe(true);
});

test('LinkedListCycle2W', () => {
    let head = new NodeList([6, 1, 2, 5, 7, 9]);
    expect(isCircle(head)).toBe(false);
});