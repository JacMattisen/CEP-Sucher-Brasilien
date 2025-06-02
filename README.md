# 📍 CEP-Sucher - Brasilien 🌍

React-Anwendung zur Suche brasilianischer CEPs mit detaillierten Adressinformationen über die öffentliche API [ViaCEP](https://viacep.com.br/).

---

## 💻 Verwendete Technologien

- React (Hooks: useState)  
- Axios für HTTP-Anfragen  
- React Icons für Icons  
- CSS für ein responsives und modernes Styling  

---

Basierend auf der Lektion von Sujeito Programador (Matheus Fraga)

---

## ⚙️ Projektstruktur

- `src/App.js`: Hauptkomponente mit Suchlogik und Datenanzeige  
- `src/service/api.js`: API-Konfiguration für ViaCEP mit Axios  
- `src/styles.css`: Styles für Layout und Responsivität  

---

## 📦 Hauptabhängigkeiten

- axios  
- react-icons  
- react-scripts  

---

## 📝 Funktionen

- Suche nach gültigen CEPs mit einfacher Validierung  
- Anzeige vollständiger Adressdaten (Straße, Zusatz, Stadtteil, Stadt, Bundesstaat)  
- Saubere und responsive Benutzeroberfläche mit einfacher Animation im Titel  
- Visuelles Feedback und Warnungen bei Fehlern oder leerem Eingabefeld  

---

## 🎨 Design

Das Layout verwendet einen sanften Farbverlauf als Hintergrund und einen Container mit Schatten, um das Suchfeld hervorzuheben. Moderne Icons verbessern die Benutzerfreundlichkeit.

## ♿ Acessibility Improvements
Drei Verbesserungen wurden vorgenommen, um die Zugänglichkeit des Codes zu erhöhen:

Eingabefeld für Postleitzahl mit verstecktem Label:
Ein <label> mit der Klasse .visually-hidden wurde dem Eingabefeld hinzugefügt, damit Screenreader den Zweck des Feldes korrekt vorlesen, auch wenn das Label visuell nicht angezeigt wird.

Button mit aria-label:
Der Suchbutton, der nur ein Icon zeigte, erhielt ein aria-label="Buscar CEP". Dadurch können Screenreader-Nutzer die Funktion des Buttons verstehen.

Sichtbare Fokus-Markierung bei Tab-Navigation:
Es wurde ein :focus-Stil im CSS definiert, damit Eingabefelder und Buttons beim Navigieren mit der Tab-Taste einen sichtbaren Umriss anzeigen. Das erleichtert die Nutzung ohne Maus.

---

## 🚧 Geplante Verbesserungen

- **Unterstützung für mehrere Länder** (z.B. Deutschland) mit Länderauswahl für internationale Suchen.  

---
---

# 📍 Buscador de CEP - Brasil 🌍

Aplicativo React para buscar CEPs brasileiros com informações detalhadas sobre endereço usando a API pública [ViaCEP](https://viacep.com.br/).

---

## 💻 Tecnologias usadas

- React (Hooks: useState)
- Axios para requisições HTTP
- React Icons para ícones
- CSS para estilização responsiva e moderna

---

Com base na aula do Sujeito Programador (Matheus Fraga)

---

## ⚙️ Estrutura do projeto
src/App.js: componente principal com lógica da busca e exibição dos dados

src/service/api.js: configuração da API ViaCEP usando axios

src/styles.css: estilos para layout e responsividade

## 📦 Dependências principais

axios

react-icons

react-scripts

## 📝 Funcionalidades

Busca de CEP válido com validação básica

Exibição do endereço completo (logradouro, complemento, bairro, cidade, estado)

Interface limpa e responsiva com animação simples no título

Feedback visual e alertas em caso de erro ou campo vazio

## 🎨 Design
O layout usa um fundo degradê suave e um container com sombra para destacar o campo de busca. Ícones modernos para melhorar a usabilidade.

## ♿ Melhorias de Acessibilidade
Foram implementadas três melhorias no código para torná-lo mais acessível:

Campo de CEP com rótulo oculto:
Foi adicionado um <label> com a classe .visually-hidden ao campo de entrada de CEP. Isso permite que leitores de tela anunciem corretamente o propósito do campo, mesmo que o rótulo não esteja visível na tela.

Botão com aria-label:
O botão de busca, que exibia apenas um ícone, recebeu um atributo aria-label="Buscar CEP". Isso garante que usuários com leitores de tela entendam a função do botão.

Destaque visual ao navegar com Tab:
Foi adicionado um estilo :focus no CSS para que campos e botões exibam um contorno visível ao receberem foco via teclado (Tab). Isso melhora a navegação para pessoas que não usam mouse.

## 🚧 Melhorias planejadas

- **Suporte a múltiplos países** (exemplo: Alemanha) com seleção de país para buscas internacionais.

---