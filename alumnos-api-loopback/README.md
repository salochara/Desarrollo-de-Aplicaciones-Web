# alumnos_api_loopback

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)


Para hacer un API hecho con Loopback

npm install -g @loopback/cli
lb4 --version  
lb4 app 
-- Seguir con el wizard de loopback

// Generar un endpoint 
lb4 controller hola   

// En el hola.controller.ts creado 
import {get} from '@loopback/openapi-v3';

export class HolaController {
constructor() {}
@get('/hola')
hola():string {
return 'Hola banda'
    }
}

