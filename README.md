# 💪 Desafio Técnico em JavaScript

Este repositório apresenta a resolução de 5 desafios técnicos utilizando a linguagem **JavaScript**. Os problemas abordam lógica de programação, análise de dados, estrutura de repetição, sequências matemáticas e manipulação de strings.

---

## ✅ Questão 1 - Estrutura de repetição e soma

### 🔍 Enunciado

Dado o seguinte trecho de código:

```js
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);
```

### 📊 Resultado:

```bash
Resultado da SOMA: 91
```

---

## ✅ Questão 2 - Verificação de número na sequência de Fibonacci

### 🔍 Enunciado

Verifique se um número pertence à sequência de Fibonacci.

### 📄 Código:

```js
function pertenceFibonacci(numero) {
  let a = 0, b = 1;

  while (b < numero) {
    [a, b] = [b, a + b];
  }

  return numero === b || numero === 0;
}
```

### 📈 Testes:

```js
console.log(pertenceFibonacci(21)); // true
console.log(pertenceFibonacci(22)); // false
```

### 📃 Resultado:

```bash
21 pertence à sequência de Fibonacci.
22 NÃO pertence à sequência de Fibonacci.
```

---

## ✅ Questão 3 - Análise de faturamento mensal

### 🔍 Enunciado

Dado um JSON com faturamento diário, calcule:

* Menor valor
* Maior valor
* Dias com faturamento acima da média (ignorando dias com valor 0)

### 📄 Código principal:

```js
const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);
const menor = Math.min(...diasComFaturamento.map(d => d.valor));
const maior = Math.max(...diasComFaturamento.map(d => d.valor));
const media = diasComFaturamento.reduce((s, d) => s + d.valor, 0) / diasComFaturamento.length;
const diasAcimaMedia = diasComFaturamento.filter(d => d.valor > media).length;
```

### 📊 Resultado:

```bash
📉 Menor faturamento: R$ 373.78
📈 Maior faturamento: R$ 48924.24
📊 Dias com faturamento acima da média: 10
```

---

## ✅ Questão 4 - Percentual de faturamento por estado

### 🔍 Enunciado

Calcule o percentual de representação de cada estado dentro do faturamento total.

### 📄 Código:

```js
const estados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const total = Object.values(estados).reduce((t, v) => t + v, 0);

for (let estado in estados) {
  const percentual = (estados[estado] / total) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
```

### 📊 Resultado:

```bash
SP: 37.53%
RJ: 20.29%
MG: 16.18%
ES: 15.04%
Outros: 10.97%
```

---

## ✅ Questão 5 - Inversão de string

### 🔍 Enunciado

Inverta os caracteres de uma string **sem usar reverse()**.

### 📄 Código:

```js
function inverterString(str) {
  let invertida = '';
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  return invertida;
}

console.log(inverterString("Renan")); 

```

### 📃 Resultado:

```bash
naneR
```


