# Educrat - Professional LMS Online Education Course ReactJS Template

## [English]

### Overview

This project is a ReactJS template for online education courses. The following changes were made to simplify and optimize the template:

### Changes Summary:

1. **Home Pages**: Retained only **Home 1** and removed all other home pages.
    - Removed paths:
        - `src/pages/home2.jsx`
        - `src/pages/home3.jsx`
        - `src/pages/home4.jsx`
2. **About Pages**: Retained only **About 1** and removed all other about pages.
    - Removed paths:
        - `src/pages/about2.jsx`
        - `src/pages/about3.jsx`
3. **Contact Pages**: Retained only **Contact 1** and removed all other contact pages.
    - Removed paths:
        - `src/pages/contact2.jsx`
        - `src/pages/contact3.jsx`
4. **Course Pages**: Retained only **Course 6** and removed all other course pages.
    - Removed paths:
        - `src/pages/course1.jsx`
        - `src/pages/course2.jsx`
        - `src/pages/course3.jsx`
        - `src/pages/course4.jsx`
        - `src/pages/course5.jsx`
5. **Shops Section**: Removed the **Shops** section and retained only the **Course Cart**.
    - Removed paths:
        - `src/pages/shop.jsx`
6. **Courses Pages**: Retained only **Courses 6** and removed all other courses pages.
    - Removed paths:
        - `src/pages/courses1.jsx`
        - `src/pages/courses2.jsx`
        - `src/pages/courses3.jsx`
        - `src/pages/courses4.jsx`
        - `src/pages/courses5.jsx`
7. **Events Section**: Removed **EventSing** and retained only **Event 1**.
    - Removed paths:
        - `src/pages/eventSing.jsx`
8. **Menu**: Adjusted the menu to use buttons only for navigation.
9. **Single Course Pages**: Retained only **courses-single-6** and removed all other single course pages.
    - Removed paths:
        - `src/pages/courses-single-1.jsx`
        - `src/pages/courses-single-2.jsx`
        - `src/pages/courses-single-3.jsx`
        - `src/pages/courses-single-4.jsx`
        - `src/pages/courses-single-5.jsx`
10. **Instructors Section**: Removed the **Instructors** section entirely.
    - Removed paths:
        - `src/pages/instructors.jsx`
11. **Footer Links**: Updated the footer links to reflect the retained pages and sections.
12. **Mobile Menu**: Updated the mobile menu to display only buttons with active states.
13. **404 Page**: Fixed the "Go to Home" button to correctly link to the home page.
14. **Code Formatting**: Reformatted various files for consistency and readability.
15. **Header Components**: Removed the `HeaderExplore` component from `HeaderSeven.jsx`.
    - Modified paths:
        - `src/components/layout/headers/HeaderSeven.jsx`
16. **Project Logo**: Updated the project logo to reflect the new branding. The logo file is located at `public/assets/img/logo.png`.
17. **Testimonials Section**: Updated the title in the `TestimonialsOne` component to "Depoimento de alunos".
    - Modified paths:
        - `src/components/common/TestimonialsOne.jsx`
18. **Highlights Section**: Added a new `Highlights` section to showcase the institution's unique features.
    - New file:
        - `src/components/homes/highlights/Highlights.jsx`
    - Integrated into:
        - `src/pages/homes/home-1/index.jsx`
19. **Header Logo Dimensions**: Updated the logo dimensions in the `Header` component to `70px` by `70px`.
    - Modified paths:
        - `src/components/layout/headers/Header.jsx`
20. **Testimonials Data**: Updated the testimonials data to include new fields like `title` and updated avatar paths.
    - Modified paths:
        - `src/data/tesimonials.js`
21. **Testimonials Component**: Adjusted the `TestimonialsOne` component to use the new `title` and `avatar` fields.
    - Modified paths:
        - `src/components/common/TestimonialsOne.jsx`
22. **Updated Avatar Images**: Replaced and added new avatar images for testimonials.
    - Modified paths:
        - `public/assets/img/avatars/`
23. **Course Data**: Updated course data to include new images and descriptions.
    - Modified paths:
        - `src/data/courses.js`
24. **Blog Pages**: Removed unused blog pages and updated metadata for the remaining pages.
    - Removed paths:
        - `src/pages/blogs/blog-list-1/index.jsx`
        - `src/pages/blogs/blog-list-2/index.jsx`
    - Modified paths:
        - `src/pages/blogs/blog-list-3/index.jsx`
25. **Cart Pages**: Updated metadata for cart-related pages.
    - Modified paths:
        - `src/pages/cartPages/course-cart/index.jsx`
        - `src/pages/cartPages/course-checkout/index.jsx`
        - `src/pages/cartPages/event-cart/index.jsx`
        - `src/pages/cartPages/event-checkout/index.jsx`
26. **Event Pages**: Updated metadata for event-related pages.
    - Modified paths:
        - `src/pages/events/event-list-2/index.jsx`
27. **Home Page**: Integrated the `Highlights` section and updated metadata.
    - Modified paths:
        - `src/pages/homes/home-1/index.jsx`
28. **Index Page**: Updated metadata for the main index page.
    - Modified paths:
        - `src/pages/index.jsx`

---

## [Português]

### Visão Geral

Este projeto é um template ReactJS para cursos de educação online. As seguintes alterações foram realizadas para simplificar e otimizar o template:

### Resumo das Alterações:

1. **Páginas Iniciais**: Mantida apenas a página **Início 1** e removidas todas as outras páginas iniciais.
    - Caminhos removidos:
        - `src/pages/home2.jsx`
        - `src/pages/home3.jsx`
        - `src/pages/home4.jsx`
