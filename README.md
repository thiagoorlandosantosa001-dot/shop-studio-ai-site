# Shop Studio AI — correção de entrada do Worker

Este pacote contém o arquivo `src/index.js` que o log do Cloudflare informou estar ausente, além de `wrangler.toml` apontando para esse arquivo.

## Como usar com cuidado
1. Faça backup do repositório atual antes de alterar qualquer coisa.
2. Extraia o ZIP e envie a pasta `src` e os arquivos `wrangler.toml`, `package.json` e `README.md` para a raiz do repositório GitHub `shop-studio-ai-site`.
3. No Cloudflare, confirme que o diretório raiz é `/` e o comando de implantação é `npx wrangler deploy`.
4. Execute uma nova implantação.

As páginas `/support`, `/privacy` e `/terms` são rascunhos. Substitua os campos entre colchetes e revise o conteúdo antes de usar esses URLs para uma submissão pública. Este pacote corrige a estrutura básica do Worker; não garante aprovação do plugin na OpenAI.
