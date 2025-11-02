// Classe que representa um nó individual da árvore
// Cada nó possui um valor e referências para seus filhos (esquerdo e direito)
class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    // Construtor inicializa o nó com um valor
    // Os filhos começam como null (sem filhos)
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default TreeNode;
