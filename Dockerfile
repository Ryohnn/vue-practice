FROM oven/bun:1.3-slim

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install

COPY . .

EXPOSE 5173

# We append -- --host so Vite/Bun knows
# to listen to external Docker connections
CMD ["bun", "run", "dev", "--", "--host"]
