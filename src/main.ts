import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Auto } from './Vehiculos.ts';
import { Camion } from './Vehiculos.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Interface de Vehiculos
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

//Se invocan los metodos de encendido y apagado del vehiculo.
Auto.encender();
Auto.apagar();

Camion.encender();
Camion.apagar();

