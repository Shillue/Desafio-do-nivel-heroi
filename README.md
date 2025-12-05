# 🦸‍♂️ Classificador de Nível de Herói  

Projeto desenvolvido como parte do Desafio do Felipão no curso da DIO (Digital Innovation One).
Este repositório contém duas versões do classificador: uma versão simples e outra interativa com validação e repetição.
 
---

## 📌 Sobre o Desafio  
O objetivo é criar um programa capaz de classificar um herói de acordo com sua quantidade de **XP (experiência)**.

---

### 🛠️ O Que deve ser utilizado

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

---

## 🏅 Tabela de Classificação

| Faixa de XP          | Nível         |
|----------------------|---------------|
| ⭐ 0 a 1000           | **Ferro**      |
| 🥉 1001 a 2000       | **Bronze**     |
| 🥈 2001 a 5000       | **Prata**      |
| 🥇 5001 a 7000       | **Ouro**       |
| 💠 7001 a 8000       | **Platina**    |
| 🔺 8001 a 9000       | **Ascendente** |
| 🔱 9001 a 10000      | **Imortal**    |
| 🌟 10001 ou mais     | **Radiante**   |

---

## 📝 Saída esperada  

Ao final deve se exibir uma mensagem:    
"O Herói de nome **{nome}** está no nível de **{nivel}**"

---

## 📁 Arquivos do Projeto

### **1️⃣ index.js**  
Versão simples do desafio:  
- Código direto sem interação  
- Nome e XP definidos no próprio arquivo  
- Apenas executa e imprime o nível  
- Ideal para entender a lógica básica

---

### **2️⃣ index-v2.js**  
Versão avançada e interativa:  
✨ **Melhorias incluídas:**  
- Entrada de dados pelo usuário usando **prompt-sync**  
- Pergunta se o usuário quer iniciar  
- Verifica se a opção digitada é válida  
- Loop que permite consultar vários heróis  
- Exibe o nível de acordo com o XP digitado  
- Permite encerrar o programa digitando "2"

## 📌 Como executar o projeto

### Instale o prompt-sync (apenas para a versão v2):
```bash
npm install prompt-sync
```

### Execute qualquer versão:
```bash
node index.js
````
ou
```bash
node index-v2.js
````
---

## 👨‍💻 Autor

Feito com 💖 por [Shilluê](https://www.linkedin.com/in/shillu%C3%AA/) para o desafio da [DIO](https://www.dio.me/)
