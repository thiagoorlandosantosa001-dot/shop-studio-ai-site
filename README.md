# Shop Studio AI — pacote inicial para GitHub + Cloudflare Workers

Este pacote cria um site de teste com estas rotas:
- `/` — apresentação
- `/support` — suporte
- `/privacy` — modelo de política de privacidade
- `/terms` — modelo de termos de serviço

## Antes de publicar
1. Abra `src/index.js`.
2. Substitua `PREENCHER_COM_SEU_EMAIL_DE_SUPORTE` por um e-mail de suporte real.
3. Substitua `PREENCHER_COM_NOME_DO_RESPONSÁVEL` pelo nome correto do responsável.
4. Revise completamente as páginas `/privacy` e `/terms`. Elas são modelos, não aconselhamento jurídico, e só devem ser publicadas depois de refletirem suas práticas reais.
5. Faça o primeiro deploy em um Worker de teste separado. **Não substitua o Worker atual antes de fazer backup e testar.**

## Colocar no GitHub
1. Baixe e extraia este ZIP.
2. No GitHub, crie um repositório novo, por exemplo `shop-studio-ai-site`.
3. Envie `README.md`, `wrangler.jsonc` e a pasta `src` para a raiz do repositório.
4. Confira se `src/index.js` e `wrangler.jsonc` aparecem no repositório.

## Cloudflare
No painel Cloudflare, crie um Worker de teste separado chamado `shop-studio-ai-test` e conecte ao repositório, ou use o fluxo de deploy Git compatível com sua conta. Confirme o resultado antes de alterar o site atual.

Este pacote é apenas a base do site e não contém nem substitui o pacote ZIP do plugin da OpenAI.
