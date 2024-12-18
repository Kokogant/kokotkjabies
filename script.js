/* styles.css */
body {
    text-align: center;
    font-family: Arial, sans-serif;
}

canvas {
    border: 2px solid black;
    margin: 20px auto;
    display: block;
}

.controls {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}

button {
    width: 50px;
    height: 50px;
    font-size: 20px;
    border-radius: 10px;
    border: none;
    background-color: #4CAF50;
    color: white;
}
/* Kontrol responsif */
.controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}

@media (min-width: 600px) {
    .controls {
        position: static;
        transform: none;
    }
}

button {
    touch-action: none; /* Supaya responsif di layar sentuh */
}