# ABNFlix

### 1. Running the project

If you have docker installed on your machine you may keep reading, otherwise you can jump to the next subsection with instructions on how to manually run the project.

#### 1.1 Running with Docker

-   On your terminal, navigate to the project's directory and run:

```sh
docker-compose up
```

-   Navigate to `localhost`

#### 1.2 Manually running

-   If you don't have `yarn` installed yet, you may do so by running:

```sh
npm install --global yarn
```

-   Install the dependencies and run the project:

```sh
yarn install
yarn run dev
```

-   Navigate to `localhost:5173` (If this port is already in use, check your terminal output)

### 2. Testing

For testing this application, run:

```sh
yarn test
```

### 3. Specs

This project was created using yarn instead of npm, vuejs 3.5 and nodejs 20

No UI library was used, as the requirements were simple enough that I felt free to rely solely on TailwindCSS. This app is fully responsible and was tested on Chrome/Firefox desktop apps and on an iPhone.

I split the main source directory into five subdirectories:

-   `assets`: Static files, such as images
-   `components`: Reusable components
-   `composables`: Reusable composables
-   `pages`: App pages
-   `services`: Service files, such as APIs, helpers, etc
