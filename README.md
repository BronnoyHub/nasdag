# Nasdag

Nytt bedriftsnettsted med Next.js, TypeScript og Sanity Studio. Opprettet fra et tomt GitHub-repositorium. Ingen kode eller filer fra det tidligere eksperimentprosjektet er brukt.

## Lokal utvikling

Bruk Node.js 24. Kopier `.env.example` til `.env.local` og sett Sanity-prosjekt-ID og datasett. Avtalte verdier: `urcqwilp` og `production`. Ikke legg API-nøkler i Git.

```sh
npm ci
npm run dev
```

Forsiden ligger på `/`. Innholdsredigering ligger på `/studio`. Logg inn med Sanity-kontoen og rediger «Bedrift og nettsted». Publisert innhold oppdateres på nettstedet innen omtrent ett minutt. Nettstedet viser tydelige plassholdere til innhold er publisert.

## Kontroller

```sh
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

I Codex-skymiljøet bruker du `NODE_USE_ENV_PROXY=1` foran dev/build/start for at serverens innholdsspørringer bruker plattformens nettverksproxy. npm-hurtigbuffer kan legges utenfor repositoriet med `--cache /workspace/.cache/nasdag-new-npm`.

## Publisering

Velg en webvert som støtter Next.js og sett de samme offentlige Sanity-miljøvariablene før bygging. Registrer nettstedets offentlige origin i Sanitys CORS-innstillinger for Studio-innlogging; aktiver credentials kun for betrodde origins. Registrer Studio-adressen med `/studio` i Sanity. Hosting, DNS og redigeringsinnlogging er ikke konfigurert automatisk av dette prosjektet.
