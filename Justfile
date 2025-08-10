
_default:
    just -l

# run dev server
dev:
    npm run dev

build:
    npm run build

check:
    npm run check && npm run lint

# run npm run format
fmt:
    npm run format