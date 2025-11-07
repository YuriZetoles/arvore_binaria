import TreeNode from './TreeNode';

// Classe que representa a Árvore Binária de Busca
class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Função para adicionar um novo elemento na árvore
    add(value: number): void {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        this.insertNode(this.root, newNode);
    }

    private insertNode(currentNode: TreeNode, newNode: TreeNode): void {
        if (newNode.value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.insertNode(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this.insertNode(currentNode.right, newNode);
            }
        }
    }

    // Função para percorrer a árvore em ordem
    inOrderTraversal(): void {
        console.log('Percurso em ordem:');
        this.inOrder(this.root);
        console.log('');
    }

    // Função auxiliar recursiva para percorrer em ordem
    private inOrder(node: TreeNode | null): void {
        if (node === null) {
            return;
        }

        this.inOrder(node.left);

        console.log(node.value);

        this.inOrder(node.right);
    }

    // Função para encontrar um elemento na árvore
    find(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    // Função auxiliar recursiva para buscar um valor
    private searchNode(node: TreeNode | null, value: number): boolean {
        if (node === null) {
            return false;
        }

        if (value === node.value) {
            return true;
        }

        if (value < node.value) {
            return this.searchNode(node.left, value);
        }

        return this.searchNode(node.right, value);
    }
}

export default BinaryTree;
