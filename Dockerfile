# -------- Build Stage --------
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# -------- Production Stage --------
FROM node:18

WORKDIR /app

# Install lightweight static server
RUN npm install -g serve

# Copy build output
COPY --from=build /app/build ./build

# Expose port
EXPOSE 3000

# Start production server
CMD ["serve", "-s", "build", "-l", "3000"]
