import TreeNode from './TreeNode';

// Classe que representa a Árvore Binária de Busca
// Possui apenas uma referência para o nó raiz
class BinaryTree {
    root: TreeNode | null;

    // Construtor inicializa a árvore vazia (sem raiz)
    constructor() {
        this.root = null;
    }

    // Função para adicionar um novo elemento na árvore
    // Mantém a propriedade: esquerda < nó < direita
    add(value: number): void {
        // Cria um novo nó com o valor
        const newNode = new TreeNode(value);

        // Se a árvore está vazia, o novo nó se torna a raiz
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        // Caso contrário, encontra o lugar correto para inserir
        this.insertNode(this.root, newNode);
    }

    // Função auxiliar recursiva para inserir um nó na posição correta
    private insertNode(currentNode: TreeNode, newNode: TreeNode): void {
        // Se o novo valor é menor que o nó atual
        if (newNode.value < currentNode.value) {
            // Deve ir para a esquerda
            if (currentNode.left === null) {
                // Se não há filho esquerdo, insere aqui
                currentNode.left = newNode;
            } else {
                // Se há filho esquerdo, continua descendo recursivamente
                this.insertNode(currentNode.left, newNode);
            }
        } else {
            // Se o novo valor é maior ou igual, vai para a direita
            if (currentNode.right === null) {
                // Se não há filho direito, insere aqui
                currentNode.right = newNode;
            } else {
                // Se há filho direito, continua descendo recursivamente
                this.insertNode(currentNode.right, newNode);
            }
        }
    }

    // Função para percorrer a árvore em ordem (in-order traversal)
    // Ordem: esquerda -> nó atual -> direita
    // Isso resulta em valores em ordem crescente
    inOrderTraversal(): void {
        console.log('Percurso em ordem:');
        this.inOrder(this.root);
        console.log(''); // Quebra de linha no final
    }

    // Função auxiliar recursiva para percorrer em ordem
    private inOrder(node: TreeNode | null): void {
        // Caso base: se o nó é null, retorna
        if (node === null) {
            return;
        }

        // Passo 1: Percorre a subárvore esquerda
        this.inOrder(node.left);

        // Passo 2: Visita o nó atual (imprime o valor)
        console.log(node.value);

        // Passo 3: Percorre a subárvore direita
        this.inOrder(node.right);
    }

    // Função para encontrar um elemento na árvore
    // Retorna true se encontrar, false caso contrário
    find(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    // Função auxiliar recursiva para buscar um valor
    private searchNode(node: TreeNode | null, value: number): boolean {
        // Caso base: nó é null, valor não foi encontrado
        if (node === null) {
            return false;
        }

        // Se o valor procurado é igual ao valor do nó atual
        if (value === node.value) {
            return true;
        }

        // Se o valor procurado é menor, busca na subárvore esquerda
        if (value < node.value) {
            return this.searchNode(node.left, value);
        }

        // Se o valor procurado é maior, busca na subárvore direita
        return this.searchNode(node.right, value);
    }
}

export default BinaryTree;
