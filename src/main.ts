import BinaryTree from './BinaryTree';

console.log('=== ÁRVORE BINÁRIA DE BUSCA ===\n');

// ===== TESTE 1: Criar a árvore e inserir elementos iniciais =====
console.log('--- TESTE 1: Criando a árvore com 5 elementos ---');
const tree = new BinaryTree();

// Inserindo os elementos seguindo as regras de ordenação
tree.add(50);  // Este será a raiz
tree.add(30);  // Menor que 50, vai para esquerda
tree.add(70);  // Maior que 50, vai para direita
tree.add(20);  // Menor que 50, vai para esquerda; menor que 30, vai para esquerda de 30
tree.add(40);  // Menor que 50, vai para esquerda; maior que 30, vai para direita de 30

console.log('Elementos inseridos: 50, 30, 70, 20, 40');
console.log('Estrutura da árvore:');
console.log('        50');
console.log('       /  \\');
console.log('      30   70');
console.log('     / \\');
console.log('    20  40');
console.log('');

// ===== TESTE 2: Percorrer a árvore em ordem =====
console.log('--- TESTE 2: Percorrendo a árvore em ordem ---');
tree.inOrderTraversal();
console.log('Valores devem aparecer em ordem crescente: 20, 30, 40, 50, 70\n');

// ===== TESTE 3: Adicionar novos elementos =====
console.log('--- TESTE 3: Adicionando novos elementos ---');
console.log('Adicionando o valor 60...');
tree.add(60);  // Maior que 50, vai para direita; menor que 70, vai para esquerda de 70

console.log('Adicionando o valor 80...');
tree.add(80);  // Maior que 50, vai para direita; maior que 70, vai para direita de 70

console.log('\nEstrutura da árvore após inserções:');
console.log('        50');
console.log('       /  \\');
console.log('      30   70');
console.log('     / \\  / \\');
console.log('    20 40 60 80');
console.log('');

console.log('Percorrendo a árvore após as inserções:');
tree.inOrderTraversal();
console.log('Valores devem aparecer em ordem: 20, 30, 40, 50, 60, 70, 80\n');

// ===== TESTE 4: Buscar elementos na árvore =====
console.log('--- TESTE 4: Buscando elementos na árvore ---');

// Testando valores que existem
const searchValue1 = 40;
const found1 = tree.find(searchValue1);
console.log(`Buscando o valor ${searchValue1}: ${found1 ? 'ENCONTRADO ✓' : 'NÃO ENCONTRADO ✗'}`);

const searchValue2 = 70;
const found2 = tree.find(searchValue2);
console.log(`Buscando o valor ${searchValue2}: ${found2 ? 'ENCONTRADO ✓' : 'NÃO ENCONTRADO ✗'}`);

const searchValue3 = 20;
const found3 = tree.find(searchValue3);
console.log(`Buscando o valor ${searchValue3}: ${found3 ? 'ENCONTRADO ✓' : 'NÃO ENCONTRADO ✗'}`);

// Testando valores que NÃO existem
const searchValue4 = 25;
const found4 = tree.find(searchValue4);
console.log(`Buscando o valor ${searchValue4}: ${found4 ? 'ENCONTRADO ✓' : 'NÃO ENCONTRADO ✗'}`);

const searchValue5 = 100;
const found5 = tree.find(searchValue5);
console.log(`Buscando o valor ${searchValue5}: ${found5 ? 'ENCONTRADO ✓' : 'NÃO ENCONTRADO ✗'}`);

console.log('\n--- TESTE 5: Criando uma segunda árvore com valores diferentes ---');
const tree2 = new BinaryTree();
tree2.add(15);
tree2.add(10);
tree2.add(25);
tree2.add(5);
tree2.add(12);

console.log('Elementos inseridos na segunda árvore: 15, 10, 25, 5, 12');
console.log('\nPercurso em ordem da segunda árvore:');
tree2.inOrderTraversal();
console.log('Valores devem aparecer em ordem: 5, 10, 12, 15, 25\n');

console.log('=== TODOS OS TESTES CONCLUÍDOS ===');
