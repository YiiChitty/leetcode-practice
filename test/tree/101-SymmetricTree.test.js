import Tree, { Node } from '../../code/tree/101-SymmetricTree'

test('TREE1', () => {
    let root = new Tree([1, 2, 2, 3, 4, 4, 3])
    expect(Tree.isSymmetry(root)).toBe(true);
})
test('TREE2', () => {
    let root = new Tree([1, 2, 2, null, 3, null, 3])
    expect(Tree.isSymmetry(root)).toBe(false);
})