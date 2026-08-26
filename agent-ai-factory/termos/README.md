# EUROFARMA AI-AGENT FACTORY — Legal Pages

Pacote estático com:
- `privacidade.html`
- `termos.html`
- `index.html`
- `assets/styles.css`
- `assets/site.js`
- `assets/eurofarma-logo.png`

## Uso no Microsoft 365 Copilot Agent Builder

A Microsoft exige, para submissão do agente ao catálogo organizacional:
1. URL HTTPS válida e resolvível para a Política de Privacidade.
2. URL HTTPS válida e resolvível para os Termos de Uso.
3. As duas URLs devem ser acessíveis a todas as pessoas da organização que possam instalar o agente.
4. URLs placeholder não são adequadas para produção.

Exemplo após hospedagem:
- `https://seu-dominio/ai-agent-factory/privacidade.html`
- `https://seu-dominio/ai-agent-factory/termos.html`

## Hospedagem recomendada

Use infraestrutura aprovada pela Eurofarma, por exemplo:
- site corporativo / subdomínio HTTPS;
- Azure Static Web Apps / App Service sob governança corporativa;
- outro host HTTPS aprovado e acessível ao público interno relevante.

Se o Agent Store da organização exigir acesso antes da instalação, confirme que a autenticação não impede a abertura das páginas para o público-alvo.

## Antes da publicação

Esta entrega é uma minuta técnica/jurídica. Validar:
- controlador e papéis de tratamento;
- bases legais aplicáveis;
- contatos oficiais;
- regras internas de retenção;
- tratamento de pesquisa web/Bing;
- termos de uso aceitável;
- ownership e suporte;
- linguagem final aprovada por Jurídico/Privacidade.

## Design

Experience mode adotado: `Enterprise + Agentic AI`.
Implementação baseada no DESIGN_EUROFARMA_V2 e nos tokens fornecidos pelo projeto.


## Regra de nomenclatura

- Nome público/oficial: `EUROFARMA AI-AGENT FACTORY`.
- Alias interno de projeto: `MASTER`.
- O alias `MASTER` NÃO deve aparecer em páginas públicas, URLs, catálogo, termos, política de privacidade, materiais externos ou comunicações destinadas a usuários finais.
- O alias pode permanecer apenas em documentação interna de manutenção e colaboração entre os times responsáveis.
