# 📝 DevNotes - Code-Friendly Notepad

Um bloco de notas minimalista para desenvolvedores, com realce de sintaxe em tempo real, temas personalizáveis e salvamento automático. Ideal para anotações rápidas de código!

![Preview](https://via.placeholder.com/800x500.png?text=DevNotes+Preview+Light+and+Dark+Themes)

## ✨ Funcionalidades

- **Editor com Realce de Sintaxe**  
  Suporta múltiplas linguagens via Prism.js
- **Temas Claro/Escuro**  
  Alternância instantânea com persistência de preferência
- **Gestão de Notas**  
  - Criar/Deletar notas ilimitadas
  - Layout responsivo em grid
  - Salvamento automático no `localStorage`
- **Atalhos de Teclado**  
  `Ctrl + N` para nova nota
- **UI Developer-Friendly**  
  Estilo VS Code-inspired com controles de janela

## 🚀 Como Usar

1. **Nova Nota**  
   Clique em `➕ New Note` ou pressione `Ctrl + N`
2. **Escreva Código**  
   Digite na área de texto - o realce é aplicado automaticamente
3. **Organize**  
   Notas são dispostas automaticamente em grid
4. **Delete**  
   Clique em `🗑️ Delete` em qualquer nota para remover

## 🎨 Personalização

**Alternar Tema**  
Clique no botão `🌓 Theme` para alternar entre temas claro/escuro

**Variáveis CSS**  
Personalize cores editando as variáveis no arquivo `styles.css`:
```css
:root {
    --accent-color: #569cd6; /* Cor principal */
    --bg-color: #1e1e1e;     /* Fundo dark mode */
    --text-color: #d4d4d4;   /* Texto dark mode */
}