2. **Páginas Sobre**: Mantida apenas a página **Sobre 1** e removidas todas as outras páginas sobre.
    - Caminhos removidos:
        - `src/pages/about2.jsx`
        - `src/pages/about3.jsx`
3. **Páginas de Contato**: Mantida apenas a página **Contato 1** e removidas todas as outras páginas de contato.
    - Caminhos removidos:
        - `src/pages/contact2.jsx`
        - `src/pages/contact3.jsx`
4. **Páginas de Cursos**: Mantida apenas a página **Curso 6** e removidas todas as outras páginas de cursos.
    - Caminhos removidos:
        - `src/pages/course1.jsx`
        - `src/pages/course2.jsx`
        - `src/pages/course3.jsx`
        - `src/pages/course4.jsx`
        - `src/pages/course5.jsx`
5. **Seção de Lojas**: Removida a seção **Lojas** e mantido apenas o **Carrinho de Cursos**.
    - Caminhos removidos:
        - `src/pages/shop.jsx`
6. **Páginas de Cursos**: Mantida apenas a página **Cursos 6** e removidas todas as outras páginas de cursos.
    - Caminhos removidos:
        - `src/pages/courses1.jsx`
        - `src/pages/courses2.jsx`
        - `src/pages/courses3.jsx`
        - `src/pages/courses4.jsx`
        - `src/pages/courses5.jsx`
7. **Seção de Eventos**: Removido o **EventSing** e mantido apenas o **Evento 1**.
    - Caminhos removidos:
        - `src/pages/eventSing.jsx`
8. **Menu**: Ajustado o menu para usar apenas botões para navegação.
9. **Páginas de Cursos Individuais**: Mantida apenas a página **cursos-individuais-6** e removidas todas as outras páginas de cursos individuais.
    - Caminhos removidos:
        - `src/pages/courses-single-1.jsx`
        - `src/pages/courses-single-2.jsx`
        - `src/pages/courses-single-3.jsx`
        - `src/pages/courses-single-4.jsx`
        - `src/pages/courses-single-5.jsx`
10. **Seção de Instrutores**: Removida completamente a seção de **Instrutores**.
    - Caminhos removidos:
        - `src/pages/instructors.jsx`
11. **Links do Rodapé**: Atualizados os links do rodapé para refletir as páginas e seções mantidas.
12. **Menu Mobile**: Atualizado o menu mobile para exibir apenas botões com estados ativos.
13. **Página 404**: Corrigido o botão "Ir para Início" para redirecionar corretamente à página inicial.
14. **Formatação de Código**: Reformatação de vários arquivos para consistência e legibilidade.
15. **Componentes de Cabeçalho**: Removido o componente `HeaderExplore` do arquivo `HeaderSeven.jsx`.
    - Caminhos modificados:
        - `src/components/layout/headers/HeaderSeven.jsx`
16. **Logo do Projeto**: Atualizado o logo do projeto para refletir a nova identidade visual. O arquivo do logo está localizado em `public/assets/img/logo.png`.
17. **Seção de Depoimentos**: Atualizado o título no componente `TestimonialsOne` para "Depoimento de alunos".
    - Caminhos modificados:
        - `src/components/common/TestimonialsOne.jsx`
18. **Seção de Destaques**: Adicionada uma nova seção `Highlights` para destacar os diferenciais da instituição.
    - Novo arquivo:
        - `src/components/homes/highlights/Highlights.jsx`
    - Integrado em:
        - `src/pages/homes/home-1/index.jsx`
19. **Dimensões do Logo no Cabeçalho**: Atualizadas as dimensões do logo no componente `Header` para `70px` por `70px`.
    - Caminhos modificados:
        - `src/components/layout/headers/Header.jsx`
20. **Dados de Depoimentos**: Atualizados os dados de depoimentos para incluir novos campos como `title` e caminhos de avatar atualizados.
    - Caminhos modificados:
        - `src/data/tesimonials.js`
21. **Componente de Depoimentos**: Ajustado o componente `TestimonialsOne` para usar os novos campos `title` e `avatar`.
    - Caminhos modificados:
        - `src/components/common/TestimonialsOne.jsx`
22. **Imagens de Avatar Atualizadas**: Substituídas e adicionadas novas imagens de avatar para os depoimentos.
    - Caminhos modificados:
        - `public/assets/img/avatars/`
23. **Dados de Cursos**: Atualizados os dados de cursos com novas imagens e descrições.
    - Caminhos modificados:
        - `src/data/courses.js`
24. **Páginas de Blog**: Removidas páginas de blog não utilizadas e atualizados os metadados das páginas restantes.
    - Caminhos removidos:
        - `src/pages/blogs/blog-list-1/index.jsx`
        - `src/pages/blogs/blog-list-2/index.jsx`
    - Caminhos modificados:
        - `src/pages/blogs/blog-list-3/index.jsx`
25. **Páginas de Carrinho**: Atualizados os metadados das páginas relacionadas ao carrinho.
    - Caminhos modificados:
        - `src/pages/cartPages/course-cart/index.jsx`
        - `src/pages/cartPages/course-checkout/index.jsx`
        - `src/pages/cartPages/event-cart/index.jsx`
        - `src/pages/cartPages/event-checkout/index.jsx`
26. **Páginas de Eventos**: Atualizados os metadados das páginas relacionadas a eventos.
    - Caminhos modificados:
        - `src/pages/events/event-list-2/index.jsx`
27. **Página Inicial**: Integrada a seção `Highlights` e atualizados os metadados.
    - Caminhos modificados:
        - `src/pages/homes/home-1/index.jsx`
28. **Página Index**: Atualizados os metadados da página principal.
    - Caminhos modificados:
        - `src/pages/index.jsx`
