# Árvore Binária de Busca em TypeScript

## 📚 O que foi implementado

Este projeto implementa uma **Árvore Binária de Busca** (Binary Search Tree) em TypeScript de forma didática e passo a passo.

## 🏗️ Estrutura do Projeto

### 1. **TreeNode.ts** - Classe do Nó
Representa um elemento individual da árvore com:
- `value`: o valor armazenado no nó
- `left`: referência para o filho esquerdo
- `right`: referência para o filho direito

### 2. **BinaryTree.ts** - Classe da Árvore
Representa a árvore binária completa com:
- `root`: referência para o nó raiz

#### Operações implementadas:

**a) `add(value)` - Adicionar elementos**
- Insere um novo valor mantendo a propriedade: valores menores à esquerda, maiores à direita
- Usa recursão para encontrar a posição correta

**b) `inOrderTraversal()` - Percorrer em ordem**
- Percorre: esquerda → nó atual → direita
- Resultado: valores em ordem crescente

**c) `find(value)` - Encontrar elementos**
- Busca um valor na árvore
- Retorna `true` se encontrado, `false` caso contrário

### 3. **main.ts** - Arquivo de Testes
Demonstra todas as operações com 5 testes:
1. Criação da árvore com 5 elementos
2. Percurso em ordem
3. Adição de novos elementos
4. Busca de elementos (existentes e não existentes)
5. Segunda árvore com valores diferentes

## 🚀 Como executar

### Instalar dependências:
```bash
npm install typescript ts-node @types/node --save-dev
```

### Executar o programa:
```bash
npm start
```

## 📖 Conceitos Fundamentais

### Árvore Binária de Busca
- Cada nó tem no máximo 2 filhos (esquerdo e direito)
- **Regra de ordenação**: para qualquer nó:
  - Todos os valores à **esquerda** são **menores**
  - Todos os valores à **direita** são **maiores ou iguais**

### Exemplo de estrutura:
```
        50
       /  \
      30   70
     / \   / \
    20 40 60 80
```

Percurso em ordem: 20, 30, 40, 50, 60, 70, 80 ✓

## ✅ Validação

Cada teste verifica:
- ✓ Criação correta da árvore
- ✓ Inserção mantém a ordenação
- ✓ Percurso mostra valores em ordem crescente
- ✓ Busca encontra valores existentes
- ✓ Busca retorna falso para valores inexistentes
