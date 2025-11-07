import BinaryTree from './BinaryTree';

console.log('Teste 1: Criando a árvore com 5 elementos');
const tree = new BinaryTree();

// Inserindo os elementos seguindo as regras de ordenação
tree.add(50);
tree.add(30);
tree.add(70);
tree.add(20);
tree.add(40);

console.log('Elementos inseridos: 50, 30, 70, 20, 40');

console.log('Teste 2: Percorrendo a árvore em ordem');
tree.inOrderTraversal();
console.log('Valores devem aparecer em ordem crescente: 20, 30, 40, 50, 70\n');

console.log('Teste 3: Adicionando novos elementos');
tree.add(60);
tree.add(80);

tree.inOrderTraversal();
console.log('Valores devem aparecer em ordem: 20, 30, 40, 50, 60, 70, 80\n');

console.log('Teste 4: Buscando elementos na árvore');

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

console.log('\nTeste 5: Criando uma segunda árvore com valores diferentes');
const tree2 = new BinaryTree();
tree2.add(15);
tree2.add(10);
tree2.add(25);
tree2.add(5);
tree2.add(12);

tree2.inOrderTraversal();
console.log('Valores devem aparecer em ordem: 5, 10, 12, 15, 25\n');
